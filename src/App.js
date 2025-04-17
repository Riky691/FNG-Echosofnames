import React, { useState } from 'react';
import { nameData } from './names'; // Hier importierst du alle Namen
import './App.css';

function App() {
  const [selectedRasse, setSelectedRasse] = useState('');
  const [selectedGeschlecht, setSelectedGeschlecht] = useState('');
  const [name, setName] = useState('');

  const generateName = () => {
    const eintrag = nameData.find(
      (e) => e.rasse === selectedRasse && e.geschlecht === selectedGeschlecht
    );
    if (eintrag) {
      const index = Math.floor(Math.random() * eintrag.namen.length);
      setName(eintrag.namen[index]);
    } else {
      setName("Keine Namen gefunden.");
    }
  };

  return (
    <div className="App">
      <h1>FNG – Echos of Names</h1>

      <select onChange={(e) => setSelectedRasse(e.target.value)} defaultValue="">
        <option value="" disabled>Wähle eine Rasse</option>
        <option value="Ascandi">Ascandi</option>
        <option value="Voruk">Voruk</option>
        <option value="Heiler">Heiler</option>
        <option value="Asvar">Asvar</option>
        <option value="Shin-Zun">Shin-Zun</option>
        <option value="Argarath">Argarath</option>
        <option value="Waragh">Waragh</option>
        <option value="Kol'Morath">Kol'Morath</option>
        <option value="Komo Koro">Komo Koro</option>
        <option value="Korvaku">Korvaku</option>
        <option value="Aruhka">Aruhka</option>
        <option value="Dunkelemenschen">Dunkelemenschen</option>
        <option value="Menschen">Menschen</option>
      </select>

      <select onChange={(e) => setSelectedGeschlecht(e.target.value)} defaultValue="">
        <option value="" disabled>Wähle ein Geschlecht</option>
        <option value="männlich">Männlich</option>
        <option value="weiblich">Weiblich</option>
      </select>

      <button onClick={generateName}>Name generieren</button>

      {name && <h2>{name}</h2>}
    </div>
  );
}

export default App;
