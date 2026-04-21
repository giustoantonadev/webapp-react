export default function ReviewItem({ review }) {
    return (
        <li className="list-group-item">
            <strong>Utente:</strong> {review.author}
            <br />
            <strong>Voto:</strong> {review.rating} / 5
            <br />
            <strong>Commento:</strong> {review.content}
        </li>
    );
}