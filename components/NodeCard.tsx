import React from 'react';
import { Sparkles, HelpCircle, Plus, Star } from 'lucide-react';
import { NodeItem, SidebarStyle } from '../types';
import { getIcon } from '../constants';

interface NodeCardProps {
  node: NodeItem;
  variant: SidebarStyle;
}

export const NodeCard: React.FC<NodeCardProps> = ({ node, variant }) => {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    purple: 'bg-purple-50 text-purple-600 border-purple-200',
    orange: 'bg-orange-50 text-orange-600 border-orange-200',
  };

  const tagColorMap: Record<string, string> = {
    blue: 'bg-blue-100/50 text-blue-700',
    emerald: 'bg-emerald-100/50 text-emerald-700',
    purple: 'bg-purple-100/50 text-purple-700',
    orange: 'bg-orange-100/50 text-orange-700',
  };

  if (variant === SidebarStyle.MODERN_BENTO) {
    return (
      <div className="group relative flex flex-col p-4 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-grab active:cursor-grabbing overflow-hidden">
        {/* Top-Right Decorative/Functional area */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0">
          <button className="p-1.5 bg-slate-50 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
            <Star className="w-3.5 h-3.5" />
          </button>
          <button className="p-1.5 bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-md shadow-blue-100 transition-colors">
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Floating Label for New items */}
        {node.isNew && !node.isAi && (
          <div className="absolute top-3 right-3 px-2 py-0.5 bg-red-500 text-[10px] text-white font-black rounded-full shadow-lg transform rotate-6 z-10 group-hover:hidden">NEW</div>
        )}

        <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-sm border ${colorMap[node.color]}`}>
          {getIcon(node.icon, 'w-6 h-6')}
        </div>

        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-[15px] font-bold text-slate-800 line-clamp-1">{node.name}</span>
          {node.isAi && (
            <div className="flex items-center px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded-md gap-1">
              <Sparkles className="w-2.5 h-2.5 fill-blue-500" />
              <span className="text-[9px] font-black uppercase">AI</span>
            </div>
          )}
        </div>

        <p className="text-[12px] text-slate-500 leading-relaxed line-clamp-2 min-h-[36px]">
          {node.description}
        </p>

        {/* Footer info to fill space */}
        <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between">
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${tagColorMap[node.color]}`}>
            {node.category}
          </span>
          <span className="text-[10px] text-slate-300 font-medium">Drag to add</span>
        </div>
      </div>
    );
  }

  if (variant === SidebarStyle.GLASS_DOCK) {
    return (
      <div className="flex items-center gap-4 p-3 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl hover:bg-white/80 transition-all cursor-pointer group shadow-sm">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner flex-shrink-0 ${colorMap[node.color]}`}>
          {getIcon(node.icon, 'w-6 h-6')}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-sm font-bold text-slate-700 truncate">{node.name}</span>
              {node.isAi && <Sparkles className="w-3 h-3 text-blue-400 flex-shrink-0" />}
            </div>
            <HelpCircle className="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
          </div>
          <p className="text-[11px] text-slate-400 font-medium leading-normal line-clamp-2">
            {node.description}
          </p>
        </div>
      </div>
    );
  }

  // Default / HI_RES_LIST
  return (
    <div className="flex items-center gap-3 p-2.5 bg-white border border-slate-100 rounded-lg hover:border-blue-300 hover:bg-blue-50/30 transition-all cursor-pointer group">
      <div className={`w-8 h-8 rounded-md flex items-center justify-center ${colorMap[node.color]}`}>
        {getIcon(node.icon, 'w-4 h-4')}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-700 truncate">{node.name}</span>
          {node.isAi && <Sparkles className="w-3 h-3 text-blue-500" />}
        </div>
      </div>
      <div className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 bg-blue-400 transition-opacity" />
    </div>
  );
};