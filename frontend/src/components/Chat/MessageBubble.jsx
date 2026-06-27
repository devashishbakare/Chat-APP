import { useState } from "react";
import { reactionPalette } from "../../Pages/Data";
import { Smile, CheckCheck } from "lucide-react";
export const MessageBubble = ({
  message,
  onReact,
  showAvatar,
  avatar,
  name,
}) => {
  const [open, setOpen] = useState(false);
  const fromMe = message.fromMe;

  return (
    <div
      data-testid={`message-${message.id}`}
      className={[
        "group flex items-end gap-2",
        fromMe ? "justify-end" : "justify-start",
      ].join(" ")}
    >
      {/* Avatar for incoming messages */}
      {!fromMe && (
        <div className="w-7 shrink-0">
          {showAvatar ? (
            <img
              src={avatar}
              alt={name}
              className="h-7 w-7 rounded-full bg-neutral-200 dark:bg-neutral-800"
            />
          ) : null}
        </div>
      )}

      <div
        className={[
          "relative max-w-[78%] sm:max-w-[68%]",
          fromMe ? "items-end" : "items-start",
        ].join(" ")}
      >
        {/* Reaction picker */}
        <div
          className={[
            "absolute -top-9 z-10 transition-all duration-150",
            fromMe ? "right-0" : "left-0",
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto",
          ].join(" ")}
        >
          <div className="flex items-center gap-0.5 rounded-full bg-white dark:bg-neutral-800 shadow-md shadow-black/5 ring-1 ring-neutral-200 dark:ring-neutral-700 px-1.5 py-1">
            {reactionPalette.map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => {
                  onReact(message.id, emoji);
                  setOpen(false);
                }}
                data-testid={`react-${message.id}-${emoji}`}
                className="h-7 w-7 grid place-items-center rounded-full text-base hover:bg-neutral-100 dark:hover:bg-neutral-700 hover:scale-110 transition-all"
                aria-label={`React with ${emoji}`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Bubble */}
        <div
          className={[
            "flex items-end gap-1",
            fromMe ? "flex-row-reverse" : "flex-row",
          ].join(" ")}
        >
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Add reaction"
            data-testid={`reaction-trigger-${message.id}`}
            className="opacity-0 group-hover:opacity-100 transition-opacity h-7 w-7 grid place-items-center rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <Smile className="h-4 w-4" />
          </button>

          <div
            className={[
              "px-3.5 py-2 text-[14.5px] leading-snug shadow-sm break-words",
              fromMe
                ? "bg-emerald-500 text-white rounded-2xl rounded-br-md"
                : "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100 rounded-2xl rounded-bl-md",
            ].join(" ")}
          >
            {!fromMe && showAvatar && name && (
              <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mb-0.5">
                {name}
              </p>
            )}
            <p className="whitespace-pre-wrap">{message.text}</p>
            <div
              className={[
                "mt-1 flex items-center gap-1 text-[10.5px] tabular-nums",
                fromMe
                  ? "justify-end text-emerald-50/80"
                  : "text-neutral-400 dark:text-neutral-500",
              ].join(" ")}
            >
              <span data-testid={`message-time-${message.id}`}>
                {message.time}
              </span>
              {fromMe && <CheckCheck className="h-3 w-3" />}
            </div>
          </div>
        </div>

        {/* Reactions row */}
        {message.reactions && message.reactions.length > 0 && (
          <div
            className={[
              "mt-1 flex flex-wrap gap-1",
              fromMe ? "justify-end" : "justify-start ml-1",
            ].join(" ")}
          >
            {message.reactions.map((r) => (
              <span
                key={r.emoji}
                data-testid={`reaction-${message.id}-${r.emoji}`}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white dark:bg-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-700 text-[12px] text-neutral-700 dark:text-neutral-200 shadow-sm"
              >
                <span>{r.emoji}</span>
                <span className="tabular-nums text-[11px] text-neutral-500 dark:text-neutral-400">
                  {r.count}
                </span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
