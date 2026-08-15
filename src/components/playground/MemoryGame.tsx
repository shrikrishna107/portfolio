"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const CARDS_DATA = [
  { id: 1, name: "React", icon: "⚛️" },
  { id: 2, name: "Next.js", icon: "▲" },
  { id: 3, name: "Python", icon: "🐍" },
  { id: 4, name: "Java", icon: "☕" },
  { id: 5, name: "TypeScript", icon: "📘" },
  { id: 6, name: "Node.js", icon: "🟩" },
  { id: 7, name: "Git", icon: "🌿" },
  { id: 8, name: "Tailwind", icon: "🌬️" },
];

type CardType = {
  id: number;
  name: string;
  icon: string;
  uuid: string;
  isFlipped: boolean;
  isMatched: boolean;
};

function createShuffledCards(): CardType[] {
  return [...CARDS_DATA, ...CARDS_DATA]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({
      ...card,
      uuid: Math.random().toString(36).substring(7),
      isFlipped: false,
      isMatched: false,
    }));
}

export default function MemoryGame() {
  const [cards, setCards] = useState<CardType[]>(createShuffledCards);
  const [flippedCards, setFlippedCards] = useState<CardType[]>([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWon, setIsWon] = useState(false);

  const initializeGame = useCallback(() => {
    setCards(createShuffledCards());
    setFlippedCards([]);
    setMoves(0);
    setTime(0);
    setIsPlaying(false);
    setIsWon(false);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !isWon) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isWon]);

  const handleCardClick = (card: CardType) => {
    if (
      !isPlaying &&
      moves === 0 &&
      flippedCards.length === 0 &&
      !isWon
    ) {
      setIsPlaying(true);
    }

    if (card.isFlipped || card.isMatched || flippedCards.length === 2) {
      return;
    }

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    const updatedCards = cards.map((c) =>
      c.uuid === card.uuid ? { ...c, isFlipped: true } : c
    );
    setCards(updatedCards);

    if (newFlippedCards.length === 2) {
      setMoves((m) => m + 1);
      const match = newFlippedCards[0].id === newFlippedCards[1].id;

      if (match) {
        setCards((prev) => {
          const nextCards = prev.map((c) =>
            c.id === card.id ? { ...c, isMatched: true } : c
          );
          const matchedCount = nextCards.filter((c) => c.isMatched).length;
          if (matchedCount === 16) {
            setIsWon(true);
            setIsPlaying(false);
          }
          return nextCards;
        });
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.uuid === newFlippedCards[0].uuid || c.uuid === newFlippedCards[1].uuid
                ? { ...c, isFlipped: false }
                : c
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const getStarRating = () => {
    if (moves <= 12) return "★★★";
    if (moves <= 18) return "★★☆";
    return "★☆☆";
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
      <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 w-full shadow-lg">
        {/* Header Stats */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-6 text-sm">
            <div>
              <span className="text-neutral-400">Moves: </span>
              <span className="font-bold text-[#D4A843]">{moves}</span>
            </div>
            <div>
              <span className="text-neutral-400">Time: </span>
              <span className="font-bold text-[#F5F0E8]">{formatTime(time)}</span>
            </div>
            <div>
              <span className="text-neutral-400">Rating: </span>
              <span className="font-bold text-[#D4A843]">{getStarRating()}</span>
            </div>
          </div>
          <button
            onClick={initializeGame}
            className="px-3 py-1.5 bg-[#0F0F0F] hover:bg-[#333333] border border-[#333333] rounded text-xs text-[#F5F0E8] transition-colors"
          >
            Restart
          </button>
        </div>

        {/* Win Notification */}
        {isWon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 bg-[#D4A843]/10 border border-[#D4A843] rounded-lg text-center"
          >
            <h3 className="text-xl font-bold text-[#D4A843] mb-1">
              🎉 Congratulations!
            </h3>
            <p className="text-sm text-neutral-300">
              Completed in {moves} moves and {formatTime(time)} ({getStarRating()})
            </p>
          </motion.div>
        )}

        {/* 4x4 Cards Grid */}
        <div className="grid grid-cols-4 gap-3 md:gap-4 aspect-square max-w-[400px] mx-auto">
          {cards.map((card) => {
            const isRevealed = card.isFlipped || card.isMatched;
            return (
              <div
                key={card.uuid}
                onClick={() => handleCardClick(card)}
                className="relative w-full h-full cursor-pointer perspective-1000"
              >
                <motion.div
                  className={`w-full h-full rounded-lg flex items-center justify-center text-3xl border transition-all duration-300 ${
                    card.isMatched
                      ? "bg-[#D4A843]/20 border-[#D4A843]"
                      : isRevealed
                      ? "bg-[#2A2A2A] border-neutral-500"
                      : "bg-[#0F0F0F] border-[#333333] hover:border-neutral-500"
                  }`}
                  animate={{
                    rotateY: isRevealed ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {isRevealed ? (
                    <div
                      className="flex flex-col items-center justify-center p-1"
                      style={{ transform: "rotateY(180deg)" }}
                    >
                      <span>{card.icon}</span>
                      <span className="text-[10px] text-neutral-400 mt-1 font-mono">
                        {card.name}
                      </span>
                    </div>
                  ) : (
                    <span className="text-neutral-600 text-xl font-mono">?</span>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
