import React, { useState } from "react";
import emoji from "./watercolor.png";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "👻": "Ghost",
  "🎁": "Gift",
  "😲": "Disbelief",
  "🌹": "Rose",
  "😔": "Sad",
  "🤢": "Nauseated Face",
  "🤞": "Hope",
  "💖": "Love",
  "😑": "Annoyance"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning , setMeaning] = useState("");
  function emojiInputHandler(event){
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if(meaning === undefined){
      meaning ="we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji){
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App" style={{ 
      backgroundImage: `url(${emoji})` 
    }}>
      <h1>Emoticons</h1>
      <input onChange={emojiInputHandler} />

      <div className="emojiDesciption"><h2>{meaning}</h2></div>
      <div className="emojiWeHave"><h3>emoji's we know</h3></div>
      {
        emojisWeKnow.map(function(emoji){
          return (<span 
            onClick={()=> emojiClickHandler(emoji)}
          style={{fontSize: "2rem", padding: "0.5rem", cursor: "pointer"}} key={emoji}>
          {emoji}{" "}
          </span>
          );
        })}
      
    </div>
  );
}
