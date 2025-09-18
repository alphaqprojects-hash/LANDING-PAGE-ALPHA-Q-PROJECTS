"use client";

import { motion as m, useInView, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useMemo, useRef } from "react";

type ServiceBandProps = {
  id?: string;
  bandColor: string;
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: string[];
  cta?: { label: string; href: string; external?: boolean };
  visual: {
    type: "image" | "video";
    src: string;
    alt?: string;
    poster?: string;
    aspect?: "16/9" | "4/3" | "1/1";
    priority?: boolean;
  };
  flip?: boolean;
  className?: string;
};

export default function ServiceBand(props: ServiceBandProps) {
  const {
    id,
    bandColor,
    eyebrow,
    title,
    body,
    bullets = [],
    cta,
    visual,
    flip,
    className
  } = props;

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

  // Support for reduced motion
  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section 
      id={id} 
      className={`relative overflow-clip py-20 md:py-28 ${className ?? ""}`}
    >
      {/* Band layer */}
      <m.div
        aria-hidden="true"
        className={`absolute inset-0 z-[1] ${flip ? 'origin-right' : 'origin-left'}`}
        style={{ 
          backgroundColor: bandColor,
          willChange: 'transform'
        }}
        initial={prefersReducedMotion ? { scaleX: 1 } : { scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : (prefersReducedMotion ? { scaleX: 1 } : {})}
        transition={prefersReducedMotion ? {} : { 
          duration: 0.48, 
          ease: [0.16, 1, 0.3, 1] 
        }}
      />

      <div ref={ref} className="relative z-[2] mx-auto max-w-[1200px] px-6 md:px-8">
        <div className={`grid grid-cols-12 gap-6 md:gap-8 items-center ${
          flip ? "lg:[&>div:first-child]:order-2" : ""
        }`}>
          {/* Text Content */}
          <m.div
            className="col-span-12 lg:col-span-7"
            initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : (prefersReducedMotion ? { opacity: 1, y: 0 } : {})}
            transition={prefersReducedMotion ? {} : { 
              duration: 0.32, 
              ease: "easeOut" 
            }}
          >
            {eyebrow && (
              <p className="text-sm font-medium tracking-wide uppercase opacity-80 text-white/90 mb-3">
                {eyebrow}
              </p>
            )}
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white mb-6">
              {title}
            </h2>
            
            <div 
              className="text-base md:text-lg lg:text-xl opacity-90 text-white/95 leading-relaxed mb-8" 
              dangerouslySetInnerHTML={{ __html: body }} 
            />
            
            {bullets.length > 0 && (
              <ul className="space-y-3 mb-10">
                {bullets.map((bullet, i) => (
                  <m.li 
                    key={i}
                    initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : (prefersReducedMotion ? { opacity: 1, y: 0 } : {})}
                    transition={prefersReducedMotion ? {} : { 
                      delay: 0.06 * i, 
                      duration: 0.28, 
                      ease: "easeOut" 
                    }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-white/80 flex-shrink-0" />
                    <span className="text-white/90 text-base md:text-lg leading-relaxed">{bullet}</span>
                  </m.li>
                ))}
              </ul>
            )}
            
            {cta && (
              <m.a
                href={cta.href}
                target={cta.external ? "_blank" : undefined}
                rel={cta.external ? "noreferrer" : undefined}
                className="inline-flex items-center gap-3 rounded-full bg-white text-gray-900 px-8 py-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent font-medium"
                initial={prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: 0.96, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : (prefersReducedMotion ? { scale: 1, opacity: 1 } : {})}
                transition={prefersReducedMotion ? {} : { 
                  duration: 0.18, 
                  ease: "easeOut",
                  delay: 0.2 
                }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                {cta.label}
              </m.a>
            )}
          </m.div>

          {/* Visual */}
          <Visual visual={visual} inView={inView} prefersReducedMotion={prefersReducedMotion} />
        </div>
      </div>
    </section>
  );
}

function Visual({ 
  visual, 
  inView, 
  prefersReducedMotion 
}: { 
  visual: ServiceBandProps["visual"]; 
  inView: boolean; 
  prefersReducedMotion: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start end", "end start"] 
  });
  
  // Micro parallax - disabled for reduced motion
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    prefersReducedMotion ? [0, 0] : [0, -20]
  );

  const aspectClass = useMemo(() => {
    const aspectMap: Record<string, string> = { 
      "16/9": "aspect-[16/9]", 
      "4/3": "aspect-[4/3]", 
      "1/1": "aspect-square" 
    };
    return aspectMap[visual.aspect ?? "4/3"];
  }, [visual.aspect]);

  return (
    <m.div
      ref={ref}
      className={`col-span-12 lg:col-span-5 ${aspectClass} overflow-hidden rounded-2xl border-2 border-white/20 shadow-2xl backdrop-blur-sm`}
      style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
      initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : (prefersReducedMotion ? { opacity: 1, y: 0 } : {})}
      transition={prefersReducedMotion ? {} : { 
        duration: 0.36, 
        ease: "easeOut",
        delay: 0.1 
      }}
    >
      <m.div 
        style={{ y: prefersReducedMotion ? 0 : y }}
        className="h-full w-full"
      >
        {visual.type === "image" ? (
          <div className="relative h-full w-full">
            <ImageWithFallback
              src={visual.src}
              alt={visual.alt ?? ""}
              className="h-full w-full object-cover"
            />
            {/* Image overlay for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        ) : (
          <video
            className="h-full w-full object-cover"
            poster={visual.poster}
            controls
            preload="metadata"
            aria-label="Service showcase video"
            muted
          >
            <source src={visual.src} />
            Your browser does not support the video tag.
          </video>
        )}
      </m.div>
    </m.div>
  );
}

export { ServiceBand };
export type { ServiceBandProps };