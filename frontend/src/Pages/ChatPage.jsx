import { useState } from "react";
import { Sidebar } from "../components/Chat/Sidebar";
import { chats, messagesByChat } from "./Data";
import { ChatWindow } from "../components/Chat/ChatWindow";
export const ChatPage = ({}) => {
  const [mobileView, setMobileView] = useState("list"); // "list" | "chat"
  const activeMessages = messagesByChat[1];
  const activeChat = chats[0];
  function onToggleTheme() {}

  function handleSend() {}
  function handleReact() {}

  return (
    <div className="h-screen bg-neutral-100 dark:bg-black flex">
      <div className="flex-1 m-0 sm:m-4 md:m-6 rounded-none sm:rounded-3xl overflow-hidden bg-white dark:bg-neutral-950 flex">
        <div className="flex-1 m-0 sm:m-4 md:m-6 rounded-none sm:rounded-3xl overflow-hidden shadow-none sm:shadow-xl sm:shadow-black/5 ring-0 sm:ring-1 sm:ring-neutral-200 dark:sm:ring-neutral-800 flex bg-white dark:bg-neutral-950">
          <Sidebar chats={chats} onToggleTheme={onToggleTheme} theme={"dark"} />
        </div>
        <div
          className={[
            "flex-1 min-w-0",
            mobileView === "chat" ? "flex" : "hidden md:flex",
          ].join(" ")}
        >
          <ChatWindow
            chat={activeChat}
            messages={activeMessages}
            onSend={handleSend}
            onReact={handleReact}
            onBack={() => setMobileView("list")}
            showBackButton={true}
          />
        </div>
      </div>
    </div>
  );
};
