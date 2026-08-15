"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Game Components
import TicTacToe from "@/components/playground/TicTacToe";
import MemoryGame from "@/components/playground/MemoryGame";
import RockPaperScissors from "@/components/playground/RockPaperScissors";
import TypingTest from "@/components/playground/TypingTest";

const GAMES = [
  {
    id: "tictactoe",
    name: "Tic Tac Toe",
    description: "The classic game with unbeatable Minimax AI. Can you outsmart it?",
    icon: "✖️",
    component: TicTacToe,
  },
  {
    id: "memory",
    name: "Memory Match",
    description: "Test your memory with tech stack icons. Track moves and time.",
    icon: "🧠",
    component: MemoryGame,
  },
  {
    id: "rps",
    name: "Rock Paper Scissors",
    description: "Quick reactions, high stakes. Build your win streak against the computer.",
    icon: "✌️",
    component: RockPaperScissors,
  },
  {
    id: "typing",
    name: "Code Typing Test",
    description: "How fast can you type real code snippets? Measure WPM and accuracy.",
    icon: "⌨️",
    component: TypingTest,
  },
];

export default function PlaygroundPage() {
  const [activeGameId, setActiveGameId] = useState<string | null>(null);

  const activeGame = GAMES.find((g) => g.id === activeGameId);

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-[#F5F0E8] font-[family-name:var(--font-body)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <Link 
            href="/home" 
            className="inline-flex items-center text-sm text-[#D4A843] hover:text-[#b58f39] transition-colors mb-8 group"
          >
            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] text-[#F5F0E8] mb-4">
            Playground
          </h1>
          <p className="text-neutral-400 max-w-2xl text-lg">
            Interactive experiments built with React, TypeScript, and a love for clean state management.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            
            {!activeGameId ? (
              /* Games Grid */
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {GAMES.map((game) => (
                  <div 
                    key={game.id}
                    className="bg-[#1A1A1A] border border-[#333333] hover:border-[#D4A843]/50 rounded-xl p-6 transition-all group flex flex-col h-full"
                  >
                    <div className="text-4xl mb-4 p-3 bg-[#0F0F0F] rounded-lg w-fit group-hover:scale-110 transition-transform">
                      {game.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-[#F5F0E8] mb-2 font-[family-name:var(--font-display)]">
                      {game.name}
                    </h2>
                    <p className="text-neutral-400 mb-6 flex-grow">
                      {game.description}
                    </p>
                    <button
                      onClick={() => setActiveGameId(game.id)}
                      className="w-full py-3 bg-[#333333] hover:bg-[#D4A843] hover:text-black text-[#F5F0E8] rounded-md font-medium transition-colors"
                    >
                      Play Now
                    </button>
                  </div>
                ))}
              </motion.div>
            ) : (
              /* Active Game View */
              <motion.div
                key="active-game"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{activeGame?.icon}</span>
                    <h2 className="text-2xl font-bold font-[family-name:var(--font-display)]">
                      {activeGame?.name}
                    </h2>
                  </div>
                  <button
                    onClick={() => setActiveGameId(null)}
                    className="px-4 py-2 border border-[#333333] hover:bg-[#333333] text-sm rounded-md transition-colors"
                  >
                    Back to Arcade
                  </button>
                </div>
                
                <div className="w-full">
                  {activeGame && <activeGame.component />}
                </div>
              </motion.div>
            )}
            
          </AnimatePresence>
        </div>

      </div>
    </main>
  );
}
