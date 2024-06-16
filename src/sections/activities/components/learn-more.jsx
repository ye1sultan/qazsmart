import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { ArrowUp } from "src/sections/assets/icons/icons";

export const LearnMore = ({ id, className = "" }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/activity/${id}`);
  };

  return (
    <button
      onClick={() => handleClick(id)}
      className={clsx(
        "underline underline-offset-4 decoration-neutral-50 flex justify-center items-center gap flex-shrink-0 self-end",
        className
      )}
    >
      Learn More <ArrowUp className="rotate-45 stroke-2" />
    </button>
  );
};
