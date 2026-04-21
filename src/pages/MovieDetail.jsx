import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";
import ReviewList from '../components/ReviewList';

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        api.get(`/movies/${id}`)
            .then(res => {
                setMovie(res.data.movie);
                setReviews(res.data.reviews);
            })
            .catch(err => console.log('Errore caricamento film:', err))
    }, [id]);

    if (!movie) return <p>Caricamento...</p>

    return (
        <>
            <h2>{movie.title}</h2>
            <p><strong>Anno:</strong>{movie.year}</p>
            <p><strong>Regista:</strong>{movie.director}</p>

            {movie.poster && (
                <img
                    src={`http://localhost:3000${movie.poster}`}
                    alt={movie.title}
                    className="img-fluid mb-3"
                    style={{ maxWidth: '300px' }}
                />

            )}

            <h3>Recensioni</h3>
            {reviews.length > 0 ? (
                <ReviewList reviews={reviews} />
            ) : (
                <p>Nessuna recensione disponibile</p>
            )}
        </>
    )
}