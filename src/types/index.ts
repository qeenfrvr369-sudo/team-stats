export type Player = {
  id: string;
  name: string;
  nickname?: string;
  photo: string;
  position: string;
  number: number;
  bio?: string;
  stats: {
    games: number;
    goals: number;
    assists: number;
    points: number;
    minutes?: number;
  };
  awards: Array<{
    title: string;
    season: string;
  }>;
  progress: Array<{
    date: string;
    points: number;
  }>;
};