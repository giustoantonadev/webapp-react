import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";
import ReviewList from '../components/ReviewList';
import ReviewForm from "../components/ReviewForm";
import StarRating from "../components/StarRating";

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
        <div className="container py-4">

            <div
                className="card shadow-sm p-4"
                style={{
                    backgroundColor: "#111",
                    color: "white",
                    border: "none",
                    borderRadius: "12px"
                }}
            >
                <div className="row g-4">

                    {/* Poster */}
                    <div className="col-md-4 d-flex justify-content-center">
                        {movie.poster && (
                            <img
                                src={`http://localhost:3000${movie.poster}`}
                                alt={movie.title}
                                className="img-fluid rounded"
                                style={{
                                    maxHeight: "450px",
                                    objectFit: "contain",
                                    backgroundColor: "#000",
                                    padding: "10px",
                                    borderRadius: "12px"
                                }}
                            />
                        )}
                    </div>

                    {/* Info film */}
                    <div className="col-md-8">
                        <h2 className="mb-3">{movie.title}</h2>

                        <p><strong>Anno:</strong> {movie.year}</p>
                        <p><strong>Regista:</strong> {movie.director}</p>

                        {movie.avg_rating && (
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <StarRating value={Math.round(movie.avg_rating)} />
                                <span style={{ opacity: 0.7 }}>
                                    {movie.avg_rating.toFixed(1)} / 5
                                </span>
                            </div>
                        )}

                        <hr className="border-secondary" />

                        <ReviewForm
                            movieId={movie.id}
                            onReviewAdded={(newReview) => setReviews([...reviews, newReview])}
                        />
                        
                        <h3 className="mt-4">Recensioni</h3>
                        {reviews.length > 0 ? (
                            <ReviewList reviews={reviews} />
                        ) : (
                            <p className="text-light">Nessuna recensione disponibile</p>
                        )}


                    </div>

                </div>
            </div>

        </div>
    );

}