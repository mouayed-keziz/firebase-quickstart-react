/*
  simple explanation of the code:
    app.js is the main file, it is the entry point of the application
    it has two text inputs , one for the data and one for the path
    it has also 3 buttons, one for set, one for get, one for delete
      the database is a tree of elements, each element is an object
    the value in this code stands for the object to store
    the path in this code stands for the path to store the object within the tree
    
    the set button sets the value at the path
    the get button gets the value at the path
    the delete button deletes the value at the path

    each of these buttons has an onClick event, which is triggered when the button is clicked
    the onClick event calls the firebaseSet, firebaseGet and firebaseDelete functions
    these functions are implemented in the firebase folder
*/

import { useState } from "react";
import { firebaseDelete, firebaseGet, firebaseSet } from "./firebase/database";

function App() {
  const [value, setValue] = useState("");
  const [path, setPath] = useState("");
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h1>Crud with firebase</h1>
      </div>
      <div className="d-flex justify-content-center">
        <input
          placeholder="data"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          placeholder="path"
          type="text"
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <div>
          <button style={{ width: "6rem" }} onClick={() => { firebaseSet(value, path); setValue("") }}>set</button>
          <button style={{ width: "6rem" }} onClick={() => { firebaseGet(path) }}>get</button>
          <button style={{ width: "6rem" }} onClick={() => { firebaseDelete(path) }}>delete</button>
          <button disabled style={{ width: "6rem" }} onClick={() => { }}>update</button>
        </div>
      </div>
      {/*say that update is overriding the data with set, in a nice way*/}
      <p className="d-flex justify-content-center">
        <small>
          <strong>
            to update, use set on the existing path
          </strong>
        </small>
      </p>
    </div>
  );
}

export default App;
