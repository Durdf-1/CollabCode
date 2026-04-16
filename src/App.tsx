import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  MousePointer2, 
  Mic, 
  RefreshCw, 
  History,
  Check,
  X,
  ArrowRight,
  Terminal,
  Code,
  Play,
  Menu
} from 'lucide-react';

const FEATURES = [
  { icon: Bot, title: 'AI Pilot', desc: 'ИИ-ассистент участвует в сессии как третий разработчик. Предлагает архитектурные решения и пишет код вместе с вами.' },
  { icon: MousePointer2, title: 'Ghost Cursors', desc: 'Предиктивное отображение намерений. Видите, что напишет ваш напарник еще до того, как он нажмет клавиши.' },
  { icon: Mic, title: 'Voice Annotations', desc: 'Оставляйте голосовые заметки прямо в строках кода. Напарник прослушает их, когда доберется до этого участка.' },
  { icon: RefreshCw, title: 'Async Sessions', desc: 'Кодьте асинхронно. ИИ изучит стиль вашего напарника и поможет закончить его мысль, когда его нет в сети.' },
  { icon: History, title: 'Instant Replay', desc: 'Перемещайтесь во времени по сессии. Сделайте форк состояния кода из любой миллисекунды в прошлом.' },
];

const STEPS = [
  { num: '01', title: 'Установка', desc: 'Добавьте расширение CollabCode в VS Code.' },
  { num: '02', title: 'Создание', desc: 'Один клик — и безопасная сессия открыта.' },
  { num: '03', title: 'Инвайт', desc: 'Отправьте секретную ссылку напарнику.' },
  { num: '04', title: 'Синхронизация', desc: 'ИИ-ассистент автоматически присоединяется.' },
];

const COMPARISON = [
  { feature: 'Участников', us: '∞', live: '30', codeWithMe: '5' },
  { feature: 'Асинхронный режим', us: true, live: false, codeWithMe: false },
  { feature: 'AI-участие', us: true, live: false, codeWithMe: false },
  { feature: 'Голосовые аннотации', us: true, live: false, codeWithMe: false },
  { feature: 'Instant Replay', us: true, live: false, codeWithMe: false },
];

