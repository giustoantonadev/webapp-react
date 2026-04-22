export default function StarRating({ value }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span
                key={i}
                style={{
                    color: i <= value ? "#ffc107" : "#555",
                    fontSize: "1.4rem",
                    marginRight: "3px"
                }}
            >
                ★
            </span>
        );
    }

    return <div>{stars}</div>;
}
