
import React, { useState } from 'react';
import { SidebarStyle } from './types';
import { NodeSidebar } from './components/NodeSidebar';
import { 
  Play, 
  Save, 
  Share2, 
  ChevronDown, 
  Bell, 
  Settings, 
  Menu,
  ZoomIn,
  ZoomOut,
  Maximize,
  HelpCircle,
  Eye,
  // Fix: Added missing icon imports to resolve "Cannot find name" errors
  Layers,
  Search
} from 'lucide-react';

const App: React.FC = () => {
  const [currentStyle, setCurrentStyle] = useState<SidebarStyle>(SidebarStyle.MODERN_BENTO);

  return (
    <div className="flex h-screen w-full bg-[#f8fafc] text-slate-900 select-none overflow-hidden">
      {/* Top Navigation */}
      <div className="absolute top-0 left-0 right-0 h-14 bg-white border-b border-slate-200 flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Settings className="w-5 h-5 text-white" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-800">应付暂估清单数</span>
            <span className="px-1.5 py-0.5 bg-orange-100 text-orange-600 text-[10px] font-bold rounded">BETA</span>
            <div className="h-4 w-px bg-slate-200 mx-2" />
            <div className="flex items-center gap-1 text-slate-500 text-sm cursor-pointer hover:text-slate-800">
              <span>主版本</span>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>

        {/* Demo Controls - Dynamic Style Switching */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl">
          <button 
            onClick={() => setCurrentStyle(SidebarStyle.MODERN_BENTO)}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${currentStyle === SidebarStyle.MODERN_BENTO ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
          >
            现代画廊版 (Demo首选)
          </button>
          <button 
            onClick={() => setCurrentStyle(SidebarStyle.GLASS_DOCK)}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${currentStyle === SidebarStyle.GLASS_DOCK ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
          >
            毛玻璃灵感版
          </button>
          <button 
            onClick={() => setCurrentStyle(SidebarStyle.HI_RES_LIST)}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${currentStyle === SidebarStyle.HI_RES_LIST ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
          >
            高效列表版
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 mr-4">
            <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"><Save size={18} /></button>
            <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors"><Share2 size={18} /></button>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-100 flex items-center gap-2">
            <Play size={14} fill="currentColor" />
            发布应用
          </button>
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border border-slate-300">
             <img src="https://picsum.photos/32/32" alt="Avatar" />
          </div>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="flex-1 flex mt-14 relative">
        {/* Left Sidebar (Mini) */}
        <div className="w-14 bg-white border-r border-slate-200 flex flex-col items-center py-4 gap-6">
          <Menu className="text-slate-400 cursor-pointer hover:text-slate-800" />
          <div className="flex flex-col gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className={`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-all ${i === 1 ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:bg-slate-50'}`}>
                <Layers size={20} />
              </div>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-4">
            <HelpCircle className="text-slate-300 cursor-pointer hover:text-slate-600" size={20} />
            <Settings className="text-slate-300 cursor-pointer hover:text-slate-600" size={20} />
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 canvas-grid relative overflow-hidden bg-[#fafbfc]">
          {/* Mock Node Flow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-110">
            <div className="flex items-center gap-16">
              <div className="w-32 h-32 bg-white rounded-3xl border-2 border-slate-200 shadow-xl flex flex-col items-center justify-center gap-3 relative">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  <Play size={24} />
                </div>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">START</span>
                <div className="absolute -right-16 top-1/2 w-16 h-0.5 bg-slate-300" />
              </div>
              <div className="w-44 h-24 bg-white rounded-3xl border-2 border-blue-500 shadow-xl shadow-blue-100 flex flex-col items-center justify-center gap-2 relative">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center">
                  <Search size={20} />
                </div>
                <span className="text-xs font-bold text-slate-800">DeepModel查询</span>
                <div className="absolute -right-16 top-1/2 w-16 h-0.5 bg-slate-300" />
              </div>
              <div className="w-44 h-24 bg-white rounded-3xl border-2 border-slate-200 shadow-xl flex flex-col items-center justify-center gap-2 relative">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
                  <Settings size={20} />
                </div>
                <span className="text-xs font-bold text-slate-800">数据转换</span>
              </div>
            </div>
          </div>

          {/* Canvas Tools */}
          <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white p-1.5 rounded-2xl shadow-xl border border-slate-100">
            <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-500"><ZoomIn size={18} /></button>
            <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-500"><ZoomOut size={18} /></button>
            <div className="w-px h-6 bg-slate-200 mx-1" />
            <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-500"><Maximize size={18} /></button>
            <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-500 flex items-center gap-2 px-3">
              <Eye size={18} />
              <span className="text-xs font-bold">PREVIEW</span>
            </button>
          </div>

          {/* Floating Warning for Demo */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-slate-800 text-white rounded-full text-xs font-bold shadow-2xl flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            正在演示：{currentStyle === SidebarStyle.MODERN_BENTO ? '现代画廊布局' : currentStyle === SidebarStyle.GLASS_DOCK ? '毛玻璃灵感布局' : '高效业务列表'}
          </div>
        </div>

        {/* Right Node Sidebar */}
        <NodeSidebar style={currentStyle} />
      </div>
    </div>
  );
};

export default App;
