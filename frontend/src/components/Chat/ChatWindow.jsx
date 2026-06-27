import { useRef } from "react";
import { MessageBubble } from "./MessageBubble";
import { MessageInput } from "./MessageInput";
import {
  ArrowLeft,
  Phone,
  Video,
  MoreVertical,
  MessageSquare,
} from "lucide-react";
export const ChatWindow = ({
  chat,
  messages,
  onSend,
  onReact,
  onBack,
  showBackButton,
}) => {
  const scrollerRef = useRef(null);

  if (!chat) {
    return (
      <section
        data-testid="chat-empty-state"
        className="flex-1 hidden md:grid place-items-center bg-neutral-50 dark:bg-neutral-900/50"
      >
        <div className="text-center px-6">
          <div className="mx-auto h-14 w-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 grid place-items-center mb-4">
            <MessageSquare className="h-6 w-6" />
          </div>
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Pick up where you left off
          </h2>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 max-w-sm">
            Select a conversation from the left to start chatting. Messages are
            end-to-end placeholder — no real data here.
          </p>
        </div>
      </section>
    );
  }

  const statusLine = chat.typing
    ? "typing…"
    : chat.online
      ? "active now"
      : chat.lastSeen || "offline";

  return (
    <section
      data-testid="chat-window"
      className="flex-1 flex flex-col h-full bg-neutral-50 dark:bg-neutral-900/40 min-w-0"
    >
      {/* Sticky header */}
      <header
        data-testid="chat-header"
        className="sticky top-0 z-10 flex items-center gap-3 px-4 sm:px-5 py-3 bg-white/85 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800"
      >
        {showBackButton && (
          <button
            type="button"
            onClick={onBack}
            data-testid="chat-back-btn"
            aria-label="Back to chats"
            className="h-9 w-9 grid place-items-center rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <ArrowLeft className="h-[18px] w-[18px]" />
          </button>
        )}

        <div className="relative shrink-0">
          <img
            src={chat.avatar}
            alt={chat.name}
            className="h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-800"
          />
          <span
            aria-hidden
            className={[
              "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-white dark:ring-neutral-950",
              chat.online
                ? "bg-emerald-500"
                : "bg-neutral-300 dark:bg-neutral-600",
            ].join(" ")}
          />
        </div>

        <div className="min-w-0 flex-1">
          <p
            data-testid="chat-header-name"
            className="truncate text-[15px] font-semibold text-neutral-900 dark:text-neutral-50"
          >
            {chat.name}
          </p>
          <p
            data-testid="chat-header-status"
            className={[
              "text-[12px] truncate",
              chat.typing
                ? "text-emerald-600 dark:text-emerald-400"
                : chat.online
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-neutral-500 dark:text-neutral-400",
            ].join(" ")}
          >
            {statusLine}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            data-testid="call-btn"
            aria-label="Call"
            className="h-9 w-9 grid place-items-center rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Phone className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            data-testid="video-btn"
            aria-label="Video call"
            className="h-9 w-9 grid place-items-center rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <Video className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            data-testid="more-btn"
            aria-label="More options"
            className="h-9 w-9 grid place-items-center rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <MoreVertical className="h-[18px] w-[18px]" />
          </button>
        </div>
      </header>

      {/* Messages */}
      <div
        ref={scrollerRef}
        data-testid="messages-scroll"
        className="flex-1 min-h-0 overflow-y-auto px-3 sm:px-6 py-5 space-y-2"
      >
        {messages.map((msg, idx) => {
          const prev = messages[idx - 1];
          const showAvatar =
            !msg.fromMe && (!prev || prev.fromMe !== msg.fromMe);
          return (
            <MessageBubble
              key={msg.id}
              message={msg}
              onReact={onReact}
              showAvatar={showAvatar}
              avatar={chat.avatar}
              name={chat.name}
            />
          );
        })}

        {/* Typing indicator at the end */}
        {chat.typing && (
          <div
            data-testid="typing-indicator"
            className="flex items-end gap-2 pt-1"
          >
            <img
              src={chat.avatar}
              alt=""
              className="h-7 w-7 rounded-full bg-neutral-200 dark:bg-neutral-800"
            />
            <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-neutral-100 dark:bg-neutral-800 shadow-sm">
              <span className="flex gap-1 text-emerald-500">
                <span className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:-0.3s]" />
                <span className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:-0.15s]" />
                <span className="h-2 w-2 rounded-full bg-current animate-bounce" />
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Composer */}
      <MessageInput onSend={onSend} />
    </section>
  );
};
