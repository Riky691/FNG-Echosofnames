import React, { useState } from "react";
import "./App.css";

const names = [
  "Xar'Jin (Xaros)",
  "Kurash (Arana)",
  "Zer'Zijr (Piloras)",
  "Nakayato (Komo Koro)",
  "Warkan (Narbaak)"
  // Du kannst später noch alle 500 Namen hier einfügen!
];

function App() {
  const [name, setName] = useState("");

  const generateName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    setName(names[randomIndex]);
  };

  return (
    <div className="App">
      <h1>FNG – Echos of Names</h1>
      <p>Drück den Button und entdecke deinen Fantasy-Namen:</p>
      <button onClick={generateName}>Name generieren</button>
      {name && <h2>{name}</h2>}
    </div>
  );
}

export default App;