const TESTIMONIALS = [
  { quote: 'CollabCode полностью убил потребность в митингах по код-ревью. Асинхронные сессии — это чистая магия.', author: 'Alex M.', role: 'Senior Dev' },
  { quote: 'Призрачные курсоры просто взорвали мне мозг. Ощущение, что мы сидим за одним экраном физически.', author: 'Sarah K.', role: 'Team Lead' },
  { quote: 'Мы форкаем стейты приложения из истории 10 раз за сессию. Это спасает часы дебаггинга.', author: 'Denis V.', role: 'OSS Maintainer' },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-[100dvh] relative selection:bg-purple-500/30 selection:text-white flex flex-col w-full overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-grid z-0 opacity-[0.15] w-full" />
      <div className="orb w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-purple-600/20 top-[-50px] left-[-100px] animate-pulse-glow" />
      <div className="orb w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-cyan-500/20 bottom-[10%] right-[-50px] animation-delay-2000 animate-pulse-glow" />

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/10 py-3 sm:py-4' : 'py-4 sm:py-6 bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2 z-50 relative">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <Code className="text-white w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">CollabCode</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Возможности</a>
            <a href="#how" className="hover:text-cyan-400 transition-colors">Как работает</a>
            <a href="#compare" className="hover:text-cyan-400 transition-colors">Сравнение</a>
          </nav>
          <a href="#early-access" className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all hover:border-cyan-400/50">
            Ранний доступ
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-[#030305]/95 backdrop-blur-xl z-40 transition-all duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-cyan-400">Возможности</a>
          <a href="#how" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-cyan-400">Как работает</a>
          <a href="#compare" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-cyan-400">Сравнение</a>
          <a href="#early-access" onClick={() => setMobileMenuOpen(false)} className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold w-3/4 text-center">
            Получить доступ
          </a>
        </div>
      </header>

      <main className="relative z-10 w-full">
        {/* Hero Section */}
        <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 min-h-[100dvh] flex flex-col items-center justify-center">
          <div className="container max-w-5xl mx-auto text-center w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 animate-pulse" />
              Новая эра парного программирования
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.1]"
            >
              Код вместе.<br />
              <span className="text-gradient">Будучи где угодно.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-2"
            >
              AI-native платформа, которая заменяет Live Share. Призрачные курсоры, голосовые аннотации, ИИ в роли третьего напарника и Replay любой сессии.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch justify-center gap-4 w-full px-4 sm:px-0"
            >
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                Попробовать бесплатно
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl glass hover:bg-white/5 border border-white/10 text-white font-medium flex items-center justify-center gap-2 transition-all hover:border-white/20">
                <Play className="w-5 h-5" />
                Смотреть демо
              </button>
            </motion.div>

            {/* Code Demo Terminal */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 sm:mt-20 max-w-3xl mx-auto w-full"
            >
              <div className="glass-panel rounded-xl sm:rounded-2xl overflow-hidden text-left shadow-2xl w-full">
                <div className="flex items-center px-3 sm:px-4 py-2 sm:py-3 border-b border-white/10 bg-black/40">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="mx-auto flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-slate-400 font-mono pr-8">
                    <Terminal className="w-3 h-3 sm:w-4 sm:h-4" /> index.ts
                  </div>
                </div>
                <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto relative w-full hide-scrollbar">
                  {/* Cursor overlays to simulate multiplayer. Hidden on smallest mobile due to absolute pos issues. */}
                  <motion.div 
                    animate={{ x: [0, 20, -10, 0], y: [0, 10, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="hidden sm:flex absolute top-[80px] left-[150px] pointer-events-none items-center gap-1"
                  >
                    <MousePointer2 className="w-4 h-4 text-purple-400 fill-purple-400 -rotate-90" />
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-purple-500 text-white font-sans">AI Pilot</span>
                  </motion.div>

                  <div className="min-w-[400px]">
                    <div className="text-slate-500 mb-1 sm:mb-2">// Функция обработки асинхронной сессии</div>
                    <div><span className="text-purple-400">export const</span> <span className="text-blue-400">syncSession</span> = <span className="text-purple-400">async</span> ({'{'} user, ast {'}'}) <span className="text-purple-400">{'=>'}</span> {'{'}</div>
                    <div className="pl-4">
                      <span className="text-slate-500">// AI предсказал логику на основе предыдущего кода</span><br />
                      <span className="text-purple-400">const</span> delta = <span className="text-purple-400">await</span> ai.<span className="text-cyan-400">predictNext</span>(ast);<br />
                      <br />
                      <span className="text-purple-400">return</span> {'{'}<br />
                      <div className="pl-4 text-green-300">
                        status: <span className="text-yellow-300">'sync_complete'</span>,<br />
                        ghost_cursor_pos: delta.position,<br />
                        suggestions: delta.code<br />
                      </div>
                      {'}'};<br />
                    </div>
                    <div>{'}'}</div>
                  </div>
                  
                  {/* Pulsing type cursor */}
                  <span className="inline-block w-2 sm:w-2.5 h-4 sm:h-5 bg-cyan-400/80 ml-1 animate-pulse align-middle" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem vs Solution */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 relative w-full">
          <div className="container max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Problem */}
              <div className="glass p-6 sm:p-8 rounded-[24px] sm:rounded-3xl border-red-500/20 bg-red-500/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <X className="w-24 h-24 sm:w-32 sm:h-32 text-red-500" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-500/20 text-red-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
                  Устаревший подход
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 leading-tight">Классическое совместное редактирование</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex gap-3 text-slate-300 text-sm sm:text-base"><X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 shrink-0" /> Рассинхронизация при плохом соединении.</li>
                  <li className="flex gap-3 text-slate-300 text-sm sm:text-base"><X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 shrink-0" /> Невозможность работать, если напарник ушел.</li>
                  <li className="flex gap-3 text-slate-300 text-sm sm:text-base"><X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 shrink-0" /> Конфликты версий и потерянный контекст.</li>
                  <li className="flex gap-3 text-slate-300 text-sm sm:text-base"><X className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 shrink-0" /> Созвоны для объяснения каждой строчки кода.</li>
                </ul>
              </div>

              {/* Solution */}
              <div className="glass-panel p-6 sm:p-8 rounded-[24px] sm:rounded-3xl border-cyan-500/30 relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-500/20 blur-[60px] sm:blur-[80px]" />
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 rounded-lg">
                  Подход CollabCode
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 leading-tight">AI-Native синхронизация</h3>
                <ul className="space-y-3 sm:space-y-4 relative z-10">
                  <li className="flex gap-3 text-white text-sm sm:text-base"><Check className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 shrink-0" /> ИИ продолжает работу за напарника асинхронно.</li>
                  <li className="flex gap-3 text-white text-sm sm:text-base"><Check className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 shrink-0" /> Голосовые аннотации привязаны к AST-дереву.</li>
                  <li className="flex gap-3 text-white text-sm sm:text-base"><Check className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 shrink-0" /> Replay-машина с возможностью форка момента.</li>
                  <li className="flex gap-3 text-white text-sm sm:text-base"><Check className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 shrink-0" /> Чтение намерений через Ghost Cursors.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 relative w-full">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">Разрушаем границы <br className="md:hidden" /><span className="text-gradient">сотворчества</span></h2>
              <p className="text-slate-400 text-base sm:text-lg px-2">Набор инструментов следующего поколения, созданный для команд, которые хотят двигаться быстрее.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {FEATURES.map((feat, idx) => (
                <div 
                  key={idx} 
                  className={`glass p-6 sm:p-8 rounded-[24px] sm:rounded-3xl glass-hover group relative overflow-hidden transition-all duration-500 ${idx < 2 ? 'md:col-span-1 lg:col-span-1' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-colors duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 sm:mb-6 text-cyan-400 group-hover:scale-110 group-hover:text-purple-400 transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] shrink-0">
                      <feat.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{feat.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how" className="py-16 sm:py-24 px-4 sm:px-6 relative w-full">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Как это <span className="text-gradient">работает</span></h2>
              <p className="text-slate-400 text-sm sm:text-base px-4">Начать использовать CollabCode проще, чем заварить кофе.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20" />

              {STEPS.map((step, idx) => (
                <div key={idx} className="relative text-center group">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto glass rounded-2xl flex items-center justify-center mb-4 sm:mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">{step.num}</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-white">{step.title}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm px-2 sm:px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section id="compare" className="py-16 sm:py-24 px-4 sm:px-6 relative w-full overflow-hidden">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16">Сравнение <span className="text-gradient">с аналогами</span></h2>
            
            <div className="glass-panel rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl w-full">
              <div className="overflow-x-auto w-full pb-4 sm:pb-0">
                <table className="w-full text-left border-collapse min-w-[650px] sm:min-w-[700px]">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-4 sm:py-6 px-4 sm:px-6 font-medium text-slate-400 w-1/3 text-xs sm:text-base">Возможности</th>
                      <th className="py-4 sm:py-6 px-4 sm:px-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-center text-sm sm:text-lg">CollabCode</th>
                      <th className="py-4 sm:py-6 px-4 sm:px-6 font-medium text-slate-400 text-center text-xs sm:text-base">Live Share</th>
                      <th className="py-4 sm:py-6 px-4 sm:px-6 font-medium text-slate-400 text-center text-xs sm:text-base">Code With Me</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {COMPARISON.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-4 sm:py-5 px-4 sm:px-6 font-medium text-slate-200 text-xs sm:text-base">{row.feature}</td>
                        <td className="py-4 sm:py-5 px-4 sm:px-6 text-center">
                          {typeof row.us === 'boolean' 
                            ? <Check className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mx-auto" />
                            : <span className="font-bold text-cyan-400 text-base sm:text-xl">{row.us}</span>
                          }
                        </td>
                        <td className="py-4 sm:py-5 px-4 sm:px-6 text-center">
                          {typeof row.live === 'boolean' 
                            ? (row.live ? <Check className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mx-auto" /> : <span className="text-slate-600">—</span>)
                            : <span className="text-slate-500 font-mono text-xs sm:text-base">{row.live}</span>
                          }
                        </td>
                        <td className="py-4 sm:py-5 px-4 sm:px-6 text-center">
                          {typeof row.codeWithMe === 'boolean' 
                            ? (row.codeWithMe ? <Check className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mx-auto" /> : <span className="text-slate-600">—</span>)
                            : <span className="text-slate-500 font-mono text-xs sm:text-base">{row.codeWithMe}</span>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 relative w-full">
          <div className="container max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass border-cyan-500/30 mb-4 sm:mb-6">
                <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-cyan-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-medium text-cyan-100">Уже 5000+ команд вместе с нами</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">Что говорят <span className="text-gradient">разработчики</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="glass p-6 sm:p-8 rounded-[24px] sm:rounded-3xl relative">
                  <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white/5 absolute top-5 right-5 sm:top-6 sm:right-6" />
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white text-sm sm:text-base shadow-lg shrink-0">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-medium text-xs sm:text-sm">{t.author}</div>
                      <div className="text-slate-400 text-[10px] sm:text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="early-access" className="py-16 sm:py-24 px-4 sm:px-6 relative w-full">
          <div className="container max-w-4xl mx-auto">
            <div className="glass-panel p-6 sm:p-10 md:p-16 rounded-[32px] sm:rounded-[40px] text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />
              <div className="relative z-10 w-full">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Готовы к код-магии?</h2>
                <p className="text-slate-400 text-sm sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto px-2">
                  Запишитесь в лист ожидания, чтобы получить ранний доступ к CollabCode и навсегда изменить ваш процесс парного программирования.
                </p>
                
                {submitted ? (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm sm:text-base font-medium max-w-full text-center"
                  >
                    <Check className="w-5 h-5 shrink-0" />
                    Вы успешно добавлены в лист ожидания!
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 sm:gap-3 w-full px-2 sm:px-0">
                    <input 
                      type="email" 
                      required
                      placeholder="ваша@почта.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full sm:flex-1 px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-black/40 border border-white/10 text-white text-sm sm:text-base placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-mono"
                    />
                    <button type="submit" className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold shrink-0 transition-all sm:hover:scale-105">
                      Присоединиться
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 relative z-10 bg-black/20 w-full mt-auto">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl py-8 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-6 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
              <Code className="text-white w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <span className="font-bold text-white text-base sm:text-lg">CollabCode</span>
          </div>
          
          <div className="text-slate-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} CollabCode Inc. Все права защищены.
          </div>

          <div className="flex items-center justify-center gap-4">
            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
            </a>
            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
