import { MessageBubble } from "./MessageBubble";
import { MessageInput } from "./MessageInput";
export const ChatWindow = ({ messages }) => {
  return (
    <div>
      {messages.map((msg, index) => (
        <MessageBubble message={msg} key={`messageBubble-${index}`} />
      ))}
      <MessageInput />
    </div>
  );
};
