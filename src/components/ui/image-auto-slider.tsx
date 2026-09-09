import React from 'react';

interface ImageAutoSliderProps {
  images: { src: string; alt: string }[];
  speed?: number; // seconds for one full loop
}

export const ImageAutoSlider: React.FC<ImageAutoSliderProps> = ({
  images,
  speed = 30,
}) => {
  // Duplicate for seamless loop
  const duplicated = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .image-auto-slider-track {
          animation: scroll-right ${speed}s linear infinite;
        }
        .image-auto-slider-track:hover {
          animation-play-state: paused;
        }
        .image-auto-slider-wrap {
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>

      <div className="image-auto-slider-wrap w-full overflow-hidden">
        <div className="image-auto-slider-track flex gap-4 w-max">
          {duplicated.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 md:w-60 lg:w-72 flex flex-col gap-2"
            >
              <div className="w-full h-48 md:h-60 lg:h-72 rounded-2xl overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-center text-sm text-espresso font-display tracking-wide truncate px-1">
                {img.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
