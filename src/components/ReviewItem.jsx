export default function ReviewItem({ review }) {
    return (
        <li 
            className="list-group-item mb-3"
            style={{
                backgroundColor: "#1a1a1a",
                color: "white",
                border: "1px solid #333",
                borderRadius: "8px",
                padding: "15px"
            }}
        >
            <div className="d-flex justify-content-between align-items-center">
                <strong style={{ fontSize: "1.1rem" }}>
                    {review.author}
                </strong>

                <span 
                    className="badge"
                    style={{
                        backgroundColor: "#0d6efd",
                        fontSize: "0.9rem",
                        padding: "8px 12px",
                        borderRadius: "6px"
                    }}
                >
                    {review.rating} / 5
                </span>
            </div>

            <p className="mt-3 mb-0" style={{ lineHeight: "1.5" }}>
                {review.content}
            </p>
        </li>
    );
}