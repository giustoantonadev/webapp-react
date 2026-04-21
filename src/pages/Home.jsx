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
        <>
            <h2>Lista Film</h2>
            <MovieList movies={movies} />
        </>
    )
}