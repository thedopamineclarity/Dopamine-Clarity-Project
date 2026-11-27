import React, { useState } from 'react';

interface BrandMarkProps {
  className?: string;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ className = 'w-10 h-10' }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg bg-[#5841A3] text-[#FAF8FC] font-serif font-semibold text-xs tracking-tight ${className}`}
        aria-hidden="true"
      >
        DCP
      </div>
    );
  }

  return (
    <img
      src={`${import.meta.env.BASE_URL}assets/aistudio/logo_5be68ca7`}
      alt="The Dopamine Clarity Project DCP logo"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`rounded-lg object-cover border border-[#D3C9E5] shadow-xs ${className}`}
    />
  );
};
