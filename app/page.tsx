"use client";

import { Card, CardContent } from "../components/ui/card";
import { Trophy } from "lucide-react";
import Image from "next/image";
import { mockPlayers } from "../src/data/players";

export default function Home() {
  const topPlayers = mockPlayers.slice(0, 3);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800 py-6 sticky top-0 bg-zinc-950/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl">
              ⚽
            </div>
            <div>
              <h1 className="text-3xl font-bold">Team Statistics</h1>
              <p className="text-sm text-zinc-500">Season 2025/26</p>
            </div>
          </div>

          <nav className="flex gap-8 text-lg">
            <a href="/team" className="hover:text-blue-400">Team</a>
            <a href="/stats" className="hover:text-blue-400">Statistics</a>
            <a href="/awards" className="hover:text-blue-400">Awards</a>
          </nav>
        </div>
      </header>

      <section className="pt-20 pb-16 text-center">
        <h2 className="text-6xl font-bold mb-4">Season 2025/26 Results</h2>
        <p className="text-xl text-zinc-400">Track your team performance</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-4xl font-semibold mb-10 flex items-center gap-3">
          <Trophy className="text-yellow-400" size={34} />
          Top 3 Players
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topPlayers.map((player) => (
            <Card key={player.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="relative h-72">
                <Image
                  src={player.photo}
                  alt={player.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/80 px-4 py-1 rounded-full font-bold">
                  #{player.number}
                </div>
              </div>

              <CardContent className="p-6">
                <h4 className="text-2xl font-bold mb-1">{player.name}</h4>
                {player.nickname && <p className="text-blue-400">«{player.nickname}»</p>}
                <p className="text-zinc-400 mb-6">{player.position}</p>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-400">{player.stats.goals}</div>
                    <div className="text-xs text-zinc-500">GOALS</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">{player.stats.assists}</div>
                    <div className="text-xs text-zinc-500">ASSISTS</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">{player.stats.points}</div>
                    <div className="text-xs text-zinc-500">POINTS</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}