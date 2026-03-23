import { useState, useCallback, useEffect } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  { id: 1, type: "title", label: "Титульный слайд" },
  {
    id: 2, type: "content", label: "Актуальность", title: "Актуальность", icon: "TrendingUp",
    points: [
      "ВКонтакте — крупнейшая социальная платформа в России с миллионной аудиторией",
      "Сообществам, блогерам и бизнесу необходимо оперативно информировать подписчиков о новостях, акциях и событиях",
      "Ручная отправка сообщений занимает много времени и не позволяет гибко сегментировать аудиторию",
      "Платформа Senler — официальное приложение ВКонтакте — обеспечивает стабильную работу ботов и рассылок без риска блокировок",
    ],
  },
  {
    id: 3, type: "content", label: "Проблема", title: "Проблема", icon: "AlertCircle",
    points: [
      "Владельцы сообществ тратят до нескольких часов в день на личные сообщения и рассылки",
      "Стандартные инструменты ВКонтакте не дают возможности управлять подписками и анализировать эффективность уведомлений",
      "Нет автоматизированного способа собирать подписчиков по интересам и отправлять только релевантную информацию",
      "Решение: создать бота‑рассыльника на базе Senler, который возьмёт на себя эти задачи",
    ],
  },
  { id: 4, type: "goal", label: "Цель проекта" },
  { id: 5, type: "tasks", label: "Задачи проекта" },
  { id: 6, type: "stages", label: "Этапы реализации" },
  { id: 7, type: "tools", label: "Инструменты и технологии" },
  { id: 8, type: "results", label: "Полученные результаты" },
  { id: 9, type: "significance", label: "Практическая значимость" },
  { id: 10, type: "prospects", label: "Перспективы развития" },
  { id: 11, type: "final", label: "Спасибо за внимание" },
];

const VkLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="#0077FF" />
    <path d="M17.07 22c-6.46 0-10.15-4.43-10.3-11.8H9.9c.1 5.47 2.52 7.79 4.43 8.27V10.2h2.8v4.3c1.88-.2 3.86-2.37 4.53-4.3h2.8c-.5 2.85-2.6 5.02-4.1 5.92 1.5.73 3.87 2.63 4.74 5.88H22.3c-.7-2.18-2.46-3.87-4.43-4.07V22h-0.8z" fill="white" />
  </svg>
);

function SlideTitle() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-blue-50 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-blue-50 -translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full border border-blue-100 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] rounded-full border border-blue-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0077FF]" />

      <div className="relative z-10 text-center px-12 max-w-4xl animate-[scale-in_0.4s_cubic-bezier(0.22,1,0.36,1)]">
        <div className="flex items-center justify-center gap-3 mb-8">
          <VkLogo />
          <div className="w-px h-8 bg-gray-200" />
          <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full">
            <div className="w-5 h-5 rounded-full bg-[#0077FF] flex items-center justify-center">
              <span className="text-white text-[10px] font-bold font-montserrat">S</span>
            </div>
            <span className="text-[#0077FF] text-sm font-semibold font-golos">Senler</span>
          </div>
        </div>

        <h1 className="font-montserrat font-black text-4xl md:text-5xl text-gray-900 leading-tight mb-4">
          Создание бота‑рассыльника для VK
          <span className="text-[#0077FF]"> с использованием платформы Senler</span>
        </h1>

        <div className="w-16 h-1 bg-[#0077FF] mx-auto my-6 rounded-full" />

        <div className="flex items-center justify-center gap-6 text-gray-400 font-golos text-sm flex-wrap">
          <div className="flex items-center gap-2">
            <Icon name="User" size={16} className="text-[#0077FF]" />
            <span>Новицкий Сергей</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="User" size={16} className="text-[#0077FF]" />
            <span>Наквасин Михаил</span>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 text-gray-400 font-golos text-sm">
          <Icon name="GraduationCap" size={16} className="text-[#0077FF]" />
          <span>Информационные системы и программирование · 1 курс</span>
        </div>
      </div>
    </div>
  );
}

