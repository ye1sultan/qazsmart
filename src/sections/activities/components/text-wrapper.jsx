import clsx from "clsx";

export const TextWrapper = ({ text, className = "" }) => {
  return (
    <div
      className={clsx(
        "bg-neutral-50 p-2 text-sm md:text-base rounded-lg shadow flex flex-col justify-center items-start self-start",
        className
      )}
    >
      {text}
    </div>
  );
};
