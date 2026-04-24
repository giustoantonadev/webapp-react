import { useState } from 'react';
import api from '../api/api';

export default function AddMovie() {
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [director, setDirector] = useState("");
    const [genre, setGenre] = useState("");
    const [poster, setPoster] = useState(null);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!title.trim()) newErrors.title = "Il titolo è obbligatorio";
        if (!year || year < 1900 || year > 2100) newErrors.year = "Anno non valido";
        if (!director.trim()) newErrors.director = "Il regista è obbligatorio";
        if (!description.trim()) newErrors.description = "La descrizione è obbligatoria";
        if (!poster) newErrors.poster = "Il poster è obbligatorio";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!validate()) return;

        const formData = new FormData();
        formData.append("title", title);
        formData.append("year", year);
        formData.append("director", director);
        formData.append("genre", genre);
        formData.append("description", description);
        formData.append("poster", poster);

        api.post("/movies", formData)
            .then(() => {
                setSuccess(true);

                setTimeout(() => {
                    window.location.href = "/admin";
                }, 1500);
            })
            .catch(err => console.error("Errore aggiunta film:", err));
    };

    return (
        <div className="container py-4">
            <h1 className="mb-4">Aggiungi Nuovo Film</h1>
            {success && <div className="alert alert-success">Film aggiunto con successo!</div>}

            <form onSubmit={handleSubmit} className="card p-4 bg-dark text-light">

                <div className="mb-3">
                    <label className="form-label">Titolo</label>
                    <input
                        type="text"
                        className={`form-control ${errors.title ? "is-invalid" : ""}`}
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Anno</label>
                    <input
                        type="number"
                        className={`form-control ${errors.year ? "is-invalid" : ""}`}
                        value={year}
                        onChange={e => setYear(e.target.value)}
                    />
                    {errors.year && <div className="invalid-feedback">{errors.year}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Regista</label>
                    <input
                        type="text"
                        className={`form-control ${errors.director ? "is-invalid" : ""}`}
                        value={director}
                        onChange={e => setDirector(e.target.value)}
                    />
                    {errors.director && <div className="invalid-feedback">{errors.director}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Genere</label>
                    <input
                        type="text"
                        className="form-control"
                        value={genre}
                        onChange={e => setGenre(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Descrizione</label>
                    <textarea
                        className={`form-control ${errors.description ? "is-invalid" : ""}`}
                        rows="4"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                    {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                </div>

                <div className="mb-3">
                    <label className="form-label">Poster (file locale)</label>
                    <input
                        type="file"
                        className={`form-control ${errors.poster ? "is-invalid" : ""}`}
                        onChange={e => setPoster(e.target.files[0])}
                    />
                    {errors.poster && <div className="invalid-feedback">{errors.poster}</div>}
                </div>

                <button type="submit" className="btn btn-primary">Aggiungi Film</button>
            </form>
        </div>
    );
}