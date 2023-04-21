import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/toys`)
    .then(resp => resp.json())
    .then(toys => setToys(toys))
  }, [])

  function handleNewToy (newToy) {
    setToys([...toys, newToy])
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleUpdateToyLikes (updatedLikes) {
    const updatedLikesCount = toys.map((toy) => toy.id === updatedLikes.id ? updatedLikes : toy);
    setToys(updatedLikesCount)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onSetToys={setToys} onUpdateToyLikes={handleUpdateToyLikes}/>
    </>
  );
}

export default App;
