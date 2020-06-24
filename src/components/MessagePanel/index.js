import React, { memo, useState } from "react";
import "./messagePanel.css";
export function MessagePanel({ messages, removeMessage }) {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  function handleRemove(index) {
    return () => {
      removeMessage(index);
    };
  }
  function placeRemoveButton() {
    setIsButtonVisible(true);
  }
  return (
    <section className="messagesPanel">
      {messages.map((message, index) => {
        return (
          <div
            key={index}
            className="message-block"
            onMouseEnter={placeRemoveButton}
            onMouseLeave={() => {
              setIsButtonVisible(false);
            }}
          >
            <h3 className="message">{message}</h3>
            {isButtonVisible ? (
              <button onClick={handleRemove(index)} className="button">
                Remove
              </button>
            ) : null}
          </div>
        );
      })}
    </section>
  );
}

export default memo(MessagePanel);
