export default function ReviewItem({ review }) {
    return (
        <li className="list-group-item">
            <strong>Voto:</strong> {review.rating} / 5
            <br />
            {review.text}
        </li>
    )
}