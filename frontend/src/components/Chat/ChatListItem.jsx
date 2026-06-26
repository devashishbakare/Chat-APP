export const ChatListItem = ({ chat, active, onClick }) => {
  //console.log(chat);
  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={`chat-list-item-${chat.id}`}
      className={[
        "group w-full text-left px-3 py-3 rounded-2xl flex items-start gap-3 transition-all duration-200",
        "hover:bg-neutral-100 dark:hover:bg-neutral-800/60",
        active
          ? "bg-neutral-100 dark:bg-neutral-800 ring-1 ring-emerald-500/40 dark:ring-emerald-400/30"
          : "bg-transparent",
      ].join(" ")}
    >
      {/* Avatar + presence dot */}
      <div className="relative shrink-0">
        <img
          src={chat.avatar}
          alt={chat.name}
          className="h-11 w-11 rounded-full object-cover bg-neutral-200 dark:bg-neutral-700"
        />
        <span
          aria-hidden
          className={[
            "absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full ring-2 ring-white dark:ring-neutral-950 transition-colors",
            chat.online
              ? "bg-emerald-500"
              : "bg-neutral-300 dark:bg-neutral-600",
          ].join(" ")}
        />
      </div>

      {/* Body */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p
            className={[
              "truncate text-[15px] leading-tight",
              active
                ? "font-semibold text-neutral-900 dark:text-neutral-50"
                : "font-medium text-neutral-900 dark:text-neutral-100",
            ].join(" ")}
          >
            {chat.name}
          </p>
          <span
            className={[
              "shrink-0 text-[11px] tabular-nums",
              chat.unread > 0
                ? "text-emerald-600 dark:text-emerald-400 font-medium"
                : "text-neutral-400 dark:text-neutral-500",
            ].join(" ")}
          >
            {chat.timestamp}
          </span>
        </div>

        <div className="mt-1 flex items-center justify-between gap-2">
          {chat.typing ? (
            <span
              data-testid={`chat-list-typing-${chat.id}`}
              className="flex items-center gap-1.5 text-[13px] text-emerald-600 dark:text-emerald-400"
            >
              <span className="flex gap-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.3s]" />
                <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.15s]" />
                <span className="h-1.5 w-1.5 rounded-full bg-current animate-bounce" />
              </span>
              typing
            </span>
          ) : (
            <p className="truncate text-[13px] text-neutral-500 dark:text-neutral-400">
              {chat.preview}
            </p>
          )}

          {chat.unread > 0 && (
            <span
              data-testid={`chat-unread-${chat.id}`}
              className="shrink-0 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-emerald-500 text-white text-[11px] font-semibold tabular-nums"
            >
              {chat.unread}
            </span>
          )}
        </div>
      </div>
    </button>
  );
};
