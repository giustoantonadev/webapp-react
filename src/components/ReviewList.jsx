import ReviewItem from "./ReviewItem";

export default function ReviewList({ reviews }) {
    return (
        <ul className="list-group">
            {reviews.map(review => (
                <ReviewItem key={review.id} review={review} />
            ))}
        </ul>
    )
}