import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
    return (
        <>
            {movies.map(movie => (
                <div className="col" key={movie.id}>
                    <MovieCard movie={movie} />
                </div>
            ))}
        </>
    )
}