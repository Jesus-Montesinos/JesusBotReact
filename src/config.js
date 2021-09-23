// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./components/LearningOptions/LearningOptions";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello Med-Vet Customer`,
    {
      widget: "learningOptions",
    }),
  ],
  ...,
  widgets: [
    {
      widgetName:
    }
  ]
  customStyles:{
    botMessageBox:{
      backgroundColor: "#ff0000",
    },
    chatButton:{
      backgroundColor: "#ff0000",
    },
  },
}

export default config
