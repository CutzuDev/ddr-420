"use client"
import { useState } from "react";
import axios from "axios";

export default function Chat() {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState<{ sender: string; content: string }[]>([]);

    const sendMessage = async () => {
        const response = await axios.post("/api/chat", { message, userId: 1 });
        setChat(response.data.messages);
        setMessage("");
    };

    return (
        <div>
            <div>
                {chat.map((msg, index) => (
                    <div key={index} className={msg.sender === "user" ? "user" : "bot"}>
                        {msg.content}
                    </div>
                ))}
            </div>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Scrieți simptomele..."
            />
            <button onClick={sendMessage}>Trimite</button>
        </div>
    );
}
