import { ChatListItem } from "./ChatListItem";
export const Sidebar = ({ chats }) => {
  return (
    <div>
      {chats.map((chat, index) => (
        <ChatListItem chat={chat} key={`chatListItem-${index}`} />
      ))}
    </div>
  );
};
