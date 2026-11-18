"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp, Sparkles, X } from "lucide-react";
import { montserrat } from "@/lib/fonts";

type Message = { sender: "user" | "bot"; text: string };

const suggestions = [
  "What is Saarthi?",
  "Can it help with diabetic feet?",
  "How does the insole work?",
  "When does it launch?",
];

/** Renders **bold** and [label](url) from the assistant's replies. */
function formatMessage(text: string) {
  const parts = text.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
    if (linkMatch) {
      return (
        <a
          key={index}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline decoration-[color-mix(in_oklab,var(--primary)_35%,transparent)] underline-offset-2 hover:decoration-primary"
        >
          {linkMatch[1]}
        </a>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function BotAvatar({ size = "h-8 w-8" }: { size?: string }) {
  return (
    <span
      className={`${size} grid shrink-0 place-items-center rounded-full bg-[var(--primary-soft)] text-primary ring-1 ring-[color-mix(in_oklab,var(--primary)_15%,transparent)]`}
      aria-hidden="true"
    >
      <Sparkles className="h-[45%] w-[45%]" />
    </span>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  // Hide the launcher over the homepage video hero (#top). Show it once the
  // bottom of the viewport has scrolled past the bottom of the hero.
  // The chatbot lives in the root layout and survives client-side navigation,
  // so the hero is looked up on every check and re-checked when the route changes.
  const pathname = usePathname();
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = document.getElementById("top");
      setPastHero(!hero || hero.getBoundingClientRect().bottom < window.innerHeight - 24);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    onScroll();
    // Re-check after the new page has rendered and scroll position is restored.
    const settle = setTimeout(onScroll, 250);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      clearTimeout(settle);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  // Close when the visitor clicks anywhere outside the chat. The conversation
  // and any reply still loading are kept, since this component stays mounted.
  useEffect(() => {
    if (!isOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (panelRef.current?.contains(target) || launcherRef.current?.contains(target)) return;
      setIsOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen]);

  // Keep the newest message in view.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus the input on open; close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => inputRef.current?.focus(), 150);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const sendMessage = useCallback(
    async (text?: string) => {
      const userMsg = (text ?? input).trim();
      if (!userMsg || isLoading) return;

      setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
      setInput("");
      setIsLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMsg }),
        });
        const data = await response.json();
        setMessages((prev) => [...prev, { sender: "bot", text: data.reply || data.error }]);
      } catch {
        setMessages((prev) => [...prev, { sender: "bot", text: "Error connecting to server." }]);
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading],
  );

  const launcherVisible = pastHero || isOpen;

  return (
    <div className={`${montserrat.className} lv-theme bg-transparent!`}>
      {/* ── Chat panel ── */}
      {isOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Saarthi Assistant"
          className="chat-pop fixed inset-0 z-[60] flex flex-col overflow-hidden bg-card sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[min(600px,calc(100svh-8rem))] sm:w-[380px] sm:rounded-3xl sm:border sm:border-border sm:shadow-[0_30px_70px_-25px_color-mix(in_oklab,var(--primary)_50%,transparent)]"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border px-5 py-4">
            <BotAvatar size="h-10 w-10" />
            <div className="min-w-0 flex-1">
              <p className="text-[15px] font-semibold text-primary">Saarthi Assistant</p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" aria-hidden="true" />
                AI · replies instantly
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="grid h-9 w-9 cursor-pointer place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto bg-[color-mix(in_oklab,var(--secondary)_45%,white)] px-4 py-5"
            aria-live="polite"
          >
            {messages.length === 0 ? (
              <div className="flex h-full flex-col">
                <div className="mt-6 flex flex-col items-center text-center">
                  <BotAvatar size="h-14 w-14" />
                  <p className="mt-4 text-lg font-semibold text-primary">Hi, I&apos;m Saarthi&apos;s assistant</p>
                  <p className="mt-1.5 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                    Ask me about our smart insoles, foot health, or getting early access.
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <p className="mb-2.5 px-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Try asking
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => sendMessage(s)}
                        className="cursor-pointer rounded-full border border-border bg-white px-3.5 py-2 text-left text-[13px] font-medium text-primary transition-colors hover:border-primary hover:bg-[var(--primary-soft)]"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <ul className="flex flex-col gap-3">
                {messages.map((msg, i) =>
                  msg.sender === "user" ? (
                    <li key={i} className="flex justify-end">
                      <span className="max-w-[85%] whitespace-pre-wrap break-words rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm leading-relaxed text-primary-foreground">
                        {msg.text}
                      </span>
                    </li>
                  ) : (
                    <li key={i} className="flex items-end gap-2">
                      <BotAvatar size="h-7 w-7" />
                      <span className="max-w-[85%] whitespace-pre-wrap break-words rounded-2xl rounded-bl-md border border-border bg-white px-4 py-2.5 text-sm leading-relaxed text-foreground">
                        {formatMessage(msg.text)}
                      </span>
                    </li>
                  ),
                )}
                {isLoading && (
                  <li className="flex items-end gap-2" aria-label="Assistant is typing">
                    <BotAvatar size="h-7 w-7" />
                    <span className="flex gap-1 rounded-2xl rounded-bl-md border border-border bg-white px-4 py-3.5">
                      <span className="chat-dot" />
                      <span className="chat-dot [animation-delay:150ms]" />
                      <span className="chat-dot [animation-delay:300ms]" />
                    </span>
                  </li>
                )}
              </ul>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
            className="border-t border-border bg-card p-3"
          >
            <div className="flex items-center gap-2 rounded-full border border-border bg-[color-mix(in_oklab,var(--secondary)_45%,white)] py-1.5 pl-4 pr-1.5 transition-colors focus-within:border-primary focus-within:bg-white">
              <label htmlFor="chat-input" className="sr-only">
                Message
              </label>
              <input
                id="chat-input"
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about Saarthi…"
                autoComplete="off"
                className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground/70"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="grid h-9 w-9 shrink-0 cursor-pointer place-items-center rounded-full bg-primary text-primary-foreground transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
              >
                <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
            <p className="mt-2 text-center text-[11px] text-muted-foreground/80">
              AI can make mistakes. Not a substitute for medical advice.
            </p>
          </form>
        </div>
      )}

      {/* ── Launcher ── */}
      <button
        ref={launcherRef}
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        tabIndex={launcherVisible ? undefined : -1}
        aria-hidden={!launcherVisible}
        className={`fixed bottom-6 right-6 z-[60] h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-[#0d3b2e] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-150 ease-out hover:scale-105 ${
          isOpen ? "hidden sm:flex" : "flex"
        } ${launcherVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
      >
        {isOpen ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
