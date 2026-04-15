// src/data/teams.ts
import { Team } from '../types';

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
    founded: 2011,
    mainColor: "#FFD700",        // жёлтый
    secondaryColor: "#000000"
  }
];