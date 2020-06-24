import React, { memo, useCallback, useState } from "react";
import { messagePanel } from "../MessagePanel";
import "./inputPanel.css";

function InputPanel({ updateMessages }) {
  const [message, setMessage] = useState("");

  const handleSend = useCallback(
    (evt) => {
      evt.preventDefault();
      updateMessages(message);
      setMessage("");
    },
    [message]
  );

  const handleMessageChange = useCallback(
    (evt) => {
      setMessage(evt.target.value);
    },
    [message]
  );

  return (
    <div>
      <form onSubmit={handleSend}>
        <textarea
          className="input"
          type="text"
          onChange={handleMessageChange}
          value={message}
        ></textarea>
        <button
          className="send_button"
          disabled={message ? false : true}
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
export default memo(InputPanel);
