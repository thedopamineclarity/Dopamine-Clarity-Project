import React, { useState } from 'react';
import { Leaf } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  aspectClassName = 'aspect-[4/3]',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F2EEF8] to-[#E4DDF3] border border-[#D3C9E5] text-[#5841A3] p-6 text-center ${aspectClassName} ${className}`}
      >
        <Leaf className="w-8 h-8 mb-3 opacity-70" strokeWidth={1.5} />
        <p className="font-serif text-sm text-[#433D4D] max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};
