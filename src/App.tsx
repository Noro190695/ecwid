import React from "react";
import { Gallery } from "./components/Galery";
import { Placeholder } from "./components/Placeholder";
import { Upload } from "./components/Upload";
import { useAppSelector } from "./hooks/reduxHook";
import "./styles/global.scss";
function App() {
  const {loading} = useAppSelector((state) => state.loading);

  return (
    <div className="App">
      <div className="container">
        <Upload />
        {loading ? <Placeholder /> : <Gallery />}
      </div>
    </div>
  );
}

export default App;
