import Review from "./components/review";

export const ReviewsPart = ({ reviews }) => {
  return (
    <div className="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
      <div className="flow-root">
        <div className="divide-y divide-neutral-200">
          {reviews.slice(-3).map((review) => (
            <Review
              key={review._id}
              name={review.name}
              date={review.date}
              stars={review.stars}
              comment={review.comment}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
