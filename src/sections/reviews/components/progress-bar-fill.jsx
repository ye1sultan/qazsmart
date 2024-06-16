export const ProgressBarFill = ({count, reviews}) => {
  return (
    <div
      className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
      style={{
        width: `calc(${count.count} / ${reviews.length} * 100%)`,
      }}
    />
  );
};
