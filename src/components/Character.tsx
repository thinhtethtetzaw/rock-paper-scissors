import rock from "../assets/images/rock.png";
import paper from "../assets/images/paper.png";
import scissors from "../assets/images/scissors.png";

interface IRockProps {
  size: "sm" | "md" | "lg";
  name: "rock" | "paper" | "scissors";
  handleChoose?: (choose: "rock" | "paper" | "scissors") => void;
}

const Character = ({ size, name, handleChoose }: IRockProps) => {
  const chooseSrc = () => {
    switch (name) {
      case "rock":
        return rock;
      case "paper":
        return paper;
      case "scissors":
        return scissors;
    }
  };

  const chooseColor = () => {
    switch (name) {
      case "rock":
        return "border-red";
      case "paper":
        return "border-blue";
      case "scissors":
        return "border-yellow";
    }
  };

  const chooseSize = () => {
    switch (size) {
      case "sm":
        return "w-16 h-16";
      case "md":
        return "w-20 h-20";
      case "lg":
        return "w-24 h-24";
    }
  };

  return (
    <img
      className={`${chooseSize()} p-2 rounded-full bg-white border-4 ${chooseColor()} cursor-pointer`}
      src={chooseSrc()}
      alt={name}
      onClick={() => handleChoose && handleChoose(name)}
    />
  );
};

export default Character;
