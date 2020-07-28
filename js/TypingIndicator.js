import React, { useState } from "react";

export const TypingIndicator = ({ timeout = 5000 }) => {
  const [isTyping, setTyping] = useState(false);

  return (
    isTyping && (
      <div className="chat-message__typing">
        <img src="https://osxtips.net/wp-content/uploads/imessage-sending-animated-gif.gif" />
      </div>
    )
  );
};
