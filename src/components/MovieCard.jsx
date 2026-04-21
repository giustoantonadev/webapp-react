import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
    return (
        <div className='card mb-3' style={{ width: "18rem" }}>

            {movie.poster && (
                <img
                    src={`http://localhost:3000${movie.poster}`}
                    alt={movie.title}
                    className="card-img-top"
                />
            )}

            <div className='card-body'>
                <h5 className='card-title'>{movie.title}</h5>
                <p className='card-text'>Anno: {movie.year}</p>

                <Link to={`/movies/${movie.id}`} className='btn btn-primary'>
                    Dettagli
                </Link>
            </div>
        </div>
    )
}