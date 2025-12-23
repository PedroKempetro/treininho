export interface Intern {
  name: string;
  course: string;
  area: string;
  photo?: string;
  startDate: string;
  message?: string;
  emoji?: string;
}

export interface Area {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  area: string;
  date: string;
  tags: string[];
}

export interface Stat {
  label: string;
  value: string | number;
  icon: string;
  color?: string;
}

export interface Skill {
  name: string;
  type: "hard" | "soft";
  level?: number;
}

export interface Moment {
  id: string;
  description: string;
  image?: string;
  date: string;
}

export interface Challenge {
  title: string;
  before: string;
  after: string;
  icon: string;
}

export interface Feedback {
  text: string;
  author: string;
  role: string;
}

export interface KempetroWrappedData {
  year: string;
  companyName: string;
  
  // Ato 1 - Quem somos
  interns: Intern[];
  totalInterns: number;
  totalAreas: number;
  totalHours: number;
  
  // Ato 2 - O que vivemos
  areas: Area[];
  projects: Project[];
  stats: Stat[];
  skills: Skill[];
  moments: Moment[];
  challenges: Challenge[];
  feedbacks: Feedback[];
  
  // Ato 3 - O que vem pela frente
  futureMessage: string;
  nextSteps: string[];
}

export type SessionType = 
  | "opening"
  | "who-are-interns"
  | "first-day"
  | "areas"
  | "projects"
  | "stats"
  | "learnings"
  | "papos-estagiario"
  | "moments"
  | "challenges"
  | "feedbacks"
  | "future"
  | "credits";
