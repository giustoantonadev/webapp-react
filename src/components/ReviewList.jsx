import ReviewItem from "./ReviewItem";

export default function ReviewList({ reviews }) {
    return (
        <ul
            className="list-group mt-3"
            style={{
                backgroundColor: "transparent",
                border: "none",
                padding: 0
            }}
        >
            {reviews.map(review => (
                <ReviewItem key={review.id} review={review} />
            ))}
        </ul>
    );

}