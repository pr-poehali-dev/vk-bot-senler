import { useState, useCallback, useEffect } from "react";
import { slides } from "@/components/presentation/slides";
import { slideComponents } from "@/components/presentation/SlideComponents";
import { TopNav, BottomNav } from "@/components/presentation/PresentationNav";

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = slides.length;

  const goTo = useCallback((index: number) => {
    if (animating || index === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 220);
  }, [animating, current]);

  const prev = () => goTo(Math.max(0, current - 1));
  const next = () => goTo(Math.min(total - 1, current + 1));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") goTo(Math.min(total - 1, current + 1));
      if (e.key === "ArrowLeft") goTo(Math.max(0, current - 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, animating, goTo, total]);

  const slide = slides[current];
  const SlideComponent = slideComponents[slide.type];

  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col overflow-hidden font-golos select-none">
      <TopNav slides={slides} current={current} total={total} goTo={goTo} />

      <div className="flex-1 relative overflow-hidden">
        <div className={`absolute inset-0 transition-all duration-200 ${animating ? "opacity-0 scale-[0.99]" : "opacity-100 scale-100"}`}>
          {slide.type === "content" ? (
            <SlideComponent
              title={"title" in slide ? (slide as { title: string }).title : ""}
              points={"points" in slide ? (slide as { points: string[] }).points : []}
              icon={"icon" in slide ? (slide as { icon: string }).icon : ""}
            />
          ) : (
            <SlideComponent />
          )}
        </div>
      </div>

      <BottomNav current={current} total={total} label={slide.label} prev={prev} next={next} />
    </div>
  );
}
