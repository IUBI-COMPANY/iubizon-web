import React, { useState, useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Product } from "@/data-list/products";
import Image from "next/image";

interface Props {
  product: Product;
}

export default function MediaCarousel({ product }: Props) {
  const [current, setCurrent] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrent(s.track.details.rel);
    },
    loop: true,
  });

  const { media } = product;
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [videoPaused] = useState<{ [key: number]: boolean }>({});
  const [zoomedImage, setZoomedImage] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    media.forEach((m, i) => {
      if (m.type === "video" && videoRefs.current[i]) {
        if (i === current && !videoPaused[i]) {
          videoRefs.current[i]?.play();
        } else {
          videoRefs.current[i]?.pause();
        }
      }
    });
  }, [current, media, videoPaused]);

  // Generate descriptive alt text for images
  const getImageAlt = (index: number) => {
    const productName = product.name || product.model;
    const brand = product.brand || "";
    const condition = product.condition === "new" ? "Nuevo" : "Reacondicionado";

    if (index === 0) {
      return `${productName} ${brand} - Imagen principal del proyector ${condition}`;
    }
    return `${productName} ${brand} - Vista ${index + 1} del proyector ${condition}`;
  };

  const handleImageClick = (index: number) => {
    if (zoomedImage === index) {
      setZoomedImage(null); // Zoom out if already zoomed
    } else {
      setZoomedImage(index); // Zoom in
    }
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    // Update custom cursor position
    setCursorPosition({ x: e.clientX, y: e.clientY });

    if (zoomedImage !== index) return;

    const container = imageContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  return (
    <div className="w-full">
      {/* Custom Cursor Follower */}
      {showCustomCursor && (
        <div
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="16"
              cy="16"
              r="10"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />
            {zoomedImage !== null ? (
              // Minus sign for zoom-out
              <line
                x1="11"
                y1="16"
                x2="21"
                y2="16"
                stroke="black"
                strokeWidth="2"
              />
            ) : (
              // Plus sign for zoom-in
              <>
                <line
                  x1="16"
                  y1="11"
                  x2="16"
                  y2="21"
                  stroke="black"
                  strokeWidth="2"
                />
                <line
                  x1="11"
                  y1="16"
                  x2="21"
                  y2="16"
                  stroke="black"
                  strokeWidth="2"
                />
              </>
            )}
            <line
              x1="23"
              y1="23"
              x2="31"
              y2="31"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}

      <div className="w-full h-[30em] md:h-[40rem] flex items-center justify-center rounded-3xl overflow-hidden shadow-lg relative">
        <div ref={sliderRef} className="keen-slider w-full h-full">
          {media.map((m, i) => (
            <div
              className="keen-slider__slide flex items-center justify-center w-full h-full"
              key={i}
            >
              {m.type === "image" ? (
                <div
                  ref={i === current ? imageContainerRef : null}
                  className="relative w-full h-full overflow-hidden cursor-none"
                  onClick={() => handleImageClick(i)}
                  onMouseMove={(e) => handleMouseMove(e, i)}
                  onMouseEnter={() => setShowCustomCursor(true)}
                  onMouseLeave={() => setShowCustomCursor(false)}
                >
                  <Image
                    src={m.src}
                    width={1000}
                    height={1000}
                    priority={i === 0}
                    alt={getImageAlt(i)}
                    className="w-full h-full object-contain relative z-10 transition-transform duration-300 ease-out"
                    style={
                      zoomedImage === i
                        ? {
                            transform: "scale(2.5)",
                            transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                          }
                        : undefined
                    }
                  />
                </div>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div
                    style={{
                      background: `url(.${media[0].src})`,
                      backgroundSize: "cover",
                      filter: "blur(8px)",
                    }}
                    className="absolute inset-0"
                    aria-hidden="true"
                  ></div>
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    width={1000}
                    height={1000}
                    controls
                    className="w-full h-full object-contain relative z-10"
                    aria-label={`Video demostrativo de ${product.name || product.model}`}
                  >
                    <source src={m.src} type="video/mp4" />
                    Tu navegador no soporta la reproducción de videos.
                  </video>
                </div>
              )}
            </div>
          ))}
        </div>
        {media.length > 1 && (
          <>
            <button
              onClick={() => slider.current?.prev()}
              className="hidden lg:block absolute w-[3em] h-[3em] left-4 top-1/2 -translate-y-1/2 text-black/60 rounded-full p-2 shadow hover:bg-[#f25c05] transition cursor-pointer border-solid border-2 border-primary"
              aria-label="Ver imagen anterior del producto"
            >
              ◀
            </button>
            <button
              onClick={() => slider.current?.next()}
              className="hidden lg:block absolute w-[3em] h-[3em] right-4 top-1/2 -translate-y-1/2 text-black/60 rounded-full p-2 shadow hover:bg-[#f25c05] transition cursor-pointer border-solid border-2 border-primary"
              aria-label="Ver siguiente imagen del producto"
            >
              ▶
            </button>
          </>
        )}
      </div>
      {media.length > 1 && (
        <div className="mt-4 flex gap-2 justify-center">
          {media.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full border-2 cursor-pointer ${
                current === idx
                  ? "border-primary/100 bg-primary/80"
                  : "border-secondary bg-white"
              } transition`}
              aria-label={`Ver media ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
