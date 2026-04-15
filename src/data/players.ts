// src/data/players.ts
import { Player } from '../types';

export const mockPlayers: Player[] = [
  // ==================== ЧОНБУРИ ====================
  {
    id: "1",
    teamId: "chonburi",
    name: "Алексей Иванов",
    nickname: "Лекс",
    photo: "/players/aleksey.jpg",
    position: "Нападающий",
    number: 10,
    nationality: "Россия",
    age: 24,
    stats: { games: 18, goals: 14, assists: 7, points: 21, minutes: 1420 },
    awards: [
      { title: "MVP сезона", season: "2025/26", type: "team" },
      { title: "Лучший бомбардир", season: "2025/26", type: "league" }
    ],
    progress: [
      { date: "01.09", points: 3 },
      { date: "15.09", points: 5 },
      { date: "01.10", points: 8 },
      { date: "20.10", points: 12 },
      { date: "10.11", points: 18 },
      { date: "05.12", points: 21 }
    ]
  },
  {
    id: "2",
    teamId: "chonburi",
    name: "Мария Смирнова",
    nickname: "Маша",
    photo: "/players/maria.jpg",
    position: "Полузащитник",
    number: 8,
    nationality: "Россия",
    age: 22,
    stats: { games: 20, goals: 6, assists: 12, points: 18 },
    awards: [{ title: "Лучший ассистент", season: "2025/26", type: "team" }],
    progress: [
      { date: "01.09", points: 2 },
      { date: "15.09", points: 4 },
      { date: "01.10", points: 7 },
      { date: "20.10", points: 11 },
      { date: "10.11", points: 15 },
      { date: "05.12", points: 18 }
    ]
  },

  // ==================== ГУАНЧЖОУ ====================
  {
    id: "3",
    teamId: "guangzhou",
    name: "Ли Вей",
    nickname: "Dragon",
    photo: "/players/liwei.jpg",
    position: "Нападающий",
    number: 9,
    nationality: "Китай",
    age: 26,
    stats: { games: 19, goals: 12, assists: 5, points: 17 },
    awards: [{ title: "Лучший бомбардир команды", season: "2025/26", type: "team" }],
    progress: [
      { date: "01.09", points: 4 },
      { date: "15.09", points: 7 },
      { date: "01.10", points: 10 },
      { date: "20.10", points: 13 },
      { date: "10.11", points: 15 },
      { date: "05.12", points: 17 }
    ]
  },
  {
    id: "4",
    teamId: "guangzhou",
    name: "Ван Чжан",
    nickname: "Iron Wall",
    photo: "/players/wangzhang.jpg",
    position: "Защитник",
    number: 5,
    nationality: "Китай",
    age: 28,
    stats: { games: 21, goals: 1, assists: 3, points: 4 },
    awards: [],
    progress: [
      { date: "01.09", points: 1 },
      { date: "15.09", points: 1 },
      { date: "01.10", points: 2 },
      { date: "20.10", points: 2 },
      { date: "10.11", points: 3 },
      { date: "05.12", points: 3 }
    ]
  }
];