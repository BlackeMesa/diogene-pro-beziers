import { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({ beforeImage, afterImage, beforeLabel = "Avant", afterLabel = "Après" }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-strong select-none" onMouseDown={handleMouseDown} onTouchStart={handleMouseDown}>
      {/* Image Après (fond) */}
      <div className="relative w-full">
        <img src={afterImage} alt="Après nettoyage" className="w-full h-auto block" draggable={false} />

        {/* Label Après */}
        <div className="absolute top-4 right-4 bg-success text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">{afterLabel}</div>
      </div>

      {/* Image Avant (clip) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img src={beforeImage} alt="Avant nettoyage" className="w-full h-full object-cover" draggable={false} />

        {/* Label Avant */}
        <div className="absolute top-4 left-4 bg-destructive text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">{beforeLabel}</div>
      </div>

      {/* Slider Line */}
      <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10 shadow-lg" style={{ left: `${sliderPosition}%` }}>
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-primary rounded-full shadow-strong flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform">
          {/* Left Arrow */}
          <svg className="absolute left-1" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2L2 6L6 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
          </svg>

          {/* Right Arrow */}
          <svg className="absolute right-1" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L6 6L2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
          </svg>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">← Glissez pour comparer →</div>
    </div>
  );
};

export default BeforeAfterSlider;
