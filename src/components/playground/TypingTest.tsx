"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const SNIPPETS = [
  {
    language: "JavaScript",
    code: "const fetchData = async (id) => {\n  const res = await fetch(url + id);\n  const data = await res.json();\n  return data;\n};",
  },
  {
    language: "Python",
    code: "def fibonacci(n):\n    if n <= 1:\n        return n\n    a, b = 0, 1\n    for _ in range(2, n + 1):\n        a, b = b, a + b\n    return b",
  },
  {
    language: "TypeScript",
    code: "interface User {\n  id: string;\n  name: string;\n  email: string;\n  isActive: boolean;\n}\n\nfunction greet(user: User): string {\n  return \"Hello, \" + user.name;\n}",
  },
  {
    language: "Java",
    code: "public static int binarySearch(int[] arr, int target) {\n    int low = 0, high = arr.length - 1;\n    while (low <= high) {\n        int mid = (low + high) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) low = mid + 1;\n        else high = mid - 1;\n    }\n    return -1;\n}",
  },
  {
    language: "CSS",
    code: ".container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  border-radius: 8px;\n}",
  },
];

export default function TypingTest() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [status, setStatus] = useState<"idle" | "playing" | "finished">("idle");
  const [duration, setDuration] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  const inputRef = useRef<HTMLInputElement>(null);
  const currentSnippet = SNIPPETS[snippetIndex].code;

  const computeAndSetStats = useCallback((text: string, remainingTime: number) => {
    const totalChars = text.length;
    if (totalChars === 0) return;

    let correct = 0;
    for (let i = 0; i < totalChars; i++) {
      if (text[i] === currentSnippet[i]) correct++;
    }

    const elapsed = Math.max(duration - remainingTime, 1);
    const words = correct / 5;
    const minutes = elapsed / 60;

    setWpm(Math.round(words / minutes));
    setAccuracy(Math.round((correct / totalChars) * 100));
  }, [currentSnippet, duration]);

  const finishGame = useCallback((finalText?: string, timeRemaining?: number) => {
    const textToUse = finalText !== undefined ? finalText : typedText;
    const timeToUse = timeRemaining !== undefined ? timeRemaining : timeLeft;
    setStatus("finished");
    computeAndSetStats(textToUse, timeToUse);
  }, [typedText, timeLeft, computeAndSetStats]);

  useEffect(() => {
    if (status !== "playing") return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          finishGame(undefined, 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [status, finishGame]);

  const startGame = () => {
    setStatus("playing");
    setTypedText("");
    setTimeLeft(duration);
    setWpm(0);
    setAccuracy(100);
    inputRef.current?.focus();
  };

  const resetGame = () => {
    setStatus("idle");
    setTypedText("");
    setTimeLeft(duration);
    setSnippetIndex(Math.floor(Math.random() * SNIPPETS.length));
    setWpm(0);
    setAccuracy(100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (status === "idle") startGame();

    const value = e.target.value;
    if (value.length <= currentSnippet.length) {
      setTypedText(value);
    }

    if (value.length >= currentSnippet.length) {
      finishGame(value, timeLeft);
    }
  };

  const handleDurationChange = (newDuration: number) => {
    setDuration(newDuration);
    setTimeLeft(newDuration);
    setStatus("idle");
    setTypedText("");
    setWpm(0);
    setAccuracy(100);
  };

  const progress = ((duration - timeLeft) / duration) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 md:p-8 space-y-6">

        {/* Duration Selector & Stats */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2">
            {[15, 30, 60].map((d) => (
              <button
                key={d}
                onClick={() => handleDurationChange(d)}
                disabled={status === "playing"}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  duration === d
                    ? "bg-[#D4A843] text-black"
                    : "bg-[#2A2A2A] text-neutral-400 hover:text-white"
                }`}
              >
                {d}s
              </button>
            ))}
          </div>

          <div className="flex gap-6 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4A843]">{wpm}</div>
              <div className="text-neutral-500">WPM</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#F5F0E8]">{accuracy}%</div>
              <div className="text-neutral-500">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#F5F0E8]">{timeLeft}s</div>
              <div className="text-neutral-500">Time</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-[#2A2A2A] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#D4A843]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Language Badge */}
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-[#D4A843]/10 text-[#D4A843] text-xs font-semibold rounded-full uppercase tracking-wider">
            {SNIPPETS[snippetIndex].language}
          </span>
          {status === "idle" && (
            <span className="text-neutral-500 text-sm">Start typing to begin...</span>
          )}
        </div>

        {/* Code Display */}
        <div
          className="relative bg-[#0F0F0F] rounded-lg p-4 md:p-6 font-mono text-sm md:text-base leading-relaxed cursor-text overflow-x-auto"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="whitespace-pre-wrap break-all">
            {currentSnippet.split("").map((char, i) => {
              let color = "text-neutral-600";
              if (i < typedText.length) {
                color =
                  typedText[i] === char ? "text-green-400" : "text-red-400 bg-red-400/10";
              }
              const isCursor = i === typedText.length && status !== "finished";
              return (
                <span
                  key={i}
                  className={`${color} ${
                    isCursor
                      ? "border-l-2 border-[#D4A843] animate-pulse"
                      : ""
                  }`}
                >
                  {char === "\n" ? "↵\n" : char}
                </span>
              );
            })}
          </div>

          {/* Hidden Input */}
          <input
            ref={inputRef}
            type="text"
            value={typedText}
            onChange={handleInputChange}
            disabled={status === "finished"}
            className="absolute inset-0 w-full h-full opacity-0 cursor-text"
            autoFocus
            aria-label="Type the code snippet shown above"
          />
        </div>

        {/* Finished State */}
        {status === "finished" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#D4A843]/10 border border-[#D4A843]/30 rounded-lg p-6 text-center"
          >
            <h3 className="text-xl font-bold text-[#D4A843] mb-2">
              Test Complete!
            </h3>
            <div className="flex justify-center gap-8 text-sm">
              <div>
                <span className="text-3xl font-bold text-[#F5F0E8]">{wpm}</span>
                <div className="text-neutral-400">WPM</div>
              </div>
              <div>
                <span className="text-3xl font-bold text-[#F5F0E8]">{accuracy}%</span>
                <div className="text-neutral-400">Accuracy</div>
              </div>
              <div>
                <span className="text-3xl font-bold text-[#F5F0E8]">{typedText.length}</span>
                <div className="text-neutral-400">Characters</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Footer Actions */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setSnippetIndex((prev) => (prev + 1) % SNIPPETS.length)}
            className="text-sm text-neutral-400 hover:text-white transition-colors"
            disabled={status === "playing"}
          >
            Skip Snippet
          </button>

          <button
            onClick={resetGame}
            className="px-6 py-2 bg-[#D4A843] text-black font-medium rounded-md hover:bg-[#b58f39] transition-colors"
          >
            {status === "finished" ? "Play Again" : "Reset"}
          </button>
        </div>

      </div>
    </div>
  );
}
