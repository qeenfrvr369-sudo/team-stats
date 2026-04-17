// src/data/teams.ts
import { Team } from '../types';

export const teams = [
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
      name: "Александр Кержаков",
      nationality: "Россия",
      age: 42,
      bio: "Главный тренер Чонбури с 2024 года."
    }
  },
  {
    id: "guangzhou",
    name: "Guangzhou FC",
    shortName: "Гуанчжоу",
    logo: "/teams/guangzhou.png",
    city: "Гуанчжоу",
    stadium: "Tianhe Stadium",
    founded: 2011,
    mainColor: "#FFD700",
    secondaryColor: "#000000",
    coach: {
      name: "Фабио Каннаваро",
      nationality: "Италия",
      age: 52,
      bio: "Легендарный защитник, главный тренер Гуанчжоу."
    }
  }
];