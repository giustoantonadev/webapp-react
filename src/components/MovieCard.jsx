import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
    return (
        <div
            className="card h-100 shadow-sm"
            style={{
                border: "none",
                borderRadius: "12px",
                backgroundColor: "#111",
                color: "white"
            }}
        >
            {movie.poster && (
                <div
                    style={{
                        width: "100%",
                        height: "350px",
                        backgroundColor: "#000",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px",
                        overflow: "hidden"
                    }}
                >
                    <img
                        src={`http://localhost:3000${movie.poster}`}
                        alt={movie.title}
                        style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "contain"
                        }}
                    />
                </div>
            )}

            <div className="card-body d-flex flex-column text-center">
                <h5 className="card-title mb-3">{movie.title}</h5>

                <a
                    href={`/movies/${movie.id}`}
                    className="btn btn-outline-light mt-auto"
                    style={{ borderRadius: "8px" }}
                >
                    Dettagli
                </a>
            </div>
        </div>
    );
}