import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onSetToys, onUpdateToyLikes}) {

  function handleDelete(toyId){
    fetch(`http://localhost:3001/toys/${toyId}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(() => {
      const remainingToys = toys.filter((toy) => toy.id !== toyId)
      onSetToys(remainingToys)
    })
  }


  const allToys = toys.map((toy) => {
    return <ToyCard key={toy.id} toy={toy} onDeleteToy={handleDelete} onUpdateToyLikes={onUpdateToyLikes}/>
  })
  return (
    <div id="toy-collection">{allToys}</div>
  );
}

export default ToyContainer;
