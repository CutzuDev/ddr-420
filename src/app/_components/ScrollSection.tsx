"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ScrollSectionProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({ children, imageSrc, imageAlt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">{children}</div>
      </div>
    </div>
  );
};

