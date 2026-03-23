import Icon from "@/components/ui/icon";
import { VkLogo } from "@/components/presentation/SlideComponents";
import { Slide } from "@/components/presentation/slides";

interface TopNavProps {
  slides: Slide[];
  current: number;
  total: number;
  goTo: (index: number) => void;
}

export function TopNav({ slides, current, total, goTo }: TopNavProps) {
  return (
    <div className="flex-shrink-0 bg-white border-b border-gray-100 px-5 py-2.5 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <VkLogo />
        <div>
          <p className="font-montserrat font-bold text-gray-900 text-sm leading-tight">Бот‑рассыльник Senler</p>
          <p className="font-golos text-gray-400 text-xs">Новицкий С. · Наквасин М.</p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-1.5">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            title={s.label}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === current ? "w-8 bg-[#0077FF]" : "w-2 bg-gray-200 hover:bg-blue-300"
            }`}
          />
        ))}
      </div>

      <div className="font-golos text-gray-400 text-sm">
        <span className="font-semibold text-[#0077FF]">{current + 1}</span>
        <span className="mx-1">/</span>
        {total}
      </div>
    </div>
  );
}

interface BottomNavProps {
  current: number;
  total: number;
  label: string;
  prev: () => void;
  next: () => void;
}

export function BottomNav({ current, total, label, prev, next }: BottomNavProps) {
  return (
    <div className="flex-shrink-0 bg-white border-t border-gray-100 px-5 py-2.5 flex items-center justify-between shadow-sm">
      <button
        onClick={prev}
        disabled={current === 0}
        className="flex items-center gap-2 px-4 py-2 rounded-xl font-golos text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-50 text-[#0077FF] cursor-pointer"
      >
        <Icon name="ChevronLeft" size={18} />
        Назад
      </button>

      <span className="font-golos text-gray-400 text-sm font-medium">{label}</span>

      <button
        onClick={next}
        disabled={current === total - 1}
        className="flex items-center gap-2 px-4 py-2 rounded-xl font-golos text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-[#0077FF] text-white hover:bg-blue-600 cursor-pointer"
      >
        Далее
        <Icon name="ChevronRight" size={18} />
      </button>
    </div>
  );
}
