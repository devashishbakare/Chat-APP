import { useRef, useState } from "react";
import { Paperclip, Smile, Send, Mic } from "lucide-react";
export const MessageInput = () => {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value);
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = Math.min(el.scrollHeight, 160) + "px";
    }
  };

  const submit = () => {};

  const handleKeyDown = () => {};

  return (
    <div
      data-testid="message-input-container"
      className="px-3 sm:px-5 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md"
    >
      <div className="flex items-end gap-2">
        <button
          type="button"
          data-testid="attach-btn"
          aria-label="Attach"
          className="h-10 w-10 grid place-items-center rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 transition-colors shrink-0"
        >
          <Paperclip className="h-[18px] w-[18px]" />
        </button>

        <div className="flex-1 flex items-end gap-1 rounded-2xl bg-neutral-100 dark:bg-neutral-900 px-3 py-2 ring-1 ring-transparent focus-within:ring-emerald-500/40 transition-all">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Write a message…"
            data-testid="message-input"
            className="flex-1 resize-none bg-transparent outline-none text-[14.5px] leading-snug text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 max-h-40 py-1.5"
          />
          <button
            type="button"
            data-testid="emoji-btn"
            aria-label="Emoji"
            className="h-8 w-8 grid place-items-center rounded-lg text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
          >
            <Smile className="h-[18px] w-[18px]" />
          </button>
        </div>

        {value.trim() ? (
          <button
            type="button"
            onClick={submit}
            data-testid="send-btn"
            aria-label="Send message"
            className="h-10 w-10 grid place-items-center rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <Send className="h-[18px] w-[18px]" />
          </button>
        ) : (
          <button
            type="button"
            data-testid="mic-btn"
            aria-label="Record voice"
            className="h-10 w-10 grid place-items-center rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 transition-colors shrink-0"
          >
            <Mic className="h-[18px] w-[18px]" />
          </button>
        )}
      </div>
    </div>
  );
};
