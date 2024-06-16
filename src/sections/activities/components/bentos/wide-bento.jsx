import { dummyTexts } from "../../data/dummies";
import { BentoContent } from "../bento-content";
import { DummyContent } from "../dummy-content";

export const WideBento = ({ activity, index }) => {
  const dummy = dummyTexts[index];

  return activity ? (
    <div
      className="relative text-neutral-950 rounded-xl h-[350px] flex col-span-2 bg-cover bg-center overflow-hidden w-full"
      style={{
        backgroundImage: `url(${
          `${process.env.REACT_APP_BASE_API}${activity?.imageUrl}` ||
          "https://picsum.photos/800/400?random=1"
        })`,
      }}
    >
      <BentoContent activity={activity} />
    </div>
  ) : (
    <div className="relative text-neutral-950 rounded-xl h-[350px] flex col-span-2 bg-cover bg-center overflow-hidden shadow-lg">
      <DummyContent dummy={dummy} />
    </div>
  );
};
