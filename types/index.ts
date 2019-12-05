export * from './state'

export interface About {
  id: number;
  title: string;
  iconset: string;
}

export interface Skill {
  id: number;
  title: string;
  level: number;
}

export interface Work {
  title: string;
  category: string;
  image: string;
  url: string;
}

