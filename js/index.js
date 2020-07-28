import "../sass/index.scss";

import React from "react";
import ReactDOM from "react-dom";
import { TypingIndicator } from "./TypingIndicator";
import { MessageComposer } from "./MessageComposer";
import { WebsocketService } from "./WebsocketService";
import { ChatLog } from "./ChatLog";
import { filter } from "polyrhythm";

// log all messages on the channel/event bus
filter(true, ({ type, payload }) => console.log(type, payload));

const root = document.querySelector(".chat-container");
const app = (
  <>
    <ChatLog />
    <TypingIndicator />
    <MessageComposer />
    <WebsocketService/>
  </>
);
ReactDOM.render(app, root);