function SlideContent({ title, points, icon }: { title: string; points: string[]; icon: string }) {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0077FF]" />
      <div className="flex-1 flex flex-col justify-center px-12 md:px-16 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#0077FF] flex items-center justify-center flex-shrink-0">
            <Icon name={icon} size={20} className="text-white" />
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl text-gray-900">{title}</h2>
        </div>
        <div className="space-y-4">
          {points.map((point, i) => (
            <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
              <div className="w-7 h-7 rounded-lg bg-[#0077FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold font-montserrat">{i + 1}</span>
              </div>
              <p className="font-golos text-gray-800 text-base leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideGoal() {
  const goals = [
    { icon: "Send", text: "Автоматически отправляет уведомления подписчикам в соответствии с их предпочтениями" },
    { icon: "MessageSquare", text: "Позволяет управлять подписками через интерактивный диалог" },
    { icon: "BarChart2", text: "Предоставляет аналитику по доставке и вовлечённости" },
  ];
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0077FF]" />
      <div className="flex-1 flex flex-col justify-center px-12 md:px-16 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#0077FF] flex items-center justify-center">
            <Icon name="Target" size={20} className="text-white" />
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl text-gray-900">Цель проекта</h2>
        </div>
        <p className="font-golos text-gray-400 text-base mb-8 pl-1">
          Разработать и внедрить бота‑рассыльника для сообщества ВКонтакте на платформе Senler, который:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {goals.map((g, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-[#0077FF] rounded-2xl p-6 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <Icon name={g.icon} size={24} className="text-white" />
              </div>
              <p className="font-golos text-sm leading-relaxed">{g.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideTasks() {
  const tasks = [
    "Изучить функционал Senler и подключить сообщество ВКонтакте",
    "Настроить сценарии подписки и отписки в визуальном конструкторе ботов",
    "Организовать хранение данных о подписчиках с помощью меток и сегментов",
    "Настроить массовые рассылки по категориям: «новости», «акции», «анонсы»",
    "Подключить аналитику рассылок: открытия, переходы, отписки",
    "Провести тестирование и подготовить документацию для администраторов",
  ];
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0077FF]" />
      <div className="flex-1 flex flex-col justify-center px-12 md:px-16 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#0077FF] flex items-center justify-center">
            <Icon name="CheckSquare" size={20} className="text-white" />
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl text-gray-900">Задачи проекта</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {tasks.map((task, i) => (
            <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-3">
              <div className="w-6 h-6 rounded-full bg-[#0077FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">{i + 1}</span>
              </div>
              <p className="font-golos text-gray-800 text-sm leading-relaxed">{task}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideStages() {
  const stages = [
    { name: "Анализ и проектирование", desc: "определение сценариев, структуры подписок" },
    { name: "Подготовка инфраструктуры", desc: "регистрация в Senler, подключение сообщества" },
    { name: "Настройка бота", desc: "логика подписки/отписки, кнопки, приветствие" },
    { name: "Формирование сегментов", desc: "распределение подписчиков по интересам" },
    { name: "Создание рассылок", desc: "шаблоны, планирование отправок" },
    { name: "Тестирование", desc: "проверка в тестовом сообществе, отладка" },
    { name: "Релиз", desc: "запуск в рабочем сообществе" },
    { name: "Сопровождение", desc: "анализ статистики, оптимизация" },
  ];
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0077FF]" />
      <div className="flex-1 flex flex-col justify-center px-12 md:px-16 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#0077FF] flex items-center justify-center">
            <Icon name="GitBranch" size={20} className="text-white" />
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl text-gray-900">Этапы реализации</h2>
        </div>
        <div className="relative">
          <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-blue-100" />
          <div className="space-y-2.5">
            {stages.map((s, i) => (
              <div key={i} className="flex items-center gap-4 relative">
                <div className="w-7 h-7 rounded-full bg-[#0077FF] flex items-center justify-center flex-shrink-0 z-10">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl px-4 py-2.5 flex items-center gap-3">
                  <span className="font-golos font-semibold text-gray-900 text-sm">{s.name}</span>
                  <span className="text-gray-400 text-xs hidden md:block">— {s.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideTools() {
  const tools = [
    { category: "Платформа", icon: "Cpu", items: ["Конструктор чат‑ботов Senler", "Сервис рассылок Senler", "Встроенная аналитика"] },
    { category: "Интеграция", icon: "Link", items: ["VK ID", "Официальное приложение ВКонтакте"] },
    { category: "Дополнительно", icon: "Code", items: ["Senler API v2 (при необходимости)", "Python для кастомных скриптов"] },
    { category: "Тестирование", icon: "TestTube", items: ["Тестовая группа ВКонтакте", "Встроенные инструменты отладки Senler"] },
  ];
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0077FF]" />
      <div className="flex-1 flex flex-col justify-center px-12 md:px-16 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#0077FF] flex items-center justify-center">
            <Icon name="Wrench" size={20} className="text-white" />
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl text-gray-900">Инструменты и технологии</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {tools.map((t, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#0077FF] flex items-center justify-center">
                  <Icon name={t.icon} size={16} className="text-white" />
                </div>
                <span className="font-montserrat font-bold text-gray-900 text-sm">{t.category}</span>
              </div>
              <ul className="space-y-1.5">
                {t.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0077FF] mt-2 flex-shrink-0" />
                    <span className="font-golos text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideResults() {
  const results = [
    { icon: "Bot", text: "Разработан бот‑рассыльник с командами: «Подписаться», «Отписаться», «Мои подписки»", highlight: false },
    { icon: "Users", text: "Настроены сегменты подписчиков по интересам — только релевантный контент", highlight: false },
    { icon: "BarChart", text: "Проведены тестовые рассылки; собрана статистика по доставке, открытиям и переходам", highlight: false },
    { icon: "Clock", text: "Администраторы сэкономили до 80% времени, ранее уходившего на ручную рассылку", highlight: true },
    { icon: "FileText", text: "Создана документация по настройке и использованию бота", highlight: false },
  ];
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0077FF]" />
      <div className="flex-1 flex flex-col justify-center px-12 md:px-16 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#0077FF] flex items-center justify-center">
            <Icon name="Award" size={20} className="text-white" />
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl text-gray-900">Полученные результаты</h2>
        </div>
        <div className="space-y-3">
          {results.map((r, i) => (
            <div key={i} className={`flex items-start gap-4 rounded-xl px-5 py-3.5 ${r.highlight ? "bg-[#0077FF]" : "bg-gray-50"}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${r.highlight ? "bg-white/20" : "bg-[#0077FF]"}`}>
                <Icon name={r.icon} size={16} className="text-white" />
              </div>
              <p className={`font-golos text-sm leading-relaxed ${r.highlight ? "text-white font-semibold" : "text-gray-800"}`}>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideSignificance() {
  const items = [
    { icon: "Zap", title: "Low-code подход", desc: "Демонстрирует эффективную автоматизацию коммуникаций без глубокого программирования" },
    { icon: "Copy", title: "Тиражируемость", desc: "Готовое решение для любых сообществ ВКонтакте — от блогеров до интернет‑магазинов" },
    { icon: "BookOpen", title: "Учебная ценность", desc: "Пример для изучения автоматизации маркетинга и работы с API социальных сетей" },
  ];
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0077FF]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="flex-1 flex flex-col justify-center px-12 md:px-16 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#0077FF] flex items-center justify-center">
            <Icon name="Star" size={20} className="text-white" />
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl text-gray-900">Практическая значимость</h2>
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-[#0077FF] flex items-center justify-center flex-shrink-0">
                <Icon name={item.icon} size={22} className="text-white" />
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-gray-900 text-base mb-1">{item.title}</h3>
                <p className="font-golos text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideProspects() {
  const items = [
    "Интеграция с внешними CRM‑системами (Битрикс24) через Senler API для автоматического обмена данными",
    "Подключение дополнительных каналов (Одноклассники) с помощью мультиплатформенных возможностей Senler",
    "Настройка сложных автоворонок с ветвлениями сценариев",
    "A/B‑тестирование рассылок для повышения их эффективности",
    "Масштабирование на аудиторию свыше 100 000 подписчиков с использованием платных тарифов Senler",
  ];
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#0077FF]" />
      <div className="flex-1 flex flex-col justify-center px-12 md:px-16 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#0077FF] flex items-center justify-center">
            <Icon name="Rocket" size={20} className="text-white" />
          </div>
          <h2 className="font-montserrat font-extrabold text-3xl text-gray-900">Перспективы развития</h2>
        </div>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="group flex items-center gap-4 bg-gray-50 rounded-xl px-5 py-3.5 hover:bg-blue-50 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-white border-2 border-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0077FF] group-hover:border-[#0077FF] transition-colors">
                <Icon name="ArrowRight" size={14} className="text-[#0077FF] group-hover:text-white transition-colors" />
              </div>
              <p className="font-golos text-gray-800 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideFinal() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-[#0077FF]">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-white/5 -translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full border border-white/10 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 text-center px-12">
        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-6">
          <Icon name="Heart" size={32} className="text-white" />
        </div>
        <h2 className="font-montserrat font-black text-5xl text-white mb-4">
          Спасибо за внимание!
        </h2>
        <div className="w-16 h-1 bg-white/40 mx-auto my-6 rounded-full" />
        <p className="font-golos text-white/80 text-lg">
          Доклад окончен. Готов ответить на ваши вопросы.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <Icon name="User" size={14} className="text-white/70" />
            <span className="font-golos text-white/80 text-sm">Новицкий Сергей</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <Icon name="User" size={14} className="text-white/70" />
            <span className="font-golos text-white/80 text-sm">Наквасин Михаил</span>
          </div>
        </div>
      </div>
    </div>
  );
}

 
const slideComponents: Record<string, React.FC<Record<string, unknown>>> = {
  title: SlideTitle,
  content: SlideContent,
  goal: SlideGoal,
  tasks: SlideTasks,
  stages: SlideStages,
  tools: SlideTools,
  results: SlideResults,
  significance: SlideSignificance,
  prospects: SlideProspects,
  final: SlideFinal,
};

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
      {/* Верхняя панель */}
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

      {/* Слайд */}
      <div className="flex-1 relative overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-200 ${animating ? "opacity-0 scale-[0.99]" : "opacity-100 scale-100"} transition-all`}>
          {slide.type === "content" ? (
            <SlideComponent
              title={"title" in slide ? (slide as {title: string}).title : ""}
              points={"points" in slide ? (slide as {points: string[]}).points : []}
              icon={"icon" in slide ? (slide as {icon: string}).icon : ""}
            />
          ) : (
            <SlideComponent />
          )}
        </div>
      </div>

      {/* Нижняя навигация */}
      <div className="flex-shrink-0 bg-white border-t border-gray-100 px-5 py-2.5 flex items-center justify-between shadow-sm">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-xl font-golos text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-50 text-[#0077FF] cursor-pointer"
        >
          <Icon name="ChevronLeft" size={18} />
          Назад
        </button>

        <span className="font-golos text-gray-400 text-sm font-medium">{slide.label}</span>

        <button
          onClick={next}
          disabled={current === total - 1}
          className="flex items-center gap-2 px-4 py-2 rounded-xl font-golos text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed bg-[#0077FF] text-white hover:bg-blue-600 cursor-pointer"
        >
          Далее
          <Icon name="ChevronRight" size={18} />
        </button>
      </div>
    </div>
  );
}