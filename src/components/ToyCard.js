import React from "react";

function ToyCard({toy, onDeleteToy, onUpdateToyLikes }) {

const { id, name, image, likes} = toy

function handleLikeClick () {
  const updatedLikes = {
    likes:toy.likes + 1,
  }
  fetch(`http://localhost:3001/toys/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type' :'application/json'
    },
    body: JSON.stringify(updatedLikes)
  })
  .then(resp => resp.json())
  .then(onUpdateToyLikes)
  }


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikeClick} value={likes} className="like-btn">Like {"<3"}</button>
      <button onClick={onDeleteToy} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
