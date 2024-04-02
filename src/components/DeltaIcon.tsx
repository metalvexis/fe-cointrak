import type { Delta } from "../modules/types";

interface DeltaIconProps {
  delta: Delta;
}

const DeltaIcon: React.FC<DeltaIconProps> = (props) => {
  const symbol: Record<string, string> = {
    UP: "⬆",
    DOWN: "⬇",
    NOCHANGE: "➖",
  };

  return (
    <span className="font-bold text-lg text-green-500">
      {symbol[props.delta]}
    </span>
  );
};

export default DeltaIcon;
