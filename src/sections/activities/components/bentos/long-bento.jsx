import { dummyTexts } from "../../data/dummies";
import { BentoContent } from "../bento-content";
import { DummyContent } from "../dummy-content";

export const LongBento = ({ activity, index }) => {
  const dummy = dummyTexts[index];

  return activity ? (
    <div
      className="relative text-neutral-950 rounded-xl min-h-[716px] h-full flex row-span-2 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${
          `${process.env.REACT_APP_BASE_API}${activity?.imageUrl}` ||
          "https://picsum.photos/400/400?random=2"
        })`,
      }}
    >
      <BentoContent activity={activity} />
    </div>
  ) : (
    <div className="relative text-neutral-950 rounded-xl min-h-[716px] h-full flex row-span-2 bg-cover bg-center overflow-hidden shadow-lg">
      <DummyContent dummy={dummy} />
    </div>
  );
};
