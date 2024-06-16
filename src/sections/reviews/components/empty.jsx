import { EmptyIcon } from "src/sections/assets/icons/icons";

export default function Empty({ text, subText }) {
  return (
    <div className="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7 w-full text-center h-full">
      <div className="flex justify-center items-center h-full">
        <div>
          <EmptyIcon />
          <h3 className="mt-2 font-medium text-neutral-900">{text}</h3>
          <p className="mt-1 text-sm text-neutral-500">{subText}</p>
        </div>
      </div>
    </div>
  );
}
