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
        <form onSubmit={handleSubmit} className="mb-4">
            <h4>Aggiungi una recensione</h4>
            <div>
                <label>Utente</label>
                <input value={author} onChange={e => setAuthor(e.target.value)} className="form-control" />
            </div>

            <div className="mb-2">
                <label>Voto (1-5)</label>
                <input
                    onChange={e => setRating(e.target.value)}
                    type="number"
                    className="form-control"
                    min='1'
                    max='5'
                    value={rating}
                />
            </div>

            <div>
                <label>Commento</label>
                <textarea onChange={e => setContent(e.target.value)} value={content} className="form-control" />
            </div>

            <button className="btn btn-success">Invia</button>
        </form>
    )
}