"use client";

import { Card, CardContent } from "../../components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { teams } from "../../src/data/teams";           // ← правильный импорт команд
import { mockPlayers } from "../../src/data/players";   // ← правильный импорт игроков
import { Player } from "../../src/types";

export default function ChonburiPage() {
  const team = teams.find((t) => t.id === "chonburi");
  const players: Player[] = mockPlayers.filter((p) => p.teamId === "chonburi");

  if (!team) return <div>Команда не найдена</div>;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Шапка команды */}
      <div className="h-80 relative" style={{ backgroundColor: team.mainColor }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-8 left-8 flex items-center gap-6">
          <Image 
            src={team.logo} 
            alt={team.name} 
            width={120} 
            height={120} 
            className="rounded-2xl" 
          />
          <div>
            <h1 className="text-6xl font-bold text-white">{team.shortName}</h1>
            <p className="text-2xl text-white/80">{team.name}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Информация о команде */}
          <div>
            <h2 className="text-3xl font-bold mb-6">О команде</h2>
            <div className="space-y-6 text-lg">
              <div>
                <p className="text-zinc-400">Стадион</p>
                <p>{team.stadium}</p>
              </div>
              <div>
                <p className="text-zinc-400">Город</p>
                <p>{team.city}</p>
              </div>
              <div>
                <p className="text-zinc-400">Главный тренер</p>
                <p>{team.coach.name}</p>
              </div>
            </div>
          </div>

          {/* Состав команды */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Состав команды</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {players.map((player) => (
                <Link key={player.id} href={`/player/${player.id}`}>
                  <Card className="bg-zinc-900 border-zinc-800 hover:border-blue-500 transition-all cursor-pointer">
                    <div className="relative h-56">
                      <Image 
                        src={player.photo} 
                        alt={player.name} 
                        fill 
                        className="object-cover" 
                      />
                      <div className="absolute top-3 right-3 bg-black/80 px-3 py-1 rounded-full text-sm font-bold">
                        #{player.number}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-bold text-lg">{player.name}</h3>
                      <p className="text-zinc-400 text-sm">{player.position}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}