import React, { memo, useState } from "react";
import "./messagePanel.css";
export function MessagePanel({ messages, removeMessage }) {
  const [isButtonVisible, setIsButtonVisible] = useState(-1);
  function handleRemove(index) {
    return () => {
      removeMessage(index);
    };
  }
  function placeRemoveButton(index) {
    return () => setIsButtonVisible(index);
  }
  function hideRemoveButton(index) {
    return () => {
      setIsButtonVisible(-1);
    };
  }
  return (
    <section className="messagesPanel">
      {messages.map((message, index) => {
        return (
          <div
            key={index}
            className="message-block"
            onMouseLeave={hideRemoveButton(index)}
          >
            <h3 className="message" onMouseEnter={placeRemoveButton(index)}>
              {message}
            </h3>
            {isButtonVisible == index ? (
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
