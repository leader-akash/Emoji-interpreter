import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😘": "face blowing a kiss",
  "🍇": "grapes",
  "🐶": "dog",
  "😉": "winking face",
  "😋": "tasty",
  "😍": "heart-eyes",
  "🤩": "star-eyes",
  "🐱": "cat",
  "🍑": "peach",
  "🍒": "cherries",
  "🌹": "rose",
  "👨‍👩‍👧‍👧": "family",
  "🍌": "banana",
  "🥭": "mango",
  "🍎": "apple",
  "🍉": "watermelon",
  "🍺": "beer",
  "🌳": "tree"
};

var emojisWEKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    //processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this emoji as of now!";
    }
    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    //processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }

  return (
    <div className="App">
      <h1>Akash's emoji interpreter</h1>
      <input onChange={emojiInputHandler}></input>

      <h2> {meaning} </h2>
      {/* Actual output set by React using useState */}

      <h3> emojis we know :- </h3>

      {emojisWEKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
