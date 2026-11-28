# Journal Moderation Security Specification

## Data Invariants
1. Every document in `/story_submissions/{storyId}` must contain strictly the 10 schema fields defined in `firebase-blueprint.json` (`title`, `author`, `isAnonymous`, `date`, `topic`, `content`, `status`, `consentGiven`, `createdAt`, `updatedAt`).
2. Public story creation MUST initialize `status` to `'pending'`, `consentGiven` to `true`, and `createdAt`/`updatedAt` to `request.time`.
3. Public reads (`get` and `list`) are strictly restricted to documents where `status == 'approved'`. Unapproved (`pending` / `rejected`) stories cannot be listed or read by unauthenticated visitors or non-admin users.
4. Only verified coordinators (`isAdmin()`, requiring `request.auth.token.email_verified == true`) can list pending/rejected stories, transition `status` to `'approved'` or `'rejected'`, or delete submissions.
5. No PII fields (`email`, `phone`, `address`, `uid`, `ip`) exist on `story_submissions`. Anonymous submissions enforce `author == 'Anonymous'`.

## Dirty Dozen Adversarial Payloads (All Must Yield PERMISSION_DENIED)
1. **State Shortcutting on Create**: Visitor submits `{ ..., status: "approved" }` trying to bypass moderation.
2. **Shadow Field Injection on Create**: Visitor submits `{ ..., isFeatured: true, role: "admin" }`.
3. **Consent Bypass**: Visitor submits `{ ..., consentGiven: false }`.
4. **Anonymous Name Spoofing**: Visitor submits `{ isAnonymous: true, author: "Real Person" }`.
5. **Resource Exhaustion / Payload Bomb**: Visitor submits `{ ..., content: "<5000+ chars>" }` or `{ ..., title: "<200+ chars>" }`.
6. **ID Poisoning**: Visitor targets `/story_submissions/bad$id..with/chars` or >128 char ID.
7. **Timestamp Forgery on Create**: Visitor passes custom past/future `createdAt` instead of `request.time`.
8. **Pending Queue Scraping**: Unauthenticated visitor queries `/story_submissions` without `where('status', '==', 'approved')` or queries `where('status', '==', 'pending')`.
9. **Unauthenticated Approval**: Visitor sends `updateDoc` changing `status` from `'pending'` to `'approved'`.
10. **Email Spoofing Attack**: Signed-in user with `email_verified: false` tries to list pending stories or approve a submission.
11. **Immortal Field Tampering**: Signed-in admin tries to overwrite `createdAt` during an approval update.
12. **Self-Assigned Admin Escalation**: Regular user tries to create `/admins/{theirUid}` with `{ role: 'coordinator' }`.
