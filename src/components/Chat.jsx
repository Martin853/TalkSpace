import React, { useEffect, useRef, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { MessageUI } from "./MessageUI";

export const Chat = () => {
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const queryMessages = query(messagesRef, orderBy("createdAt"));
    const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];

      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });

      setMessages(messages);
      scrollToBottom();
    });

    return () => unsubscribe();
  }, []);

  const handleSend = async () => {
    if (newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      profilePhoto: auth.currentUser.photoURL,
    });

    setNewMessage("");
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      const maxScrollTop = scrollHeight - clientHeight;
      chatContainerRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
  };

  return (
    <div className='w-full h-full flex flex-col bg-purple-50 overflow-y-auto'>
      <div
        ref={chatContainerRef}
        className='w-11/12 mx-auto my-2 h-full overflow-y-auto flex flex-col gap-4'
        style={{
          scrollBehavior: "smooth",
          transition: "scroll-margin 300ms",
          scrollMarginBottom: "20px",
        }}
      >
        {messages.map((message) => (
          <MessageUI
            key={message.id}
            text={message.text}
            user={message.user}
            image={message.profilePhoto}
          />
        ))}
      </div>
      <div className='w-full h-fit py-4 rounded-t-2xl bg-violet-500 mt-auto'>
        <div className='w-11/12 mx-auto flex gap-4'>
          <input
            className='w-full h-12 px-2 outline-none border-none rounded-xl font-syne text-lg'
            placeholder='Type a message'
            value={newMessage}
            onChange={(event) => {
              setNewMessage(event.target.value);
            }}
          />
          <button
            onClick={handleSend}
            className='w-fit bg-purple-200 px-2 rounded-xl font-syne text-base md:text-xl md:px-8'
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
