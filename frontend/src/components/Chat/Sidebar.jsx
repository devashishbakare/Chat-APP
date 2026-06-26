import { ChatListItem } from "./ChatListItem";
import React, { useMemo, useState } from "react";
import { Search, Pencil, Sun, Moon, X } from "lucide-react";
export const Sidebar = ({ chats, onToggleTheme, theme }) => {
  const [query, setQuery] = useState("");
  console.log("sideBar rendering");
  //console.log(chats);
  function onClick() {}
  function active() {}
  return (
    <>
      <aside
        data-testid="chat-sidebar"
        className={[
          "flex flex-col h-full bg-white dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800",
        ].join(" ")}
      >
        <div className="px-5 pt-5 pb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-emerald-500 text-white grid place-items-center font-bold text-sm shadow-sm shadow-emerald-500/30">
              m
            </div>
            <div className="leading-tight">
              <p className="text-[15px] font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                murmur
              </p>
              <p className="text-[11px] text-neutral-400 dark:text-neutral-500">
                {chats.filter((c) => c.online).length} online
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={onToggleTheme}
              data-testid="theme-toggle-btn"
              aria-label="Toggle theme"
              className="h-9 w-9 grid place-items-center rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="h-[18px] w-[18px]" />
              ) : (
                <Moon className="h-[18px] w-[18px]" />
              )}
            </button>
            <button
              type="button"
              data-testid="new-chat-btn"
              aria-label="New chat"
              className="h-9 w-9 grid place-items-center rounded-xl text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Pencil className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 dark:text-neutral-500 pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search conversations"
              data-testid="sidebar-search-input"
              className="w-full h-10 pl-9 pr-9 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-[14px] text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                data-testid="sidebar-search-clear"
                aria-label="Clear search"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 grid place-items-center rounded-md text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
        <div
          data-testid="chat-list"
          className="flex-1 min-h-0 overflow-y-auto px-2 pb-3 space-y-0.5"
        >
          {chats.map((chat, index) => (
            <ChatListItem
              chat={chat}
              active={active}
              onClick={onClick}
              key={`chatListItem-${index}`}
            />
          ))}
        </div>
        <div className="px-4 py-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-3">
          <img
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=b6e3f4"
            alt="You"
            className="h-9 w-9 rounded-full bg-neutral-200 dark:bg-neutral-800"
          />
          <div className="leading-tight min-w-0">
            <p className="text-[14px] font-medium text-neutral-900 dark:text-neutral-100 truncate">
              You
            </p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400">
              ● active
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
