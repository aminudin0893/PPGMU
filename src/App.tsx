import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Book,
  Brain,
  GraduationCap,
  LayoutDashboard,
  ChevronRight,
  Menu,
  X,
  ArrowLeft,
  SearchX,
  Sparkles,
  Send,
  MessageCircle,
  Clock,
  ExternalLink,
  ChevronDown,
  FileText,
  Settings,
  Key,
  BookOpen,
  Heart,
  RotateCcw,
  Quote,
  Shield,
  Users
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { TOPICS } from './data';
import { QUIZ_DATA, QuizQuestion } from './quizData';
import { ModuleCategory, Topic, Section } from './types';
import { askAiMentor } from './services/geminiService';

const Visualizer = ({ section }: { section: Section }) => {
  if (!section.visualization) return null;

  const { type, data } = section.visualization;

  return (
    <div className="mt-6 p-3 sm:p-6 bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-inner">
      <div className="flex items-center gap-2 mb-4 text-indigo-400 font-bold text-[10px] uppercase tracking-widest">
        <Sparkles className="w-3 h-3" /> Visualisasi AI
      </div>
      
      {type === 'workflow' && (
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {(data as string[]).map((step, i) => (
            <div key={i} className="flex flex-col lg:flex-row items-center gap-4 flex-1 w-full">
              <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-100 text-[10px] sm:text-xs font-bold text-center w-full">
                {step}
              </div>
              {i < (data as string[]).length - 1 && (
                <ChevronRight className="w-4 h-4 text-slate-600 rotate-90 lg:rotate-0" />
              )}
            </div>
          ))}
        </div>
      )}

      {type === 'comparison' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
             <p className="text-green-400 text-[10px] font-black uppercase mb-2">Tipe A</p>
             <p className="text-white text-xs sm:text-sm font-bold">{(data as any).left}</p>
           </div>
           <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <p className="text-amber-400 text-[10px] font-black uppercase mb-2">Tipe B</p>
              <p className="text-white text-xs sm:text-sm font-bold">{(data as any).right}</p>
           </div>
        </div>
      )}

      {type === 'concept-map' && (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 p-2 sm:p-4">
          {(data as string[]).map((node, i) => (
            <div key={i} className="px-3 sm:px-5 py-1.5 sm:py-2 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-full text-white text-[10px] sm:text-sm font-bold shadow-lg shadow-indigo-500/20">
              {node}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ProphetTimeline = ({ subsections }: { subsections: any[] }) => {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {subsections.map((sub, idx) => {
        const parts = sub.content.split(' | ').reduce((acc: any, part: string) => {
          const [key, value] = part.split(': ');
          if (key && value) acc[key.trim()] = value.trim();
          return acc;
        }, {});

        return (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-hover:bg-indigo-600 transition-colors shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 sticky top-20 md:relative md:top-0">
              <span className="text-xs font-black text-slate-500 group-hover:text-white">{idx + 1}</span>
            </div>
            
            {/* Card */}
            <div className="w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <h4 className="font-black text-lg text-indigo-950 uppercase tracking-tight">{sub.title}</h4>
                <div className="px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-black rounded-full uppercase tracking-widest whitespace-nowrap">
                  {parts['Usia'] ? `Usia: ${parts['Usia']}` : 'Kisah Nabi'}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Lahir & Wafat</p>
                  <p className="text-xs text-slate-700 font-bold">{parts['Lahir'] || '-'} / {parts['Wafat'] || parts['Diangkat'] || '-'}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Kota Kelahiran</p>
                  <p className="text-xs text-slate-700 font-bold">{parts['Kota Lahir'] || '-'}</p>
                </div>
                <div className="col-span-2 pt-2 border-t border-slate-100 flex items-start gap-4">
                  <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Misi Dakwah</p>
                    <p className="text-xs text-slate-600 leading-relaxed italic">{parts['Dakwah'] || sub.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ParentingCard = ({ section }: { section: Section }) => {
  return (
    <div className="bg-rose-50/30 rounded-3xl p-6 sm:p-8 border border-rose-100 flex flex-col gap-6">
      <div>
        <h4 className="text-2xl font-black text-rose-900 mb-2 leading-tight">{section.title}</h4>
        <p className="text-rose-700/80 leading-relaxed italic">{section.content}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-rose-100 shadow-sm shadow-rose-200/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <p className="text-xs font-black text-rose-900 uppercase tracking-widest">Aktivitas Belajar</p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">{section.learningActivity}</p>
        </div>
        
        <div className="p-5 bg-white/80 backdrop-blur-sm rounded-2xl border border-rose-100 shadow-sm shadow-rose-200/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <p className="text-xs font-black text-emerald-900 uppercase tracking-widest">Penerapan Harian</p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">{section.dailyLife}</p>
        </div>
      </div>
    </div>
  );
};

const PillarGrid = ({ subsections }: { subsections: any[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {subsections.map((sub, idx) => (
        <div key={idx} className="group relative bg-white border border-slate-200 rounded-3xl p-6 hover:border-emerald-500 transition-all hover:shadow-xl hover:shadow-emerald-500/10">
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-lg group-hover:bg-emerald-600 transition-colors rotate-6 group-hover:rotate-0">
            {idx + 1}
          </div>
          <h4 className="text-xl font-black text-slate-950 mb-3 pr-8">{sub.title.split(': ')[1] || sub.title}</h4>
          <p className="text-sm text-slate-500 leading-relaxed mb-4">{sub.content}</p>
          {sub.explanation && (
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 italic text-[11px] text-slate-600 font-medium">
              {sub.explanation}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const HijriyahLayout = ({ subsections }: { subsections: any[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {subsections.map((sub, idx) => (
        <div key={idx} className="flex flex-col gap-3 p-4 bg-sky-50/50 rounded-2xl border border-sky-100 hover:bg-white hover:border-sky-400 transition-all text-center group">
          <div className="mx-auto w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform">
            {idx + 1}
          </div>
          <div>
            <h5 className="font-black text-sky-950 text-xs sm:text-sm uppercase tracking-tight">{sub.title}</h5>
            <p className="text-[10px] text-sky-700/70 font-bold leading-tight mt-1">{sub.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const ClassicTextLayout = ({ subsections }: { subsections: any[] }) => {
  return (
    <div className="space-y-8">
      {subsections.map((sub, idx) => (
        <div key={idx} className="group bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 hover:border-indigo-500 transition-all shadow-sm hover:shadow-xl hover:shadow-indigo-500/5">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-xl shadow-sm">
              {idx + 1}
            </div>
            <h4 className="text-xl font-black text-slate-900 tracking-tight">{sub.title}</h4>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 text-right">
              <p className="text-3xl sm:text-4xl text-slate-900 font-arabic leading-[1.8] tracking-wide" dir="rtl">
                {sub.content.split('Meaning:')[0].trim()}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                <p className="text-[10px] font-black text-emerald-900 uppercase tracking-widest mb-1">Terjemahan</p>
                <p className="text-slate-700 leading-relaxed font-medium capitalize">
                   {sub.content.includes('Meaning:') ? sub.content.split('Meaning:')[1].trim() : sub.content}
                </p>
              </div>
              
              {sub.explanation && (
                <div className="p-4 bg-indigo-50/30 rounded-2xl border border-indigo-100">
                  <p className="text-[10px] font-black text-indigo-900 uppercase tracking-widest mb-1">Penjelasan & Hikmah</p>
                  <p className="text-slate-600 leading-relaxed italic text-sm">
                    {sub.explanation}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TopicSection = ({ section, idx, isProphets, category }: { section: Section, idx: number, isProphets?: boolean, category?: ModuleCategory, key?: any }) => {
  const [activeTab, setActiveTab] = useState<'content' | 'activity' | 'daily'>('content');
  
  return (
    <section key={idx} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2">
          <div className="w-1.5 h-6 bg-indigo-500 rounded-full" />
          {section.title}
        </h3>
        
        {/* Tabs */}
        <div className="flex bg-slate-100 p-1 rounded-xl self-start overflow-x-auto max-w-full">
          {[
            { id: 'content', label: 'Materi', icon: <Book className="w-3.5 h-3.5" /> },
            { id: 'activity', label: 'Kegiatan', icon: <FileText className="w-3.5 h-3.5" /> },
            { id: 'daily', label: 'Harian', icon: <Clock className="w-3.5 h-3.5" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'bg-white text-indigo-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'content' && (
            <div className="space-y-6">
              {category === ModuleCategory.PARENTING ? (
                <ParentingCard section={section} />
              ) : isProphets && section.subsections && section.title.includes("25 Nabi") ? (
                <div className="mt-10">
                  <ProphetTimeline subsections={section.subsections} />
                </div>
              ) : category === ModuleCategory.PILLARS && section.subsections ? (
                <div className="mt-4">
                   <h4 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                     <div className="w-2 h-8 bg-emerald-500 rounded-full" />
                     {section.title}
                   </h4>
                   <PillarGrid subsections={section.subsections} />
                </div>
              ) : category === ModuleCategory.HIJRIYAH && section.subsections ? (
                <div className="mt-4">
                  <h4 className="text-xl font-black text-sky-900 mb-6 flex items-center gap-2">
                     <div className="w-2 h-8 bg-sky-500 rounded-full" />
                     {section.title}
                  </h4>
                  <HijriyahLayout subsections={section.subsections} />
                </div>
              ) : (category === ModuleCategory.MAHFUDZAT || category === ModuleCategory.ARBAIN) && section.subsections ? (
                <div className="mt-4">
                  <ClassicTextLayout subsections={section.subsections} />
                </div>
              ) : (
                <>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{section.content}</p>
                  {section.subsections && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                       {section.subsections.map((sub, sIdx) => (
                         <div key={sIdx} className="p-5 bg-slate-50 rounded-xl border border-slate-200/60 transition-all hover:bg-white hover:shadow-md hover:shadow-slate-200/50">
                           <h4 className="font-bold text-slate-800 text-sm mb-2">{sub.title}</h4>
                           <p className="text-sm text-slate-500 leading-relaxed mb-3">{sub.content}</p>
                           {sub.explanation && (
                             <div className="pt-3 border-t border-slate-200/60">
                               <p className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Penjelasan Detail:</p>
                               <p className="text-[12px] text-slate-600 leading-relaxed italic">{sub.explanation}</p>
                             </div>
                           )}
                         </div>
                       ))}
                    </div>
                  )}
                </>
              )}
              {section.explanation && !section.subsections && (
                 <div className="p-5 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
                   <p className="text-xs font-black text-indigo-900 uppercase mb-2">Penjelasan Mendalam</p>
                   <p className="text-sm text-slate-600 leading-relaxed italic">{section.explanation}</p>
                 </div>
              )}
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="bg-amber-50/50 border border-amber-100 p-6 rounded-2xl">
              <h4 className="text-sm font-bold text-amber-900 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4" /> Contoh Dalam Kegiatan Pembelajaran
              </h4>
              <p className="text-sm text-amber-800 leading-relaxed">
                {section.learningActivity || "Belum ada contoh kegiatan pembelajaran spesifik untuk sub-materi ini. Gunakan metode diskusi atau pemecahan masalah sederhana di kelas."}
              </p>
            </div>
          )}

          {activeTab === 'daily' && (
            <div className="bg-green-50/50 border border-green-100 p-6 rounded-2xl">
              <h4 className="text-sm font-bold text-green-900 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4" /> Contoh Dalam Kehidupan Sehari-hari
              </h4>
              <p className="text-sm text-green-800 leading-relaxed">
                {section.dailyLife || "Penerapan utama dalam kehidupan adalah dengan mengamalkan nilai-nilai luhur dan menjaga akhlak yang baik di mana pun berada."}
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Visualizer Component */}
      <Visualizer section={section} />
    </section>
  );
};

const App = () => {
  // Existing states...
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ModuleCategory | 'Dashboard' | 'Quiz'>('Dashboard');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [activeQuizType, setActiveQuizType] = useState<'PG' | 'Essay' | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // AI Chat States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [userApiKey, setUserApiKey] = useState(() => localStorage.getItem('GEMINI_API_KEY') || '');
  const [showApiSettings, setShowApiSettings] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const filteredTopics = useMemo(() => {
    return TOPICS.filter((t) => {
      const matchesSearch =
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.sections.some(s => s.content.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'Dashboard' || t.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const stats = {
    total: TOPICS.length,
    pedagogik: TOPICS.filter(t => t.category === ModuleCategory.PEDAGOGIK).length,
    profesional: TOPICS.filter(t => t.category === ModuleCategory.PROFESIONAL).length,
    perangkat: TOPICS.filter(t => t.category === ModuleCategory.PERANGKAT).length,
    parenting: TOPICS.filter(t => t.category === ModuleCategory.PARENTING).length,
    psikologi: TOPICS.filter(t => t.category === ModuleCategory.PSIKOLOGI).length,
    hijriyah: TOPICS.filter(t => t.category === ModuleCategory.HIJRIYAH).length,
    prophets: TOPICS.filter(t => t.category === ModuleCategory.PROPHETS).length,
    angels: TOPICS.filter(t => t.category === ModuleCategory.ANGELS).length,
    pillars: TOPICS.filter(t => t.category === ModuleCategory.PILLARS).length,
    asmaulHusna: TOPICS.filter(t => t.category === ModuleCategory.ASMAUL_HUSNA).length,
    mahfudzat: TOPICS.filter(t => t.category === ModuleCategory.MAHFUDZAT).length,
    arbain: TOPICS.filter(t => t.category === ModuleCategory.ARBAIN).length,
    kodeEtik: TOPICS.filter(t => t.category === ModuleCategory.KODE_ETIK_GURU).length,
    sahabat: TOPICS.filter(t => t.category === ModuleCategory.SAHABAT).length,
    keluargaNabi: TOPICS.filter(t => t.category === ModuleCategory.KELUARGA_NABI).length,
    quizCount: 200
  };

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, val: 'Dashboard' },
    { label: 'Profesional', icon: GraduationCap, val: ModuleCategory.PROFESIONAL, stat: stats.profesional },
    { label: 'Pedagogik', icon: Brain, val: ModuleCategory.PEDAGOGIK, stat: stats.pedagogik },
    { label: 'Perangkat', icon: Book, val: ModuleCategory.PERANGKAT, stat: stats.perangkat },
    { label: "Arba'in Nawawi", icon: BookOpen, val: ModuleCategory.ARBAIN, stat: stats.arbain },
    { label: 'Mahfudzat', icon: Quote, val: ModuleCategory.MAHFUDZAT, stat: stats.mahfudzat },
    { label: 'Parenting', icon: Heart, val: ModuleCategory.PARENTING, stat: stats.parenting },
    { label: 'Psikologi', icon: Brain, val: ModuleCategory.PSIKOLOGI, stat: stats.psikologi },
    { label: 'Hijriyah', icon: Clock, val: ModuleCategory.HIJRIYAH, stat: stats.hijriyah },
    { label: '25 Nabi', icon: GraduationCap, val: ModuleCategory.PROPHETS, stat: stats.prophets },
    { label: '10 Malaikat', icon: Sparkles, val: ModuleCategory.ANGELS, stat: stats.angels },
    { label: 'Rukun', icon: Book, val: ModuleCategory.PILLARS, stat: stats.pillars },
    { label: 'Asmaul Husna', icon: Heart, val: ModuleCategory.ASMAUL_HUSNA, stat: stats.asmaulHusna },
    { label: '200 Sahabat', icon: Users, val: ModuleCategory.SAHABAT, stat: stats.sahabat },
    { label: 'Keluarga Nabi', icon: Heart, val: ModuleCategory.KELUARGA_NABI, stat: stats.keluargaNabi },
    { label: 'Kode Etik Guru', icon: Shield, val: ModuleCategory.KODE_ETIK_GURU, stat: stats.kodeEtik },
  ];

  const categories = [
    { name: 'Profesional', icon: '📐', color: '#DCFCE7', val: ModuleCategory.PROFESIONAL, detail: `${stats.profesional} Materi PAI` },
    { name: 'Pedagogik', icon: '🧬', color: '#E0E7FF', val: ModuleCategory.PEDAGOGIK, detail: `${stats.pedagogik} Materi Utama` },
    { name: 'Perangkat', icon: '📂', color: '#FEF9C3', val: ModuleCategory.PERANGKAT, detail: `${stats.perangkat} Modul Belajar` },
    { name: "Arba'in", icon: '📚', color: '#F0FDFA', val: ModuleCategory.ARBAIN, detail: `${stats.arbain} Hadits Terbaik` },
    { name: 'Mahfudzat', icon: '📜', color: '#FFF7ED', val: ModuleCategory.MAHFUDZAT, detail: `${stats.mahfudzat} Kata Mutiara` },
    { name: 'Parenting', icon: '❤️', color: '#FDF2F8', val: ModuleCategory.PARENTING, detail: `${stats.parenting} Materi Keluarga` },
    { name: 'Psikologi', icon: '🧠', color: '#F3E8FF', val: ModuleCategory.PSIKOLOGI, detail: `${stats.psikologi} Teori & Praktik` },
    { name: 'Hijriyah', icon: '🌙', color: '#F0F9FF', val: ModuleCategory.HIJRIYAH, detail: `${stats.hijriyah} Kisah Bulan` },
    { name: '25 Nabi', icon: '✨', color: '#FFF7ED', val: ModuleCategory.PROPHETS, detail: `${stats.prophets} Kisah Rasul` },
    { name: '10 Malaikat', icon: '🛡️', color: '#F5F3FF', val: ModuleCategory.ANGELS, detail: `${stats.angels} Tugas Suci` },
    { name: 'Rukun', icon: '⚖️', color: '#ECFDF5', val: ModuleCategory.PILLARS, detail: `${stats.pillars} Iman & Islam` },
    { name: 'Asmaul Husna', icon: '📿', color: '#FFF1F2', val: ModuleCategory.ASMAUL_HUSNA, detail: `${stats.asmaulHusna} Nama Allah` },
    { name: '200 Sahabat', icon: '👥', color: '#FDF4FF', val: ModuleCategory.SAHABAT, detail: `${stats.sahabat} Kisah Teladan` },
    { name: 'Keluarga Nabi', icon: '🕌', color: '#F0FDF4', val: ModuleCategory.KELUARGA_NABI, detail: `${stats.keluargaNabi} Silsilah Mulia` },
    { name: 'Kode Etik', icon: '🛡️', color: '#F0F9FF', val: ModuleCategory.KODE_ETIK_GURU, detail: `${stats.kodeEtik} Pedoman Guru` },
  ];

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    
    const userMsg = chatInput;
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setChatInput('');
    setIsAiLoading(true);

    const context = selectedTopic 
      ? `Topik: ${selectedTopic.title}. Ringkasan: ${selectedTopic.summary}`
      : "Umum PPG PAI";
      
    const aiResponse = await askAiMentor(userMsg, context, userApiKey);
    setChatMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsAiLoading(false);
  };

  const handleSaveApiKey = (key: string) => {
    setUserApiKey(key);
    localStorage.setItem('GEMINI_API_KEY', key);
    setShowApiSettings(false);
  };

  const handleNavClick = (val: ModuleCategory | 'Dashboard' | 'Quiz') => {
    setSelectedCategory(val);
    setSelectedTopic(null);
    setActiveQuizType(null);
    setSearchQuery('');
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-slate-50 overflow-hidden font-sans">
      {/* Existing Header... */}
      <header className="w-full bg-white border-b border-slate-200 flex items-center px-4 md:px-6 justify-between z-40 h-16 shrink-0 shadow-sm">
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1.5 sm:p-2 md:hidden hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5 text-slate-600" />
          </button>
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div className="hidden xs:block">
            <span className="text-lg sm:text-xl font-black tracking-tighter text-slate-900 leading-none">SakuPedia</span>
            <span className="text-[8px] sm:text-[10px] block font-bold text-indigo-500 tracking-widest uppercase -mt-0.5 sm:-mt-1 ml-0.5">Guru AI Edition</span>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-xl mx-8 lg:mx-12 relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          <input
            type="text"
            placeholder="Cari teori, PBL, PjBL, atau dalil..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (selectedTopic) setSelectedTopic(null);
            }}
            className="w-full bg-slate-100/80 border-2 border-transparent rounded-2xl py-2 pl-12 pr-4 text-sm focus:bg-white focus:border-indigo-100 focus:ring-4 focus:ring-indigo-500/5 transition-all outline-none"
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
           <button 
             onClick={() => setIsChatOpen(!isChatOpen)}
             className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all group"
           >
             <MessageCircle className="w-5 h-5" />
             {chatMessages.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white ring-1 ring-red-200">
                  {chatMessages.length}
                </span>
             )}
           </button>
           <div className="hidden lg:block text-right">
              <p className="text-xs font-bold text-slate-900">Aminudin</p>
              <p className="text-[9px] font-bold text-green-600 uppercase tracking-wider">Online</p>
           </div>
           <div className="w-9 h-9 sm:w-10 sm:h-10 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400">
             <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
           </div>
        </div>
      </header>



      <div className="flex flex-1 overflow-hidden relative min-h-0">
        {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-200 p-5 flex flex-col gap-1 z-[60] transition-transform duration-300 transform md:relative md:translate-x-0 md:z-auto
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex md:hidden items-center justify-between mb-6">
          <span className="text-lg font-bold text-slate-900">Menu</span>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <div className="text-[11px] font-bold uppercase text-slate-400 mb-3 px-3 tracking-widest leading-none">Menu Utama</div>
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleNavClick(item.val as any)}
            className={`nav-item ${selectedCategory === item.val ? 'active' : ''}`}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
            {item.stat !== undefined && <span className="stat-badge">{item.stat}</span>}
          </button>
        ))}
        
        <div className="h-px bg-slate-100 my-4 mx-3" />
        <div className="text-[11px] font-bold uppercase text-slate-400 mb-3 px-3 tracking-widest leading-none">Koleksi</div>
        <div className="nav-item"><span>⭐️</span> Favorit</div>
        <div className="nav-item"><span>🕒</span> Terakhir Dibaca</div>
        
        <div className="mt-auto p-3 bg-slate-50 rounded-xl border border-slate-100">
           <p className="text-[10px] text-slate-400 font-mono">V 2.0 • 2025</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="p-4 md:p-8 pb-32 md:pb-40 overflow-y-auto flex-1 flex flex-col gap-6 md:gap-8 custom-scrollbar col-start-2 row-start-2 min-h-0 relative">
        {/* Mobile Search */}
        <div className="md:hidden relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari materi..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (selectedTopic) setSelectedTopic(null);
            }}
            className="w-full bg-white border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none shadow-sm"
          />
        </div>
        <AnimatePresence mode="wait">
          {selectedTopic ? (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-4xl mx-auto w-full space-y-6"
            >
              <button 
                onClick={() => setSelectedTopic(null)}
                className="flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:translate-x-[-4px] transition-transform"
              >
                <ArrowLeft className="w-4 h-4" /> Kembali
              </button>

              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 sm:p-8 border-b border-slate-100 bg-slate-50/30">
                  <span className="tag tag-blue mb-4">{selectedTopic.category}</span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 sm:mb-4">{selectedTopic.title}</h1>
                  <p className="text-slate-500 leading-relaxed text-sm sm:text-lg">{selectedTopic.summary}</p>
                </div>
                
                <div className="p-4 sm:p-8 space-y-12">
                  {selectedTopic.sections.map((section, idx) => (
                    <TopicSection 
                      key={idx} 
                      section={section} 
                      idx={idx} 
                      isProphets={selectedTopic.category === ModuleCategory.PROPHETS}
                      category={selectedTopic.category}
                    />
                  ))}

                  {selectedTopic.readingMaterial && (
                    <div className="pt-10 border-t border-slate-100">
                      <div className="flex items-center gap-3 mb-6">
                         <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold">
                           <Book className="w-5 h-5" />
                         </div>
                         <div>
                            <h3 className="font-bold text-slate-900">Materi Referensi Mendalam</h3>
                            <p className="text-xs text-slate-400 font-medium tracking-wide">SUMBER: MODUL PPG PAI 2025</p>
                         </div>
                      </div>
                      <div className="reading-content p-8 bg-indigo-50/30 rounded-3xl border border-indigo-100/50 leading-loose text-slate-600 italic">
                        {selectedTopic.readingMaterial}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick AI Tip Card */}
              <div className="p-6 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-indigo-500/20 transition-all" />
                <div className="space-y-2 relative z-10">
                   <h4 className="text-lg font-bold flex items-center gap-2">
                     <Sparkles className="w-5 h-5 text-indigo-400" /> Tanya Mentor AI
                   </h4>
                   <p className="text-sm text-slate-300 max-w-md">
                     Ingin tahu implementasi praktis atau dalil terkait topik ini? Tanyakan langsung pada SakuPedia AI.
                   </p>
                </div>
                <button 
                  onClick={() => setIsChatOpen(true)}
                  className="px-8 py-3 bg-white text-indigo-950 font-black rounded-xl hover:bg-indigo-50 transition-all relative z-10"
                >
                  Mulai Diskusi
                </button>
              </div>
            </motion.div>
          ) : selectedCategory === 'Quiz' ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {activeQuizType && (
                      <button 
                        onClick={() => setActiveQuizType(null)}
                        className="p-1 hover:bg-slate-100 rounded-lg text-indigo-600 mr-2"
                      >
                        <ArrowLeft className="w-5 h-5" />
                      </button>
                    )}
                    <h2 className="text-2xl font-black text-slate-900">
                      {activeQuizType === 'PG' ? 'Bank Soal Pilihan Ganda' : activeQuizType === 'Essay' ? 'Bank Soal Essay' : 'Ujian Mandiri & Bank Soal'}
                    </h2>
                  </div>
                  <p className="text-slate-500 font-medium">
                    {activeQuizType ? `Total ${QUIZ_DATA.filter(q => q.type === activeQuizType).length} Soal` : '100 Soal PG & 100 Soal Essay Terintegrasi'}
                  </p>
                </div>
              </div>
              
              {!activeQuizType ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">Pilihan Ganda (100 Soal)</h3>
                    <p className="text-sm text-slate-500 mb-6">Latihan soal objektif dengan kunci jawaban dan penjelasan mendalam.</p>
                    <button 
                      onClick={() => setActiveQuizType('PG')}
                      className="w-full py-3 bg-slate-100 rounded-xl font-bold text-slate-600 hover:bg-slate-900 hover:text-white transition-all"
                    >
                      Lihat Bank Soal PG
                    </button>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                      <Book className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">Soal Essay (100 Soal)</h3>
                    <p className="text-sm text-slate-500 mb-6">Latihan soal uraian untuk menguji pemahaman konsep dan pedagogik.</p>
                    <button 
                      onClick={() => setActiveQuizType('Essay')}
                      className="w-full py-3 bg-slate-100 rounded-xl font-bold text-slate-600 hover:bg-slate-900 hover:text-white transition-all"
                    >
                      Lihat Bank Soal Essay
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {QUIZ_DATA.filter(q => q.type === activeQuizType).map((quiz, idx) => (
                    <div key={quiz.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-200">
                          {quiz.category.split(' ')[0]}
                        </span>
                        <span className="text-xs font-bold text-slate-400">SOAL #{idx + 1}</span>
                      </div>
                      <p className="text-slate-800 font-bold leading-relaxed">{quiz.question}</p>
                      
                      {quiz.type === 'PG' && quiz.options && (
                        <div className="grid grid-cols-1 gap-2 mt-4">
                          {quiz.options.map(opt => (
                            <div key={opt} className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-slate-600 flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400">
                                {opt.charAt(0)}
                              </div>
                              {opt.substring(3)}
                            </div>
                          ))}
                        </div>
                      )}

                      {quiz.type === 'Essay' && (
                        <div className="mt-4">
                          <textarea
                            placeholder="Tuliskan jawaban Anda di sini untuk berlatih analisis kritis..."
                            className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl min-h-[120px] text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                          />
                        </div>
                      )}

                      <div className="pt-4 border-t border-slate-50">
                        <details className="group">
                          <summary className="flex items-center justify-between cursor-pointer list-none">
                            <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.2em] hover:opacity-80 transition-opacity flex items-center gap-2">
                              {quiz.type === 'PG' ? 'Lihat Kunci & Penjelasan' : 'Lihat Rekomendasi Jawaban'}
                            </span>
                            <ChevronDown className="w-4 h-4 text-slate-300 group-open:rotate-180 transition-transform" />
                          </summary>
                          <div className="mt-4 p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100/50">
                            <p className="text-xs font-black text-indigo-900 uppercase mb-2">
                              {quiz.type === 'PG' ? `Jawaban Benar: ${quiz.answer}` : 'Analisis Jawaban:'}
                            </p>
                            <p className="text-sm text-slate-600 leading-relaxed italic">
                              {quiz.type === 'Essay' ? quiz.answer : quiz.explanation}
                            </p>
                            {quiz.type === 'PG' && quiz.explanation && (
                              <p className="mt-2 text-[12px] text-slate-500">{quiz.explanation}</p>
                            )}
                          </div>
                        </details>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
                <h4 className="font-bold text-indigo-900 mb-2">Panduan Belajar:</h4>
                <p className="text-sm text-indigo-700 leading-relaxed">
                  Semua soal disusun berdasarkan 24 modul referensi PPG PAI. Disarankan untuk membaca materi di modul utama sebelum mengerjakan latihan soal ini untuk hasil maksimal.
                </p>
              </div>
            </motion.div>
          ) : selectedCategory === 'Dashboard' && !searchQuery ? (

            <motion.div
              key="dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col gap-8 w-full max-w-6xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-slate-200 pb-6 gap-4">
                <div className="space-y-1">
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tighter">Selamat Belajar, Guru! 👋</h1>
                  <p className="text-slate-500 font-medium text-sm sm:text-base">{new Intl.DateTimeFormat('id-ID', { dateStyle: 'full' }).format(new Date())}</p>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    TERHUBUNG
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((cat) => (
                  <div 
                    key={cat.name} 
                    className="category-card cursor-pointer group"
                    onClick={() => handleNavClick(cat.val as any)}
                  >
                    <div className="icon-circle group-hover:scale-110 transition-transform" style={{ backgroundColor: cat.color }}>{cat.icon}</div>
                    <div>
                      <div className="font-bold text-slate-900">{cat.name}</div>
                      <div className="text-[12px] text-slate-500 font-medium">{cat.detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Content Preview */}
              <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] min-h-0">
                <div className="p-6 sm:p-8 lg:border-r border-slate-100 border-b lg:border-b-0">
                   <span className="tag tag-blue mb-4">Materi Unggulan</span>
                   <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{TOPICS[2].title}</h2>
                   <p className="text-slate-500 leading-relaxed mb-8">
                     {TOPICS[2].summary} {TOPICS[2].sections[0].content}
                   </p>
                   
                   <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <code className="text-indigo-600 font-black text-lg block mb-2 font-mono">QS. Al-Baqarah: 143</code>
                      <p className="text-xs text-slate-500 font-medium italic border-l-2 border-indigo-200 pl-4 py-1">
                        "Dan demikian pula Kami telah menjadikan kamu (umat Islam) umat pertengahan agar kamu menjadi saksi atas (perbuatan) manusia..."
                      </p>
                   </div>
                </div>
                <div className="bg-slate-50/50 p-8 flex flex-col">
                  <h3 className="text-lg font-bold text-slate-800 mb-6">Ringkasan Moderasi</h3>
                  <ul className="space-y-4 flex-1">
                    {[
                      { t: 'Tawassuth', d: 'Membentuk cara pandang yang seimbang dan tidak ekstrem.' },
                      { t: 'Toleransi', d: 'Menghargai perbedaan SARA sebagai fitrah manusia.' },
                      { t: 'Keadilan', d: 'Menegakkan hak dan kewajiban secara proporsional.' },
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-slate-700 leading-none">{item.t}</p>
                          <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.d}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 sm:pt-8 space-y-3 mt-auto">
                    <button 
                      onClick={() => setSelectedTopic(TOPICS[2])}
                      className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                    >
                      Buka Materi Lengkap
                    </button>
                    <button className="w-full py-3 border border-slate-200 text-slate-600 rounded-xl font-bold text-sm hover:bg-white transition-all bg-transparent">
                      Simpan ke Favorit
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6 w-full max-w-6xl mx-auto"
            >
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {searchQuery ? `Hasil Pencarian: "${searchQuery}"` : selectedCategory}
                </h2>
                <span className="text-xs font-bold text-slate-400 bg-slate-200/50 px-2 py-1 rounded">
                  {filteredTopics.length} TEMUAN
                </span>
              </div>

              {filteredTopics.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredTopics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedTopic(topic)}
                      className="text-left bg-white border border-slate-200 p-6 rounded-2xl hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group relative"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all">
                          <Book className="w-5 h-5" />
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1">{topic.category}</p>
                      <h4 className="text-lg font-extrabold text-slate-800 mb-2">{topic.title}</h4>
                      <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed font-medium">
                        {topic.summary}
                      </p>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="py-24 text-center bg-white border border-slate-200 rounded-3xl">
                  <SearchX className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-800">Tidak ada materi ditemukan</h3>
                  <p className="text-slate-500 text-sm mt-1">Coba kata kunci lain atau pilih kategori yang berbeda.</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedCategory('Dashboard'); }}
                    className="mt-6 px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-100"
                  >
                    Atur Ulang
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* AI Chat Drawer */}
      <AnimatePresence>
        {isChatOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsChatOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[100]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:w-[450px] bg-white z-[110] shadow-2xl flex flex-col border-l border-slate-200"
            >
              <div className="p-6 bg-indigo-600 text-white flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">Mentor AI SakuPedia</h3>
                    <p className="text-[10px] text-indigo-100 uppercase tracking-widest font-black">Online • Siap Mendampingi</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setChatMessages([])}
                    className="p-2 hover:bg-white/10 rounded-lg text-indigo-100"
                    title="Bersihkan Chat"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setShowApiSettings(!showApiSettings)}
                    className={`p-2 rounded-lg transition-colors ${showApiSettings ? 'bg-white/20 text-white' : 'hover:bg-white/10 text-indigo-100'}`}
                    title="API Settings"
                  >
                    <Settings className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setIsChatOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {showApiSettings && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-indigo-50 border-b border-indigo-100 overflow-hidden"
                  >
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                         <label className="text-[10px] font-black text-indigo-900 uppercase tracking-widest flex items-center gap-1">
                           <Key className="w-3 h-3" /> Google Gemini API Key
                         </label>
                         <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-[10px] text-indigo-600 font-bold hover:underline flex items-center gap-1">
                           Dapatkan Key <ExternalLink className="w-2 h-2" />
                         </a>
                      </div>
                      <div className="flex gap-2">
                        <input 
                          type="password"
                          placeholder="Masukkan API Key Anda..."
                          value={userApiKey}
                          onChange={(e) => setUserApiKey(e.target.value)}
                          className="flex-1 bg-white border border-indigo-200 rounded-lg py-2 px-3 text-xs outline-none focus:ring-2 focus:ring-indigo-500/20"
                        />
                        <button 
                          onClick={() => handleSaveApiKey(userApiKey)}
                          className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg hover:bg-indigo-700 transition-all"
                        >
                          Simpan
                        </button>
                      </div>
                      <p className="text-[9px] text-indigo-400 font-medium italic">
                        *Key disimpan secara lokal di browser Anda dan hanya digunakan untuk memanggil AI SakuPedia.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50 custom-scrollbar">
                {chatMessages.length === 0 && (
                  <div className="text-center py-12 space-y-4">
                     <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-slate-100">
                        <MessageCircle className="w-8 h-8 text-indigo-600" />
                     </div>
                     <div>
                        <p className="font-bold text-slate-800">Halo, Bapak/Ibu Guru!</p>
                        <p className="text-sm text-slate-500 max-w-[250px] mx-auto mt-1">
                          Saya adalah asisten AI yang dilatih khusus dengan kurikulum PPG PAI. Apa yang bisa saya bantu hari ini?
                        </p>
                     </div>
                     <div className="flex flex-wrap justify-center gap-2 pt-4">
                        {['Apa itu PBL?', 'Contoh Takdir Muallaq', 'Download Modul AI'].map(q => (
                          <button 
                            key={q} 
                            onClick={() => setChatInput(q)}
                            className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-indigo-600 hover:border-indigo-600 transition-all shadow-sm"
                          >
                            {q}
                          </button>
                        ))}
                     </div>
                  </div>
                )}
                
                {chatMessages.map((msg, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={i} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-indigo-600 text-white rounded-tr-none' 
                        : 'bg-white text-slate-700 shadow-sm border border-slate-200 rounded-tl-none'
                    }`}>
                      {msg.role === 'user' ? (
                        msg.text
                      ) : (
                        <div className="markdown-body">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {msg.text}
                          </ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                {isAiLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-200">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-indigo-300 rounded-full animate-bounce" />
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <div className="w-1.5 h-1.5 bg-indigo-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <div className="p-4 bg-white border-t border-slate-100 flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Ketik pertanyaan Anda..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 bg-slate-100 border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={!chatInput.trim() || isAiLoading}
                  className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:grayscale transition-all shadow-md shadow-indigo-100"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
};

const TopicCard = ({ topic, onClick }: { topic: Topic; onClick: (t: Topic) => void }) => {
  return (
    <button
      id={`card-${topic.id}`}
      onClick={() => onClick(topic)}
      className="group text-left bg-white p-7 rounded-[32px] border border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all flex flex-col h-full relative overflow-hidden"
    >
      <div className="mb-6 flex justify-between items-center">
        <span className="text-[9px] font-black tracking-widest text-blue-600 px-3 py-1 bg-blue-50 rounded-full transition-all uppercase ring-1 ring-blue-500/10">
          {topic.category.split(' ')[0]}
        </span>
        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
            <ChevronRight className="w-4 h-4" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 font-display leading-tight pr-4">
        {topic.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6">
        {topic.summary}
      </p>
      
      <div className="mt-auto pt-6 border-t border-slate-50 flex items-center text-[10px] font-black tracking-widest text-blue-500 uppercase">
        Dalami Materi
      </div>
    </button>
  );
};

export default App;
