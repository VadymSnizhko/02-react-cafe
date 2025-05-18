export type VoteType = 'good' | 'neutral' | 'bad';

// Інтерфейс для зберігання кількості голосів
export interface Votes {
  good: number;
  neutral: number;
  bad: number;
}