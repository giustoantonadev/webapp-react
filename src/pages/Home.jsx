import { useEffect, useState } from "react";
import api from "../api/api";
import MovieList from '../components/MovieList'

export default function Home() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        api.get("/movies")
            .then(res => {
                console.log("FILM DAL BACKEND:", res.data);
                setMovies(res.data);
            })
            .catch(err => console.error("Errore caricamento film:", err));

    }, [])

    return (
        <div className="container py-4">
            <h2 className="mb-4">Lista Film</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                <MovieList movies={movies} />
            </div>
        </div>
    );

}