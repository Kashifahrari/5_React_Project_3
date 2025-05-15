import styled from "styled-components";
import StartGame from "./component/StartGame";
import { useState } from "react";
import GamePlay from "./component/GamePlay";

function App() {
  const [igs, setigs] = useState(false);

  const toggleGamePlay = () => {
    setigs((pre) => !pre);
  };

  return <>{igs ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>;
}

export default App;
