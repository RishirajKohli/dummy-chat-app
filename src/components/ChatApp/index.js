import React, { memo, useCallback, useState } from "react";
import InputPanel from "../InputPanel";
import MessagePanel from "../MessagePanel";
import "./chatApp.css";
export function ChatApp() {
  const [messages, setMessages] = useState([]);

  const updateMessages = useCallback(
    (message) => {
      setMessages([...messages, message]);
    },
    [messages]
  );
  const removeMessage = useCallback(
    (index) => {
      let temp = [...messages];
      temp.splice(index, 1);
      setMessages([...temp]);
    },
    [messages]
  );

  return (
    <div className="wrapper">
      <h1>Let's Chat </h1>
      <MessagePanel
        messages={messages}
        removeMessage={removeMessage}
      ></MessagePanel>
      <hr></hr>
      <InputPanel updateMessages={updateMessages}></InputPanel>
    </div>
  );
}
export default memo(ChatApp);
