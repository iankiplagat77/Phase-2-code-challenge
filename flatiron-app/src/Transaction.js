import React from "react";

function Transaction({id, date, description, category, amount}) {
  function handleDelete(event){
    fetch('https://my-json-server.typicode.com/iankiplagat77/code-challenge-2/transactions', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(result => result.json())
    .then(alert("Item deleted!"))
    

  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>{<button onClick={handleDelete}>Delete</button>}</td>
    </tr>
  );
}

export default Transaction;