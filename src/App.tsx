import { useState } from "react";
import Mode from "./components/Mode";
import Play from "./components/Play";

function App() {
  const [game, setGame] = useState<"pick" | "play">("pick");

  const handleMode = (mode: "create" | "join", code?: string) => {
    setGame("play");
    if (mode === "join") {
      // join game
    } else if (mode === "create") {
      // create game
    }
  };

  const handleQuit = () => {
    setGame("pick");
  };

  return (
    <div className="w-screen h-screen bg-dark flex items-center justify-center">
      {game === "pick" && <Mode handleMode={handleMode} />}
      {game === "play" && <Play handleQuit={handleQuit} />}
    </div>
  );
}

export default App;
