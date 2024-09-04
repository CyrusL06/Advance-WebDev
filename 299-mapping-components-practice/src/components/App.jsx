//1. Extract the repeated parts of the App into a Entry component.
//2. Use props to make the Entry component render different data.
//3a. Import the emojipedia constant.
//3b. Map through the emojipedia array and render Entry components.

//Emojipedia has 3 entries, so createEntry gets called 3 times.
//Each time, it passes 1 item from the emojipedia array as a var called emojiTerm.

//var emojiTerm = {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// }



import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";


// This inserts the data in the Array as object
function createEmojiTerm(emojipedia) {
  return(
  <Entry
  // Key is needed
  // data.{name}
  // Data is transfered into the Entry Template
    key=      {emojipedia.id}
    emoji=    {emojipedia.emoji}
    name=     {emojipedia.name}
    meaning=  {emojipedia.meaning}

   />
  );
}



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {/* Allows the loop to happen */}
      <dl className="dictionary">
      {/* Maps the data in the jsx and creates template within Entry */}
      {emojipedia.map(createEmojiTerm)}
      </dl>
    </div>
  );
}

export default App;
