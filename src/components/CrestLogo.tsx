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
    sm: { icon: 'w-9 h-9', title: 'text-base', sub: 'text-[9px]' },
    md: { icon: 'w-12 h-12', title: 'text-xl', sub: 'text-[11px]' },
    lg: { icon: 'w-16 h-16', title: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 'w-20 h-20', title: 'text-3xl', sub: 'text-sm' },
  };

  const isLight = variant === 'light';
  const isBeige = variant === 'beige';

  const iconBg = isLight ? '#FFFFFF' : isBeige ? '#234B38' : '#234B38';
  const strokeColor = isLight ? '#234B38' : '#D7BBA8';
  const leafColor = isLight ? '#234B38' : '#D7BBA8';

  return (
    <div className={`flex items-center gap-3.5 ${stacked ? 'flex-col text-center' : ''} ${className}`}>
      {/* Botanical Crest SVG */}
      <div className={`relative shrink-0 ${sizeMap[size].icon} transition-transform duration-300 hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Outer circle */}
          <circle cx="50" cy="50" r="48" fill={iconBg} stroke={strokeColor} strokeWidth="2.5" />
          
          {/* Inner ring */}
          <circle cx="50" cy="50" r="42" fill="none" stroke={strokeColor} strokeWidth="1" strokeDasharray="3 2" />
          
          {/* Botanical Blossom / Flower of Individuality */}
          {/* Central Petal */}
          <path
            d="M50 22 C50 22 58 35 58 46 C58 52 54 57 50 58 C46 57 42 52 42 46 C42 35 50 22 50 22 Z"
            fill={leafColor}
            opacity="0.9"
          />
          {/* Left Petal */}
          <path
            d="M48 56 C39 52 28 42 33 32 C38 23 48 37 49 46 Z"
            fill={leafColor}
            opacity="0.75"
          />
          {/* Right Petal */}
          <path
            d="M52 56 C61 52 72 42 67 32 C62 23 52 37 51 46 Z"
            fill={leafColor}
            opacity="0.75"
          />
          
          {/* Open Book of Knowledge underneath flower */}
          <path
            d="M50 58 Q40 54 28 56 L28 69 Q40 67 50 71 Q60 67 72 69 L72 56 Q60 54 50 58 Z"
            fill={strokeColor}
          />
          <path
            d="M50 58 L50 71"
            stroke={isLight ? '#FFFFFF' : '#234B38'}
            strokeWidth="1.5"
          />
          
          {/* Ribbon / Scroll Base */}
          <path
            d="M33 76 L50 73 L67 76 L62 82 L50 79 L38 82 Z"
            fill={leafColor}
            opacity="0.8"
          />
          
          {/* Stars */}
          <circle cx="28" cy="48" r="1.5" fill={leafColor} />
          <circle cx="72" cy="48" r="1.5" fill={leafColor} />
        </svg>
      </div>

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
            Foundation through Class 8
          </span>
        </div>
      )}
    </div>
  );
};
