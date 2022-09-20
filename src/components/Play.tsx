import { useState } from "react";
import Character from "./Character";

interface IPickProps {
  handleQuit: () => void;
}

interface IChooseProps {
  handleQuit: () => void;
  setMyChoose: (choose: "rock" | "paper" | "scissors") => void;
}

interface IResultProps {
  myChoose: "rock" | "paper" | "scissors";
  handlePlayAgain: () => void;
}

const exitIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    />
  </svg>
);

const Choose = ({ handleQuit, setMyChoose }: IChooseProps) => {
  return (
    <div className="flex flex-col items-center gap-14">
      <div className="self-end flex items-center justify-end">
        <button
          className="bg-red hover:bg-hoverRed p-2 rounded-md text-gray-200 hover:text-white"
          onClick={handleQuit}
        >
          {exitIcon}
        </button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Character size="md" name={"rock"} handleChoose={setMyChoose} />
          <Character size="md" name={"paper"} handleChoose={setMyChoose} />
        </div>
        <div className="col-span-2 w-full flex items-center justify-center">
          <Character size="md" name={"scissors"} handleChoose={setMyChoose} />
        </div>
      </div>
    </div>
  );
};

const Result = ({ myChoose, handlePlayAgain }: IResultProps) => {
  return (
    <div className="flex items-center gap-12">
      <Character size="lg" name={myChoose} />
      <div className="flex flex-col items-center gap-4">
        <p className="text-[1.3rem] text-white uppercase font-black">You win</p>
        <button
          className={`w-[8rem] h-[3rem] rounded-md bg-white uppercase text-dark text-[0.8rem] font-black`}
          onClick={() => handlePlayAgain()}
        >
          Play again
        </button>
      </div>
      <Character size="lg" name={"paper"} />
    </div>
  );
};

const Play = ({ handleQuit }: IPickProps) => {
  const [myChoose, setMyChoose] = useState<
    "rock" | "paper" | "scissors" | null
  >(null);

  const handlePlayAgain = () => {
    setMyChoose(null);
  };

  return (
    <div className="flex flex-col items-center gap-14">
      {!myChoose ? (
        <Choose handleQuit={handleQuit} setMyChoose={setMyChoose} />
      ) : (
        <Result myChoose={myChoose} handlePlayAgain={handlePlayAgain} />
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="w-[6.5rem] md:w-[8rem] h-full bg-blue text-white rounded-md px-4 py-3 text-center">
          <p className="text-[0.8rem] font-bold">You</p>
          <p className="text-[1.2rem] font-black">14</p>
        </div>
        <div className="w-[6.5rem] md:w-[8rem] h-full bg-red text-white rounded-md px-4 py-3 text-center">
          <p className="text-[0.8rem] font-bold">Enemy</p>
          <p className="text-[1.2rem] font-black">10</p>
        </div>
      </div>

      {/* result */}
    </div>
  );
};

export default Play;
