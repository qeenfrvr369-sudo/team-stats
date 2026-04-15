// src/types/index.ts

export type Team = {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  city: string;
  stadium?: string;
  founded?: number;
  mainColor: string;           // основной цвет команды
  secondaryColor?: string;
};

export type Player = {
  id: string;
  teamId: string;              // "chonburi" или "guangzhou"
  name: string;
  nickname?: string;
  photo: string;
  position: string;
  number: number;
  nationality?: string;
  age?: number;
  height?: number;
  bio?: string;

  stats: {
    games: number;
    goals: number;
    assists: number;
    points: number;
    minutes?: number;
    yellowCards?: number;
    redCards?: number;
  };

  awards: Array<{
    title: string;
    season: string;
    type: "team" | "league";
  }>;

  progress: Array<{
    date: string;
    points: number;
    goals?: number;
    assists?: number;
  }>;
};

export type LeagueTableRow = {
  position: number;
  teamId: string;
  teamName: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
};

export type Match = {
  id: string;
  date: string;
  time?: string;
  homeTeamId: string;
  awayTeamId: string;
  homeScore?: number;
  awayScore?: number;
  status: "upcoming" | "finished" | "live";
  competition?: string;
};

export type Award = {
  id: string;
  title: string;
  season: string;
  winnerId?: string;
  nominees?: string[];
  description?: string;
};

export type Transfer = {
  id: string;
  playerId: string;
  fromTeamId: string;
  toTeamId?: string;
  type: "transfer" | "loan" | "free";
  status: "rumor" | "confirmed" | "completed";
  date?: string;
  fee?: string;
};

// === Две команды ===
export const teams: Team[] = [
  {
    id: "chonburi",
    name: "Chonburi FC",
    shortName: "Чонбури",
    logo: "/teams/chonburi.png",
    city: "Чонбури",
    stadium: "Chonburi Stadium",
    founded: 1997,
    mainColor: "#0033A0",        // синий
    secondaryColor: "#FFFFFF"
  },
  {
    id: "guangzhou",
    name: "Guangzhou FC",
    shortName: "Гуанчжоу",
    logo: "/teams/guangzhou.png",
    city: "Гуанчжоу",
    stadium: "Tianhe Stadium",
    founded: 1954,
    mainColor: "#FFD700",        // жёлтый
    secondaryColor: "#000000"
  }
];