
export type QuestionType = 'multiple-choice' | 'true-false';

export interface PowerUp {
  id: string;
  name: string;
  description: string;
  icon: string;
  active: boolean;
  used: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: QuestionType;
  options: string[];
  correctAnswer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit: number; // in seconds
  points: number;
}

export interface QuizCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  backgroundImage?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: QuizCategory;
  questions: QuizQuestion[];
  timeLimit: number; // Total time limit in seconds
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizMode {
  id: string;
  name: string;
  description: string;
  icon: string;
  rules: string[];
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  level: number;
  xp: number;
  totalScore: number;
  badges: Badge[];
  stats: UserStats;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

export interface UserStats {
  gamesPlayed: number;
  questionsAnswered: number;
  correctAnswers: number;
  accuracy: number;
  averageTime: number;
  longestStreak: number;
  currentStreak: number;
  powerUpsUsed: number;
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  avatar: string;
  level: number;
  score: number;
  timeTaken: number; // in seconds
  timestamp: string;
}

export interface QuizResult {
  quizId: string;
  userId: string;
  score: number;
  accuracy: number;
  timeTaken: number; // in seconds
  correctAnswers: number;
  totalQuestions: number;
  streak: number;
  powerUpsUsed: number;
  timestamp: string;
  xpEarned: number;
}

export type LeaderboardType = 'daily' | 'weekly' | 'all-time';
export type QuizModeType = 'quick' | 'survival' | 'challenge';
