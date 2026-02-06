
export type NodeCategory = 'Query' | 'Transform' | 'Service' | 'AI' | 'Flow';

export interface NodeItem {
  id: string;
  name: string;
  category: NodeCategory;
  icon: string;
  description: string;
  color: string;
  isNew?: boolean;
  isAi?: boolean;
}

export enum SidebarStyle {
  MODERN_BENTO = 'MODERN_BENTO',
  GLASS_DOCK = 'GLASS_DOCK',
  HI_RES_LIST = 'HI_RES_LIST',
  MINIMAL_EXPAND = 'MINIMAL_EXPAND'
}
