import { EmptyIcon } from "../assets/icons/icons";
import Empty from "../components/empty";

export const EmptyActivities = () => {
  return (
    <div className="mb-20">
      <Empty
        text={"No tours"}
        subText={"New tours will be added soon"}
        svg={<EmptyIcon />}
      />
    </div>
  );
};
