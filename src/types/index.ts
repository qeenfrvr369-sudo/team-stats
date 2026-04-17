// src/types/index.ts

export type Team = {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  city: string;
  stadium: string;
  founded: number;
  mainColor: string;
  secondaryColor?: string;
  coach: Coach;
};

export type Coach = {
  id: string;
  name: string;
  nationality: string;
  age: number;
  photo?: string;
  bio?: string;
};

export type Player = {
  id: string;
  teamId: string;
  name: string;
  nickname?: string;
  photo: string;
  position: string;
  number: number;
  nationality: string;
  age: number;
  height?: number;
  bio: string;                    // ← добавил

  stats: {
    games: number;
    goals: number;
    assists: number;
    points: number;
    minutes: number;
    yellowCards: number;          // ← добавил
    redCards: number;             // ← добавил
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

export const teams: Team[] = [
  {
    id: "chonburi",
    name: "Chonburi FC",
    shortName: "Чонбури",
    logo: "/teams/chonburi.png",
    city: "Чонбури",
    stadium: "Chonburi Stadium",
    founded: 1997,
    mainColor: "#0033A0",
    secondaryColor: "#FFFFFF",
    coach: {
      id: "coach1",
      name: "Liman Lisuashev",
      nationality: "France",
      age: 124,
      bio: "Легендарный защитник, главный тренер Гуанчжоу."
    }
  },
  {
    id: "guangzhou",
    name: "Guangzhou FC",
    shortName: "Гуанчжоу",
    logo: "/teams/guangzhou.png",
    city: "Гуанчжоу",
    stadium: "Tianhe Stadium",
    founded: 1954,
    mainColor: "#FFD700",
    secondaryColor: "#000000",
    coach: {
      id: "coach2",
      name: "Ilja Homuz",
      nationality: "Россия",
      age: 22,
      bio: "Главный тренер Чонбури с 2026 года."
    }
  }
];