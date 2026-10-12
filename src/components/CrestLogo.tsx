import React from 'react';

interface CrestLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'beige';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  stacked?: boolean;
}

export const CrestLogo: React.FC<CrestLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showText = true,
  stacked = false,
}) => {
  const sizeMap = {
    sm: { icon: 'w-10 h-10', title: 'text-sm sm:text-base', sub: 'text-[9px]' },
    md: { icon: 'w-12 h-12 sm:w-14 sm:h-14', title: 'text-lg sm:text-xl', sub: 'text-[10px] sm:text-[11px]' },
    lg: { icon: 'w-20 h-20', title: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 'w-28 h-28', title: 'text-3xl', sub: 'text-sm' },
  };

  const isLight = variant === 'light';
  const isBeige = variant === 'beige';

  return (
    <div className={`flex items-center gap-3.5 ${stacked ? 'flex-col text-center' : ''} ${className}`}>
      {/* Official Saini Public School Crest */}
      <img
        src="/images/logo-transparent.png"
        alt="Saini Public School Crest"
        className={`${sizeMap[size].icon} object-contain shrink-0 transition-transform duration-300 hover:scale-105 drop-shadow-sm`}
        loading="eager"
      />

      {showText && (
        <div className="leading-tight">
          <span
            className={`block font-serif font-bold tracking-wider uppercase ${sizeMap[size].title} ${
              isLight ? 'text-white' : isBeige ? 'text-[#D7BBA8]' : 'text-[#234B38]'
            }`}
          >
            Saini Public School
          </span>
          <span
            className={`block tracking-widest font-sans font-medium uppercase mt-0.5 ${sizeMap[size].sub} ${
              isLight ? 'text-[#D7BBA8]' : isBeige ? 'text-[#F8F6F0]/80' : 'text-[#56645B]'
            }`}
          >
            Foundation through Class 8 • Sonepat
          </span>
        </div>
      )}
    </div>
  );
};
