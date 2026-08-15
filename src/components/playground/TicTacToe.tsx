"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Player = "X" | "O" | null;
type Mode = "PvP" | "PvC";

const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner(squares: Player[]) {
  for (let i = 0; i < WIN_LINES.length; i++) {
    const [a, b, c] = WIN_LINES[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: WIN_LINES[i] };
    }
  }
  return null;
}

function isBoardFull(squares: Player[]) {
  return squares.every((square) => square !== null);
}

function minimax(squares: Player[], depth: number, isMaximizing: boolean): number {
  const result = checkWinner(squares);
  if (result) {
    return result.winner === "O" ? 10 - depth : depth - 10;
  }
  if (isBoardFull(squares)) {
    return 0;
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (!squares[i]) {
        squares[i] = "O";
        const score = minimax(squares, depth + 1, false);
        squares[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (!squares[i]) {
        squares[i] = "X";
        const score = minimax(squares, depth + 1, true);
        squares[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

function getBestMove(squares: Player[]): number {
  let bestScore = -Infinity;
  let move = -1;
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      squares[i] = "O";
      const score = minimax(squares, 0, false);
      squares[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
}

export default function TicTacToe() {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [mode, setMode] = useState<Mode>("PvP");
  const [scores, setScores] = useState({ X: 0, O: 0, Draws: 0 });
  const [winningLine, setWinningLine] = useState<number[] | null>(null);

  const applyMove = useCallback((newBoard: Player[], nextPlayer: "X" | "O") => {
    setBoard(newBoard);
    const win = checkWinner(newBoard);
    if (win) {
      setWinningLine(win.line);
      setScores((prev) => ({
        ...prev,
        [win.winner as "X" | "O"]: prev[win.winner as "X" | "O"] + 1,
      }));
    } else if (isBoardFull(newBoard)) {
      setScores((prev) => ({ ...prev, Draws: prev.Draws + 1 }));
    } else {
      setIsXNext(nextPlayer === "X");
    }
  }, []);

  const handleClick = (i: number) => {
    if (board[i] || winningLine) return;
    if (mode === "PvC" && !isXNext) return;

    const newBoard = [...board];
    newBoard[i] = isXNext ? "X" : "O";
    applyMove(newBoard, isXNext ? "O" : "X");
  };

  // AI turn trigger
  useEffect(() => {
    if (mode === "PvC" && !isXNext && !winningLine && !isBoardFull(board)) {
      const timer = setTimeout(() => {
        const move = getBestMove([...board]);
        if (move !== -1) {
          const newBoard = [...board];
          newBoard[move] = "O";
          applyMove(newBoard, "X");
        }
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [mode, isXNext, winningLine, board, applyMove]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinningLine(null);
  };

  const resetScores = () => {
    setScores({ X: 0, O: 0, Draws: 0 });
    resetGame();
  };

  const winnerInfo = checkWinner(board);
  const isDraw = !winnerInfo && isBoardFull(board);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
      <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-6 w-full shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => {
                setMode("PvP");
                resetGame();
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                mode === "PvP"
                  ? "bg-[#D4A843] text-black"
                  : "bg-[#0F0F0F] text-[#F5F0E8] hover:bg-[#333333]"
              }`}
            >
              PvP
            </button>
            <button
              onClick={() => {
                setMode("PvC");
                resetGame();
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                mode === "PvC"
                  ? "bg-[#D4A843] text-black"
                  : "bg-[#0F0F0F] text-[#F5F0E8] hover:bg-[#333333]"
              }`}
            >
              PvC
            </button>
          </div>
          <button
            onClick={resetScores}
            className="text-xs text-neutral-400 hover:text-white underline underline-offset-4"
          >
            Reset Scores
          </button>
        </div>

        <div className="flex justify-between mb-8 text-sm font-medium text-[#F5F0E8]">
          <div className="flex flex-col items-center">
            <span className="text-[#D4A843]">Player X</span>
            <span className="text-2xl">{scores.X}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-neutral-400">Draws</span>
            <span className="text-2xl">{scores.Draws}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className={mode === "PvC" ? "text-cyan-400" : "text-rose-400"}>
              {mode === "PvC" ? "Computer O" : "Player O"}
            </span>
            <span className="text-2xl">{scores.O}</span>
          </div>
        </div>

        <div className="text-center mb-6 h-6">
          <AnimatePresence mode="wait">
            {winnerInfo ? (
              <motion.div
                key="winner"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-lg font-bold text-[#D4A843]"
              >
                {winnerInfo.winner} Wins!
              </motion.div>
            ) : isDraw ? (
              <motion.div
                key="draw"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-lg font-bold text-neutral-400"
              >
                It&apos;s a Draw!
              </motion.div>
            ) : (
              <motion.div
                key="turn"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-lg text-[#F5F0E8]"
              >
                Turn: <span className={isXNext ? "text-[#D4A843]" : mode === "PvC" ? "text-cyan-400" : "text-rose-400"}>{isXNext ? "X" : "O"}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-6 w-fit mx-auto">
          {board.map((cell, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              disabled={!!cell || !!winningLine || (mode === "PvC" && !isXNext)}
              aria-label={`Cell ${i}`}
              className={`w-20 h-20 md:w-24 md:h-24 bg-[#0F0F0F] border border-[#333333] rounded-lg flex items-center justify-center text-4xl md:text-5xl font-bold transition-colors
                ${!cell && !winningLine && (mode === "PvP" || isXNext) ? "hover:bg-[#222222]" : ""}
                ${winningLine?.includes(i) ? "bg-[#D4A843]/20 border-[#D4A843]" : ""}
              `}
            >
              <AnimatePresence>
                {cell && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={cell === "X" ? "text-[#D4A843]" : mode === "PvC" ? "text-cyan-400" : "text-rose-400"}
                  >
                    {cell}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-[#333333] hover:bg-[#444444] text-[#F5F0E8] rounded-md font-medium transition-colors w-full"
          >
            {winnerInfo || isDraw ? "Play Again" : "Reset Board"}
          </button>
        </div>
      </div>
    </div>
  );
}
