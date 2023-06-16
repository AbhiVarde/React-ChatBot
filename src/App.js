import React from "react";
import ChatBot from "react-simple-chatbot";

const steps = [
  {
    id: "0",
    message: "Hello there!👋",
    trigger: "1",
  },
  {
    id: "1",
    message: "I'm Tommy Bot,your smart assistant.",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Please provide your name!",
    trigger: "4",
  },
  {
    id: "4",
    user: true,
    trigger: "5",
  },
  {
    id: "5",
    message: "Hi {previousValue}, nice to meet you!",
    trigger: "6",
  },
  {
    id: "6",
    message: "Let's Guess! How old I am?",
    trigger: "7",
  },
  {
    id: "7",
    options: [
      { value: 1, label: "18", trigger: "8" },
      { value: 2, label: "22", trigger: "8" },
      { value: 3, label: "20", trigger: "9" },
    ],
  },
  {
    id: "8",
    message: "Wrong answer, try again.",
    trigger: "7",
  },
  {
    id: "9",
    message: "Awesome! You are a telepath!",
    trigger: "10",
  },
  {
    id: "10",
    message: "Please Rate! How you Enjoy!🤩",
    trigger: "11",
  },
  {
    id: "11",
    options: [
      { value: 1, label: "Poor", trigger: "12" },
      { value: 2, label: "Good", trigger: "12" },
      { value: 3, label: "Excellent", trigger: "12" },
    ],
  },
  {
    id: "12",
    message: "Thanks! Have a Great Day!😇",
    end: true,
  },
];

function App() {
  return (
    <div className="App">
      <center>
        <h1>Hey there! Welcome to ChatBot App.</h1>
        <p>I'm Abhi Varde.Here to Help😊!</p>
        <ChatBot headerTitle="Tommy Bot" steps={steps} />
      </center>
    </div>
  );
}

export default App;
