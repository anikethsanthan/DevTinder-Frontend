import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const { tagetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const userId = useSelector((store) => store?.user?._id);

  const fetchChatMessages = async () => {
    const chat = await axios.get(BASE_URL + `/chat/${tagetUserId}`, {
      withCredentials: true,
    });
    console.log(chat.data?.chat?.messages);
    setMessages(chat.data?.chat?.messages);
  };
  useEffect(() => {
    fetchChatMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!userId) return;
    const socket = createSocketConnection();
    socket.emit("joinChat", {
      userId,
      tagetUserId,
    });

    socket.on("receiveMessage", ({ userId, message }) => {
      console.log("Received message:", message);
      setMessages((messages) => [...messages, { userId, message }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, tagetUserId]);

  const sendMessage = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", {
      userId,
      tagetUserId,
      message: newMessage,
    });
    setNewMessage("");
  };

  return (
    <div className=" flex justify-center mt-[30px]">
      <div className="card glass w-[60%] h-[80%]">
        {/* Heading */}
        <div className="card-body">
          <h2 className="card-title">Chat Box</h2>
          <div className="border-b-2"></div>
          {/* Chat Section */}

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat ${
                msg.senderId._id === userId ? "chat-end" : "chat-start"
              }`}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src={msg.senderId?.photoUrl}
                  />
                </div>
              </div>
              <div className="chat-header">
                {msg.senderId.firstName} {msg.senderId.lastName}
                <time className="text-xs opacity-50 ml-2">12:45</time>
              </div>
              <div className="chat-bubble">{msg.text}</div>
              {/* <div className="chat-footer opacity-50">Delivered</div> */}
            </div>
          ))}

          {/* Button Section */}
          <div className="card-actions justify-center border-t-2">
            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[80%] mt-4"
            />
            <button onClick={sendMessage} className="btn  mt-4  h-[10px]">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
