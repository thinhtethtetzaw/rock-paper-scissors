import { useEffect, useState } from "react";
import Character from "./Character";

interface IModeProps {
  handleMode: (mode: "create" | "join", code?: string) => void;
}

const Mode = ({ handleMode }: IModeProps) => {
  const [error, setError] = useState<string | null>(null);
  const [code, setCode] = useState<string | null>(null);

  useEffect(() => {
    code && setError(null);
  }, [code]);

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div className="flex items-center gap-4">
        <Character size="sm" name={"rock"} />
        <Character size="sm" name={"paper"} />
        <Character size="sm" name={"scissors"} />
      </div>
      <div className="w-full flex flex-col gap-8">
        <button
          className={`w-full h-[3rem] rounded-md bg-yellow uppercase text-dark text-[0.8rem] font-black`}
          onClick={() => handleMode("create")}
        >
          Create Game
        </button>
        <div className="flex flex-col gap-2">
          <div className="w-full">
            <label htmlFor="code"></label>
            <input
              name="code"
              className="w-full h-[3rem] px-3 rounded-md outline-none text-[0.9rem] placeholder:text-[0.9rem]"
              type="text"
              placeholder="Enter code"
              onChange={(e) => setCode(e.target.value)}
            />
            {error && <p className="mt-1 text-red text-[0.8rem]">{error}</p>}
          </div>
          <button
            className={`w-full h-[3rem] rounded-md bg-blue uppercase text-white text-[0.8rem] font-black`}
            onClick={() => {
              if (!code) {
                setError("Please enter code");
              } else {
                handleMode("join", code);
              }
            }}
          >
            Join Party
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mode;
