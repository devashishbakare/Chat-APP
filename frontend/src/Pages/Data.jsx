// Placeholder data for the chat UI

export const currentUser = {
  id: "me",
  name: "You",
  avatar:
    "https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=b6e3f4",
};

export const chats = [
  {
    id: "1",
    name: "Mara Lindgren",
    handle: "@mara",
    avatar:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Mara&backgroundColor=ffd5dc",
    online: true,
    typing: true,
    unread: 2,
    lastSeen: "active now",
    preview: "Pushed the new build, want me to share the link?",
    timestamp: "2:14 PM",
  },
  {
    id: "2",
    name: "Daichi Okafor",
    handle: "@daichi",
    avatar:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Daichi&backgroundColor=c0aede",
    online: true,
    typing: false,
    unread: 0,
    lastSeen: "active now",
    preview: "Pictures from the trip — they came out great 🌿",
    timestamp: "1:48 PM",
  },
  {
    id: "3",
    name: "Priya Raghavan",
    handle: "@priya",
    avatar:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Priya&backgroundColor=d1f7c4",
    online: false,
    typing: false,
    unread: 0,
    lastSeen: "last seen 11:02 AM",
    preview: "Sounds good. Let's finalize Tuesday.",
    timestamp: "11:02 AM",
  },
  {
    id: "4",
    name: "Studio Channel",
    handle: "#studio",
    avatar:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Studio&backgroundColor=ffe7b3",
    online: false,
    typing: false,
    unread: 5,
    lastSeen: "12 members",
    preview: "Noor: pinned the design references ↗",
    timestamp: "Yesterday",
  },
  {
    id: "5",
    name: "Atlas Nakamura",
    handle: "@atlas",
    avatar:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Atlas&backgroundColor=cde7ff",
    online: true,
    typing: false,
    unread: 0,
    lastSeen: "active now",
    preview: "Sending the invoice now.",
    timestamp: "Yesterday",
  },
  {
    id: "6",
    name: "Selma Berisha",
    handle: "@selma",
    avatar:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Selma&backgroundColor=f6c6ff",
    online: false,
    typing: false,
    unread: 0,
    lastSeen: "last seen yesterday",
    preview: "Haha that was wild 😄",
    timestamp: "Mon",
  },
  {
    id: "7",
    name: "Idris Olawale",
    handle: "@idris",
    avatar:
      "https://api.dicebear.com/7.x/notionists/svg?seed=Idris&backgroundColor=bdf4d4",
    online: false,
    typing: false,
    unread: 0,
    lastSeen: "last seen Sun",
    preview: "I'll review the doc this evening.",
    timestamp: "Sun",
  },
];

// Map of chatId -> array of messages
export const messagesByChat = {
  1: [
    {
      id: "m1",
      chatId: "1",
      fromMe: false,
      text: "Hey! Got a sec?",
      time: "1:58 PM",
      reactions: [],
    },
    {
      id: "m2",
      chatId: "1",
      fromMe: true,
      text: "Always — what's up?",
      time: "1:59 PM",
      reactions: [],
    },
    {
      id: "m3",
      chatId: "1",
      fromMe: false,
      text: "Finally finished the migration. CI is green across the board.",
      time: "2:01 PM",
      reactions: [{ emoji: "🎉", count: 2 }],
    },
    {
      id: "m4",
      chatId: "1",
      fromMe: true,
      text: "That's huge. Took longer than expected, didn't it?",
      time: "2:03 PM",
      reactions: [],
    },
    {
      id: "m5",
      chatId: "1",
      fromMe: false,
      text: "Two weekends. But the rollback path is solid now.",
      time: "2:04 PM",
      reactions: [{ emoji: "👏", count: 1 }],
    },
    {
      id: "m6",
      chatId: "1",
      fromMe: true,
      text: "Worth it. Ship it when you're ready.",
      time: "2:10 PM",
      reactions: [],
    },
    {
      id: "m7",
      chatId: "1",
      fromMe: false,
      text: "Pushed the new build, want me to share the link?",
      time: "2:14 PM",
      reactions: [],
    },
  ],
  2: [
    {
      id: "m1",
      chatId: "2",
      fromMe: false,
      text: "Back from Lisbon 🇵🇹",
      time: "1:30 PM",
      reactions: [],
    },
    {
      id: "m2",
      chatId: "2",
      fromMe: true,
      text: "How was it??",
      time: "1:32 PM",
      reactions: [],
    },
    {
      id: "m3",
      chatId: "2",
      fromMe: false,
      text: "Pictures from the trip — they came out great 🌿",
      time: "1:48 PM",
      reactions: [{ emoji: "❤️", count: 1 }],
    },
  ],
  3: [
    {
      id: "m1",
      chatId: "3",
      fromMe: true,
      text: "Can we sync about Q2 planning?",
      time: "10:45 AM",
      reactions: [],
    },
    {
      id: "m2",
      chatId: "3",
      fromMe: false,
      text: "Sounds good. Let's finalize Tuesday.",
      time: "11:02 AM",
      reactions: [],
    },
  ],
  4: [
    {
      id: "m1",
      chatId: "4",
      fromMe: false,
      text: "Noor: pinned the design references ↗",
      time: "Yesterday",
      reactions: [],
    },
  ],
  5: [
    {
      id: "m1",
      chatId: "5",
      fromMe: false,
      text: "Sending the invoice now.",
      time: "Yesterday",
      reactions: [],
    },
  ],
  6: [
    {
      id: "m1",
      chatId: "6",
      fromMe: false,
      text: "Haha that was wild 😄",
      time: "Mon",
      reactions: [],
    },
  ],
  7: [
    {
      id: "m1",
      chatId: "7",
      fromMe: false,
      text: "I'll review the doc this evening.",
      time: "Sun",
      reactions: [],
    },
  ],
};

export const reactionPalette = ["👍", "❤️", "😂", "🎉", "😮", "🔥"];
