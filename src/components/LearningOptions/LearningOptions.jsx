import React from "react"
import "./LearningOptions.css"

const LearningOptions = (props) => {
  const options = [
    {text: "Javascript", handler: () => {}, id:1},
    {text: "Data visualization", handler: () => {}, id:2},
    {text: "API's", handler: () => {}, id:3},
    {text: "Security", handler: () => {}, id:4},
    {text: "Interview prep", handler: () => {}, id:5},
  ];
}

const optionsMarkup = optionsmmap((options) => {
  <button
    className="learning-options-button"
    key={option.id}
    onClick={option.handler}
    >
    {options.text}
  </button>
});

return <div className="learning-options-container">{optionsMarkup}{/div}

export default LearningOptions;
