"use client";

import { mockPlayers } from "../../../src/data/players";
import { Player } from "../../../src/types";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default function PlayerPage({ params }: Props) {
  const player: Player | undefined = mockPlayers.find(p => p.id === params.id);

  if (!player) {
    notFound(); // Показывает 404, если игрок не найден
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Верхняя часть с фото и инфо */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-2/5">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-zinc-800">
              <Image 
                src={player.photo} 
                alt={player.name} 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          <div className="md:w-3/5">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl font-bold">#{player.number}</span>
              <div>
                <h1 className="text-5xl font-bold">{player.name}</h1>
                {player.nickname && (
                  <p className="text-2xl text-blue-400">«{player.nickname}»</p>
                )}
              </div>
            </div>

            <p className="text-2xl text-zinc-400 mb-8">{player.position}</p>

            <div className="grid grid-cols-2 gap-8 text-lg">
              <div>
                <p className="text-zinc-400">Возраст</p>
                <p className="text-3xl font-semibold">{player.age} лет</p>
              </div>
              <div>
                <p className="text-zinc-400">Национальность</p>
                <p className="text-3xl font-semibold">{player.nationality}</p>
              </div>
              <div>
                <p className="text-zinc-400">Рост</p>
                <p className="text-3xl font-semibold">{player.height} см</p>
              </div>
              <div>
                <p className="text-zinc-400">Команда</p>
                <p className="text-3xl font-semibold">
                  {player.teamId === "chonburi" ? "Чонбури" : "Гуанчжоу"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Биография */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Биография</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">{player.bio}</p>
        </div>

        {/* Статистика */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Статистика сезона</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-zinc-900 p-6 rounded-2xl">
              <p className="text-zinc-400">Игры</p>
              <p className="text-5xl font-bold mt-2">{player.stats.games}</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-2xl">
              <p className="text-zinc-400">Голы</p>
              <p className="text-5xl font-bold mt-2 text-blue-400">{player.stats.goals}</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-2xl">
              <p className="text-zinc-400">Ассисты</p>
              <p className="text-5xl font-bold mt-2">{player.stats.assists}</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-2xl">
              <p className="text-zinc-400">Очки</p>
              <p className="text-5xl font-bold mt-2 text-emerald-400">{player.stats.points}</p>
            </div>
          </div>
        </div>

        {/* Награды */}
        {player.awards.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6">Награды</h2>
            <div className="flex flex-wrap gap-4">
              {player.awards.map((award, index) => (
                <div key={index} className="bg-zinc-900 px-6 py-4 rounded-2xl flex items-center gap-3">
                  <span className="text-3xl">🏆</span>
                  <div>
                    <p className="font-semibold">{award.title}</p>
                    <p className="text-sm text-zinc-400">{award.season}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}