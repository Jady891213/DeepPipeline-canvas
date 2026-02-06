import React, { useState } from 'react';
import { Search, Filter, Pin, Maximize2, X, LayoutGrid, List, Layers, Star } from 'lucide-react';
import { SidebarStyle, NodeCategory } from '../types';
import { MOCK_NODES, CATEGORY_MAP } from '../constants';
import { NodeCard } from './NodeCard';

interface NodeSidebarProps {
  style: SidebarStyle;
}

export const NodeSidebar: React.FC<NodeSidebarProps> = ({ style }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<NodeCategory | 'All'>('All');

  const filteredNodes = MOCK_NODES.filter(node => 
    (activeCategory === 'All' || node.category === activeCategory) &&
    (node.name.toLowerCase().includes(search.toLowerCase()) || node.description.toLowerCase().includes(search.toLowerCase()))
  );

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return MOCK_NODES.length;
    return MOCK_NODES.filter(n => n.category === cat).length;
  };

  const renderContent = () => {
    switch (style) {
      case SidebarStyle.MODERN_BENTO:
        return (
          <div className="h-full flex flex-col bg-slate-50 w-[460px] border-l border-slate-200">
            {/* Header */}
            <div className="p-6 pb-4 bg-white border-b border-slate-100">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-xl font-black text-slate-800 tracking-tight">节点市场</h2>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">Component Marketplace</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2.5 hover:bg-slate-50 border border-slate-100 rounded-xl transition-all text-slate-500 hover:text-blue-600">
                    <Star className="w-4 h-4" />
                  </button>
                  <button className="p-2.5 hover:bg-slate-50 border border-slate-100 rounded-xl transition-all text-slate-500">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="relative group">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="搜索 25+ 个连接器与算法节点..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-100 border-none rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
                />
              </div>
            </div>

            {/* Categories Sticky Bar */}
            <div className="flex px-6 py-3 gap-2.5 overflow-x-auto no-scrollbar bg-white border-b border-slate-100 shadow-sm z-10">
              {['All', ...Object.keys(CATEGORY_MAP)].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                    activeCategory === cat 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200 ring-2 ring-blue-100' 
                    : 'bg-white text-slate-500 border-slate-100 hover:border-slate-300 hover:text-slate-800'
                  }`}
                >
                  {cat === 'All' ? '全部' : (CATEGORY_MAP as any)[cat].label.split(' - ')[1] || (CATEGORY_MAP as any)[cat].label}
                  <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${activeCategory === cat ? 'bg-blue-500/50' : 'bg-slate-100 text-slate-400'}`}>
                    {getCategoryCount(cat)}
                  </span>
                </button>
              ))}
            </div>

            {/* Grid Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
              {/* Recently Used Section */}
              {activeCategory === 'All' && !search && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">常用节点</h3>
                    <div className="h-px flex-1 bg-slate-100 ml-4" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {MOCK_NODES.slice(0, 4).map(node => (
                      <NodeCard key={`recent-${node.id}`} node={node} variant={SidebarStyle.MODERN_BENTO} />
                    ))}
                  </div>
                </div>
              )}

              {/* Main Grid */}
              <div className="space-y-4 pb-12">
                <div className="flex items-center justify-between">
                  <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest">
                    {activeCategory === 'All' ? '所有组件' : (CATEGORY_MAP as any)[activeCategory].label}
                  </h3>
                  <div className="h-px flex-1 bg-slate-100 ml-4" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {filteredNodes.map(node => (
                    <NodeCard key={node.id} node={node} variant={SidebarStyle.MODERN_BENTO} />
                  ))}
                </div>
              </div>

              {filteredNodes.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                  <Search className="w-12 h-12 mb-4 opacity-10" />
                  <p className="text-sm font-bold">没有找到匹配的组件</p>
                  <button onClick={() => {setSearch(''); setActiveCategory('All');}} className="mt-4 text-blue-500 text-xs font-bold hover:underline">重置过滤器</button>
                </div>
              )}
            </div>
          </div>
        );

      case SidebarStyle.GLASS_DOCK:
        return (
          <div className="h-full flex flex-col w-[380px] p-6 bg-gradient-to-br from-slate-100 to-blue-50 border-l border-white shadow-2xl">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-slate-800 leading-tight">组件库</h2>
                  <p className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">Element Library</p>
                </div>
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  placeholder="寻找灵感..."
                  className="w-full pl-4 pr-12 py-3 bg-white/60 backdrop-blur-md border border-white rounded-2xl text-sm focus:bg-white transition-all outline-none shadow-sm"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-slate-800 rounded-xl">
                  <Search className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-6 pr-2 custom-scrollbar pb-12">
               {Object.keys(CATEGORY_MAP).map(catKey => {
                 const nodes = filteredNodes.filter(n => n.category === catKey);
                 if (nodes.length === 0) return null;
                 return (
                   <div key={catKey} className="space-y-3">
                     <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">{ (CATEGORY_MAP as any)[catKey].label }</h3>
                     <div className="space-y-3">
                        {nodes.map(node => (
                          <NodeCard key={node.id} node={node} variant={SidebarStyle.GLASS_DOCK} />
                        ))}
                     </div>
                   </div>
                 );
               })}
            </div>
          </div>
        );

      default:
        return (
          <div className="h-full flex flex-col bg-white w-[340px] border-l border-slate-200 shadow-xl">
            {/* Professional List View */}
            <div className="p-4 border-b border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-slate-800">所有节点</span>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 hover:bg-slate-100 rounded text-slate-500"><LayoutGrid size={16} /></button>
                  <button className="p-1.5 bg-blue-50 text-blue-600 rounded"><List size={16} /></button>
                </div>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="搜索..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:border-blue-500 transition-all outline-none"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-12">
              {Object.keys(CATEGORY_MAP).map(catKey => {
                 const nodes = filteredNodes.filter(n => n.category === catKey);
                 if (nodes.length === 0) return null;
                 return (
                   <div key={catKey}>
                     <div className="flex items-center gap-2 mb-3">
                       <div className={`w-1 h-3 rounded-full ${(CATEGORY_MAP as any)[catKey].color.replace('text', 'bg')}`} />
                       <span className="text-xs font-bold text-slate-500">{ (CATEGORY_MAP as any)[catKey].label }</span>
                       <span className="ml-auto text-[10px] text-slate-300 font-medium">{nodes.length}</span>
                     </div>
                     <div className="grid grid-cols-1 gap-2">
                        {nodes.map(node => (
                          <NodeCard key={node.id} node={node} variant={SidebarStyle.HI_RES_LIST} />
                        ))}
                     </div>
                   </div>
                 );
               })}
            </div>
          </div>
        );
    }
  };

  return renderContent();
};