
import React from 'react';
import { 
  Database, 
  Search, 
  Zap, 
  GitFork, 
  Code, 
  Terminal, 
  Cpu, 
  Table, 
  FileText, 
  Share2, 
  BarChart2,
  Layers,
  Sparkles,
  RefreshCcw,
  Calculator,
  // Added missing BrainCircuit icon
  BrainCircuit
} from 'lucide-react';
import { NodeItem } from './types';

export const CATEGORY_MAP = {
  Query: { label: '数据集 - 查询', color: 'text-blue-500' },
  Transform: { label: '数据集 - 转换', color: 'text-emerald-500' },
  Service: { label: '组件服务', color: 'text-purple-500' },
  AI: { label: 'AI 能力', color: 'text-orange-500' },
  Flow: { label: '工作流', color: 'text-rose-500' }
};

export const MOCK_NODES: NodeItem[] = [
  { id: '1', name: '连接器查询', category: 'Query', icon: 'Database', description: '从外部数据源拉取实时业务数据', color: 'blue' },
  { id: '2', name: '数据表查询', category: 'Query', icon: 'Table', description: '直接查询系统内部核心数据库', color: 'blue' },
  { id: '3', name: 'DeepModel查询', category: 'Query', icon: 'Search', description: '基于领域模型的深度数据检索', color: 'blue', isNew: true },
  
  { id: '4', name: '数据转换', category: 'Transform', icon: 'RefreshCcw', description: '基础数据类型转换与清洗', color: 'emerald' },
  { id: '5', name: 'SQL转换', category: 'Transform', icon: 'Terminal', description: '使用 SQL 语法进行复杂数据处理', color: 'emerald', isAi: true },
  { id: '6', name: 'PY转换', category: 'Transform', icon: 'Code', description: '使用 Python 脚本进行逻辑处理', color: 'emerald', isAi: true },
  { id: '7', name: '主键生成', category: 'Transform', icon: 'Zap', description: '批量生成分布式全局唯一 ID', color: 'emerald' },
  { id: '8', name: '对账逻辑', category: 'Transform', icon: 'Calculator', description: '自动比对多方流水数据一致性', color: 'emerald', isAi: true },
  
  { id: '9', name: 'PY脚本', category: 'Service', icon: 'Cpu', description: '运行高性能 Python 代码块', color: 'purple' },
  { id: '10', name: '数据流', category: 'Service', icon: 'Layers', description: '触发下行子数据流执行', color: 'purple' },
  { id: '11', name: '工作流', category: 'Service', icon: 'GitFork', description: '关联审批流或业务流程', color: 'purple' },
  
  { id: '12', name: 'AI 总结', category: 'AI', icon: 'Sparkles', description: '利用大模型自动摘要数据结果', color: 'orange' },
  { id: '13', name: '意图识别', category: 'AI', icon: 'BrainCircuit', description: '识别文本输入中的业务意图', color: 'orange' },
];

export const getIcon = (name: string, className?: string) => {
  const props = { className: className || 'w-5 h-5', strokeWidth: 2 };
  switch (name) {
    case 'Database': return <Database {...props} />;
    case 'Search': return <Search {...props} />;
    case 'Zap': return <Zap {...props} />;
    case 'GitFork': return <GitFork {...props} />;
    case 'Code': return <Code {...props} />;
    case 'Terminal': return <Terminal {...props} />;
    case 'Cpu': return <Cpu {...props} />;
    case 'Table': return <Table {...props} />;
    case 'FileText': return <FileText {...props} />;
    case 'Share2': return <Share2 {...props} />;
    case 'BarChart2': return <BarChart2 {...props} />;
    case 'Layers': return <Layers {...props} />;
    case 'Sparkles': return <Sparkles {...props} />;
    case 'RefreshCcw': return <RefreshCcw {...props} />;
    case 'Calculator': return <Calculator {...props} />;
    // Added case for BrainCircuit icon
    case 'BrainCircuit': return <BrainCircuit {...props} />;
    default: return <Database {...props} />;
  }
};
