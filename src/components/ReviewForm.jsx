import { useState } from "react";
import api from "../api/api";

export default function ReviewForm({ movieId, onReviewAdded }) {
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState("");
    const [content, setContent] = useState("");

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!author.trim()) {
            newErrors.author = "Il nome è obbligatorio";
        }

        if (!rating || rating < 1 || rating > 5) {
            newErrors.rating = "Il voto deve essere tra 1 e 5";
        }

        if (!content.trim()) {
            newErrors.content = "La recensione non può essere vuota";
        } else if (content.length < 10) {
            newErrors.content = "La recensione deve contenere almeno 10 caratteri";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        api.post("/reviews", {
            movie_id: movieId,
            author,
            rating,
            content
        })
        .then(res => {
            onReviewAdded(res.data.review);

            // Mostra messaggio di successo
            setSuccess(true);
            setTimeout(() => setSuccess(false), 2000);

            // Reset campi
            setAuthor("");
            setRating("");
            setContent("");
            setErrors({});
        })
        .catch(err => console.error("Errore invio recensione:", err));
    };

    return (
        <form onSubmit={handleSubmit} className="card p-4 bg-dark text-light mt-4">

            <h4 className="mb-3">Lascia una recensione</h4>

            {success && (
                <div className="alert alert-success fade show" role="alert">
                    Recensione inviata con successo!
                </div>
            )}

            {/* AUTORE */}
            <div className="mb-3">
                <label className="form-label">Nome</label>
                <input
                    type="text"
                    className={`form-control ${errors.author ? "is-invalid" : ""}`}
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {errors.author && (
                    <div className="invalid-feedback">{errors.author}</div>
                )}
            </div>

            {/* RATING */}
            <div className="mb-3">
                <label className="form-label">Voto (1-5)</label>
                <input
                    type="number"
                    className={`form-control ${errors.rating ? "is-invalid" : ""}`}
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    min="1"
                    max="5"
                />
                {errors.rating && (
                    <div className="invalid-feedback">{errors.rating}</div>
                )}
            </div>

            {/* CONTENUTO */}
            <div className="mb-3">
                <label className="form-label">Recensione</label>
                <textarea
                    className={`form-control ${errors.content ? "is-invalid" : ""}`}
                    rows="4"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                {errors.content && (
                    <div className="invalid-feedback">{errors.content}</div>
                )}
            </div>

            <button className="btn btn-primary w-100 mt-3">
                Invia Recensione
            </button>
        </form>
    );
}