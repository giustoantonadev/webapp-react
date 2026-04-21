import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
    return (
        <div>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}