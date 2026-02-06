import React from 'react';
import { 
  Database, Search, Zap, GitFork, Code, Terminal, Cpu, Table, FileText, 
  Share2, BarChart2, Layers, Sparkles, RefreshCcw, Calculator, BrainCircuit,
  MessageSquare, Globe, Mail, Shield, HardDrive, Clock, Filter, Plus, Star
} from 'lucide-react';
import { NodeItem } from './types';

export const CATEGORY_MAP = {
  Query: { label: '数据集 - 查询', color: 'text-blue-500', bgColor: 'bg-blue-50' },
  Transform: { label: '数据集 - 转换', color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
  Service: { label: '组件服务', color: 'text-purple-500', bgColor: 'bg-purple-50' },
  AI: { label: 'AI 能力', color: 'text-orange-500', bgColor: 'bg-orange-50' },
  Flow: { label: '工作流', color: 'text-rose-500', bgColor: 'bg-rose-50' }
};

export const MOCK_NODES: NodeItem[] = [
  // Query
  { id: '1', name: '连接器查询', category: 'Query', icon: 'Database', description: '从外部数据源拉取实时业务数据', color: 'blue' },
  { id: '2', name: '数据表查询', category: 'Query', icon: 'Table', description: '直接查询系统内部核心数据库', color: 'blue' },
  { id: '3', name: 'DeepModel查询', category: 'Query', icon: 'Search', description: '基于领域模型的深度数据检索', color: 'blue', isNew: true },
  { id: 'q4', name: '缓存查询', category: 'Query', icon: 'HardDrive', description: '从 Redis 或缓存层读取数据', color: 'blue' },
  { id: 'q5', name: '全局搜索', category: 'Query', icon: 'Globe', description: '跨数据源的分布式关键词搜索', color: 'blue' },
  
  // Transform
  { id: '4', name: '数据转换', category: 'Transform', icon: 'RefreshCcw', description: '基础数据类型转换与清洗', color: 'emerald' },
  { id: '5', name: 'SQL转换', category: 'Transform', icon: 'Terminal', description: '使用 SQL 语法进行复杂数据处理', color: 'emerald', isAi: true },
  { id: '6', name: 'PY转换', category: 'Transform', icon: 'Code', description: '使用 Python 脚本进行逻辑处理', color: 'emerald', isAi: true },
  { id: '7', name: '主键生成', category: 'Transform', icon: 'Zap', description: '批量生成分布式全局唯一 ID', color: 'emerald' },
  { id: '8', name: '对账逻辑', category: 'Transform', icon: 'Calculator', description: '自动比对多方流水数据一致性', color: 'emerald', isAi: true },
  { id: 't9', name: '字段加密', category: 'Transform', icon: 'Shield', description: '敏感数据字段自动掩码与加密', color: 'emerald' },
  { id: 't10', name: '排序过滤', category: 'Transform', icon: 'Filter', description: '动态配置多维数据排序规则', color: 'emerald' },
  
  // Service
  { id: '9', name: 'PY脚本', category: 'Service', icon: 'Cpu', description: '运行高性能 Python 代码块', color: 'purple' },
  { id: '10', name: '数据流', category: 'Service', icon: 'Layers', description: '触发下行子数据流执行', color: 'purple' },
  { id: '11', name: '工作流', category: 'Service', icon: 'GitFork', description: '关联审批流或业务流程', color: 'purple' },
  { id: 's12', name: '消息队列', category: 'Service', icon: 'MessageSquare', description: '向消息总线投递业务异步消息', color: 'purple' },
  { id: 's13', name: '邮件通知', category: 'Service', icon: 'Mail', description: '触发业务通知邮件自动发送', color: 'purple' },
  { id: 's14', name: '定时任务', category: 'Service', icon: 'Clock', description: '配置 Cron 表达式定时触发节点', color: 'purple' },
  
  // AI
  { id: '12', name: 'AI 总结', category: 'AI', icon: 'Sparkles', description: '利用大模型自动摘要数据结果', color: 'orange' },
  { id: '13', name: '意图识别', category: 'AI', icon: 'BrainCircuit', description: '识别文本输入中的业务意图', color: 'orange', isAi: true },
  { id: 'a14', name: '情感分析', category: 'AI', icon: 'MessageSquare', description: '分析用户评论或输入的正负面情绪', color: 'orange', isAi: true },
  { id: 'a15', name: 'OCR识别', category: 'AI', icon: 'FileText', description: '提取图片或文档中的结构化信息', color: 'orange' },
  { id: 'a16', name: '文本翻译', category: 'AI', icon: 'Globe', description: '支持多国语言的自动化互译', color: 'orange' },
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
    case 'BrainCircuit': return <BrainCircuit {...props} />;
    case 'MessageSquare': return <MessageSquare {...props} />;
    case 'Globe': return <Globe {...props} />;
    case 'Mail': return <Mail {...props} />;
    case 'Shield': return <Shield {...props} />;
    case 'HardDrive': return <HardDrive {...props} />;
    case 'Clock': return <Clock {...props} />;
    case 'Filter': return <Filter {...props} />;
    case 'Plus': return <Plus {...props} />;
    case 'Star': return <Star {...props} />;
    default: return <Database {...props} />;
  }
};