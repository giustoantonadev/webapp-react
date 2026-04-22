export default function MovieModal({ movie, onClose }) {
    return (
        <div className="modal-backdrop-custom" onClick={onClose}>
            <div className="modal-content-custom" onClick={e => e.stopPropagation()}>

                <img
                    src={`http://localhost:3000${movie.poster}`}
                    alt={movie.title}
                    className="img-fluid mb-3"
                    style={{ borderRadius: "8px" }}
                />

                <h2 className="mb-3">{movie.title}</h2>

                <p style={{ opacity: 0.8 }}>{movie.description}</p>

                <button
                    className="btn btn-outline-light w-100 mt-3"
                    onClick={() => window.location.href = `/movies/${movie.id}`}
                >
                    Vai alla pagina del film
                </button>
            </div>
        </div>
    );
}