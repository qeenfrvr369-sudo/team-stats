import { Player } from '../types';

export const mockPlayers: Player[] = [
  {
    id: "1",
    name: "Aleks",
    nickname: "L",
    photo: "/players/aleksey.jpg",
    position: "FRV",
    number: 10,
    bio: "Best frv.",
    stats: { games: 18, goals: 14, assists: 7, points: 21 },
    awards: [
      { title: "MVP", season: "2025/26" },
      { title: "Best rvr", season: "2025/26" }
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
    name: "Ilja",
    nickname: "gg",
    photo: "/players/maria.jpg",
    position: "midl",
    number: 8,
    bio: "master.",
    stats: { games: 20, goals: 6, assists: 12, points: 18 },
    awards: [{ title: "big men", season: "2025/26" }],
    progress: [
      { date: "01.09", points: 2 },
      { date: "15.09", points: 4 },
      { date: "01.10", points: 7 },
      { date: "20.10", points: 11 },
      { date: "10.11", points: 15 },
      { date: "05.12", points: 18 }
    ]
  }
];