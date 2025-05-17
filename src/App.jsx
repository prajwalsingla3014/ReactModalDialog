import { useState } from "react";
import "./App.css";
import Dialog from "./components/Dialog";

function App() {
  const [showDialog, setShowDialog] = useState(false);

  function handleShowDialog() {
    setShowDialog(true);
  }

  function handleCloseDialog() {
    console.log("Call");
    setShowDialog(false);
  }

  console.log("show ", showDialog);

  return (
    <div className="app">
      <button onClick={handleShowDialog}>Show Dialog</button>
      {showDialog && (
        <Dialog onClose={handleCloseDialog}>
          <h1>Hello World</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            optio natus iste ipsum numquam ducimus vero praesentium, architecto
            dolor. Ea eum, voluptatum provident veniam tenetur in error porro
            nobis nihil.
          </span>
        </Dialog>
      )}
    </div>
  );
}

export default App;
