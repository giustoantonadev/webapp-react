import { useEffect, useState } from "react";
import api from "../api/api";

export default function Admin() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        api.get("/movies")
            .then(res => setMovies(res.data))
            .catch(err => console.error("Errore caricamento film:", err));
    }, []);

    return (
        <div className="container py-4">
            <h1 className="mb-4">Admin – Elenco Film</h1>

            <div className="table-responsive">
                <table className="table table-dark table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Poster</th>
                            <th>Titolo</th>
                            <th>Anno</th>
                            <th>Regista</th>
                        </tr>
                    </thead>

                    <tbody>
                        {movies.map(movie => (
                            <tr key={movie.id}>
                                <td>{movie.id}</td>

                                <td>
                                    {movie.poster && (
                                        <img
                                            src={`http://localhost:3000${movie.poster}`}
                                            alt={movie.title}
                                            style={{ width: "60px", borderRadius: "6px" }}
                                        />
                                    )}
                                </td>

                                <td>{movie.title}</td>
                                <td>{movie.year}</td>
                                <td>{movie.director}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}