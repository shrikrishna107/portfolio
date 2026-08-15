"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Choice = "rock" | "paper" | "scissors" | null;
type Result = "win" | "lose" | "draw" | null;

const CHOICES = [
  { id: "rock", emoji: "✊", name: "Rock" },
  { id: "paper", emoji: "✋", name: "Paper" },
  { id: "scissors", emoji: "✌️", name: "Scissors" },
] as const;

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState<Choice>(null);
  const [computerChoice, setComputerChoice] = useState<Choice>(null);
  const [result, setResult] = useState<Result>(null);
  const [isRevealing, setIsRevealing] = useState(false);

  const [scores, setScores] = useState({ player: 0, computer: 0, draws: 0 });
  const [round, setRound] = useState(1);
  const [streak, setStreak] = useState(0);

  const determineWinner = (player: Choice, computer: Choice): Result => {
    if (player === computer) return "draw";
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      return "win";
    }
    return "lose";
  };

  const playRound = (choice: Choice) => {
    if (isRevealing) return;

    setPlayerChoice(choice);
    setIsRevealing(true);
    setComputerChoice(null);
    setResult(null);

    // Simulate thinking delay
    setTimeout(() => {
      const randomChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)].id as Choice;
      setComputerChoice(randomChoice);

      const roundResult = determineWinner(choice, randomChoice);
      setResult(roundResult);

      setScores((prev) => ({
        ...prev,
        player: roundResult === "win" ? prev.player + 1 : prev.player,
        computer: roundResult === "lose" ? prev.computer + 1 : prev.computer,
        draws: roundResult === "draw" ? prev.draws + 1 : prev.draws,
      }));

      setStreak((prev) => (roundResult === "win" ? prev + 1 : roundResult === "lose" ? 0 : prev));
      setRound((prev) => prev + 1);
      
      setIsRevealing(false);
    }, 1000);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setScores({ player: 0, computer: 0, draws: 0 });
    setRound(1);
    setStreak(0);
    setIsRevealing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
      <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 w-full shadow-lg">
        
        {/* Header Stats */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-[#F5F0E8] text-sm">
            <span className="text-neutral-400">Round </span>
            <span className="font-bold text-lg">{round}</span>
          </div>
          <div className="text-[#F5F0E8] text-sm">
            <span className="text-neutral-400">Streak </span>
            <span className="font-bold text-lg text-[#D4A843]">{streak} 🔥</span>
          </div>
          <button
            onClick={resetGame}
            className="text-xs text-neutral-400 hover:text-white underline underline-offset-4"
          >
            Reset Game
          </button>
        </div>

        {/* Score Board */}
        <div className="flex justify-between mb-8 text-sm font-medium text-[#F5F0E8] bg-[#0F0F0F] rounded-lg p-4 border border-[#333333]">
          <div className="flex flex-col items-center">
            <span className="text-[#D4A843] mb-1">Player</span>
            <span className="text-2xl">{scores.player}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-neutral-400 mb-1">Draws</span>
            <span className="text-2xl">{scores.draws}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-rose-400 mb-1">Computer</span>
            <span className="text-2xl">{scores.computer}</span>
          </div>
        </div>

        {/* Battle Arena */}
        <div className="flex justify-between items-center mb-8 px-4 h-32 relative">
          {/* Player Side */}
          <div className="flex flex-col items-center w-1/3">
            <span className="text-xs text-neutral-400 mb-2">You</span>
            <div className="text-5xl md:text-6xl h-16 flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {playerChoice && (
                  <motion.div
                    key={playerChoice}
                    initial={{ scale: 0.5, opacity: 0, x: -20 }}
                    animate={{ scale: 1, opacity: 1, x: 0 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ type: "spring" }}
                  >
                    {CHOICES.find((c) => c.id === playerChoice)?.emoji}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* VS & Result */}
          <div className="flex flex-col items-center justify-center w-1/3 z-10">
            {isRevealing ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-8 h-8 border-2 border-[#D4A843] border-t-transparent rounded-full"
              />
            ) : result ? (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`text-xl md:text-2xl font-bold ${
                  result === "win"
                    ? "text-[#D4A843]"
                    : result === "lose"
                    ? "text-rose-400"
                    : "text-neutral-400"
                }`}
              >
                {result === "win" ? "You Win!" : result === "lose" ? "You Lose!" : "Draw!"}
              </motion.div>
            ) : (
              <span className="text-2xl font-bold text-[#333333]">VS</span>
            )}
          </div>

          {/* Computer Side */}
          <div className="flex flex-col items-center w-1/3">
            <span className="text-xs text-neutral-400 mb-2">Computer</span>
            <div className="text-5xl md:text-6xl h-16 flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {computerChoice && (
                  <motion.div
                    key={computerChoice}
                    initial={{ scale: 0.5, opacity: 0, x: 20 }}
                    animate={{ scale: 1, opacity: 1, x: 0 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                  >
                    {CHOICES.find((c) => c.id === computerChoice)?.emoji}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-3 gap-4">
          {CHOICES.map((choice) => (
            <button
              key={choice.id}
              onClick={() => playRound(choice.id)}
              disabled={isRevealing}
              className="flex flex-col items-center justify-center py-4 bg-[#0F0F0F] hover:bg-[#222222] border border-[#333333] hover:border-[#D4A843] rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <span className="text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform">
                {choice.emoji}
              </span>
              <span className="text-xs font-medium text-[#F5F0E8]">{choice.name}</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
