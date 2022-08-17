# Getting Started with react and firebase, this is a quickstart template


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
    these functions are implemented in the firebase folder\

dont forget to put your firebase config in src/firebase/firebase.js

<br/><br/>

## `template is made by mouayed-keziz`