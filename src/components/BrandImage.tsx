import React, { useState } from 'react';

export const BRAND_ASSETS = {
  logo: {
    local: './images/rosa-logo-clean.png',
    localRaw: './images/rosa-logo.png',
    remote: 'https://i.ibb.co/WWrGxSSz/Chat-GPT-Image-Jul-24-2026-10-32-17-PM-optimized-500.png',
    alt: 'ROSA Peanut Butter official logo',
  },
  heroExplosion: {
    local: './images/rosa-hero-explosion.png',
    remote: 'https://i.ibb.co/d47SK2NC/Chat-GPT-Image-Jul-24-2026-04-51-39-AM-1-optimized-300.png',
    alt: 'ROSA Peanut Butter dynamic splash showcase',
  },
  breadLifestyle: {
    local: './images/rosa-bread.png',
    remote: 'https://i.ibb.co/yFh6vQrQ/Chat-GPT-Image-Jul-24-2026-10-16-52-PM.png',
    alt: 'ROSA Peanut Butter spread on warm bread',
  },
  productClean: {
    local: './images/rosa-product-clean.png',
    localRaw: './images/rosa-product.png',
    remote: 'https://i.ibb.co/1YBjzrkJ/Gemini-Generated-Image-ibyhhfibyhhfibyh-clean-optimized-500.png',
    alt: 'ROSA Peanut Butter jar showcase',
  },
};

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  primarySrc: string;
  fallbackSrc: string;
  alt: string;
  containerClassName?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  primarySrc,
  fallbackSrc,
  alt,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [src, setSrc] = useState<string>(primarySrc);
  const [hasFailedAll, setHasFailedAll] = useState<boolean>(false);

  const handleError = () => {
    if (src !== fallbackSrc) {
      setSrc(fallbackSrc);
    } else {
      setHasFailedAll(true);
    }
  };

  if (hasFailedAll) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#4A2C1A]/5 text-[#4A2C1A] p-8 text-center rounded-2xl ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <span className="font-serif-display text-2xl font-semibold tracking-tight text-[#4A2C1A]">
          ROSA
        </span>
        <span className="text-xs text-[#8B5A2B] mt-1">ROSA Peanut Butter</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      referrerPolicy="no-referrer"
      className={className}
      {...props}
    />
  );
};
