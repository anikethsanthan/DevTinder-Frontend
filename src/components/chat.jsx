const Chat = () => {
  return (
    <div className=" flex justify-center mt-[30px]">
      <div className="card glass w-[60%] h-[80%]">
        {/* Heading */}
        <div className="card-body">
          <h2 className="card-title">Chat Box</h2>
          <div className="border-b-2"></div>
          {/* Chat Section */}

          {/* Receivers Chat */}
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50 ml-2">12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>

          {/* Senders Chat */}
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50 ml-2">12:46</time>
            </div>
            <div className="chat-bubble">I hate you!</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>

          {/* Button Section */}
          <div className="card-actions justify-center border-t-2">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[80%] mt-4"
            />
            <button className="btn  mt-4  h-[10px]">
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
