export function calculateAverageStars(reviews) {
    if (reviews.length === 0) {
        return 0;
    }

    const totalStars = reviews.reduce((sum, review) => {
        return sum + parseFloat(review.stars);
    }, 0);

    const averageStars = totalStars / reviews.length;

    return averageStars.toFixed(1);
};