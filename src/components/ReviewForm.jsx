import { useState } from "react";
import api from '../api/api';

export default function ReviewForm({ movieId, onReviewAdded }) {
    const [author, setAuthor] = useState('');
    const [rating, setRating] = useState(5);
    const [content, setContent] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        api.post('/reviews', {
            movie_id: movieId,
            author,
            rating,
            content
        })
            .then(res => {
                onReviewAdded(res.data.review);
                setAuthor('');
                setRating(5);
                setContent('');
            })
            .catch(err => console.error('Errore invio recensione:', err))
    }
    return (
        <div
            className="card p-4 mt-4"
            style={{
                backgroundColor: "#1a1a1a",
                color: "white",
                border: "1px solid #333",
                borderRadius: "12px"
            }}
        >
            <h4 className="mb-3">Aggiungi una recensione</h4>

            <form onSubmit={handleSubmit}>

                {/* Autore */}
                <div className="mb-3">
                    <label className="form-label">Utente</label>
                    <input
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        className="form-control"
                        style={{
                            backgroundColor: "#111",
                            color: "white",
                            border: "1px solid #444"
                        }}
                    />
                </div>

                {/* Voto */}
                <div className="mb-3">
                    <label className="form-label">Voto (1-5)</label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={e => setRating(e.target.value)}
                        className="form-control"
                        style={{
                            backgroundColor: "#111",
                            color: "white",
                            border: "1px solid #444"
                        }}
                    />
                </div>

                {/* Commento */}
                <div className="mb-3">
                    <label className="form-label">Commento</label>
                    <textarea
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        className="form-control"
                        rows="4"
                        style={{
                            backgroundColor: "#111",
                            color: "white",
                            border: "1px solid #444"
                        }}
                    ></textarea>
                </div>

                {/* Bottone */}
                <button
                    className="btn btn-primary w-100"
                    style={{ borderRadius: "8px" }}
                >
                    Invia
                </button>

            </form>
        </div>
    );

}