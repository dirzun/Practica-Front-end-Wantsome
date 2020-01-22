import React from "react";
import "reset-css";
import "./index.scss";
import Box from "./components/box.js";
import fileData from "./postData.json";
import Header from "./components/Header";


const App = () => {
  return (
    <div className="App">
      <Header></Header>
      
      <section>
        <Box fileData={fileData} />
      </section>
      <footer></footer>
    </div>
  );
};
export default App;
