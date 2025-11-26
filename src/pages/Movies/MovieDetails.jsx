import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MovieDetails.css";

export default function MovieDetails() {
    const { state: movie } = useLocation();
    const navigate = useNavigate();
    const [showTrailer, setShowTrailer] = useState(false);

    if (!movie) {
        return <div style={{ padding: "2rem" }}>Movie not found.</div>;
    }
    
    return (
        <section
            className="movie-details"
            style={{ backgroundImage: `url(${movie.img})` }}
        >
            <div className="movie-details-overlay">
                <div className="details-poster">
                    <img src={movie.img} alt={movie.title} />
                </div>

                <div className="details-info">
                    <h1>
                        {movie.title} <span>({movie.year})</span>
                    </h1>
                    <p className="meta">
                        {movie.year} • {movie.genres.join(", ")} • {movie.duration}
                    </p>


                    <div className="button-group">
                        <button
                            className="watch-btn"
                            onClick={() => window.open(movie.youtube, "_blank")}
                        >
                            ▶ Watch Video
                        </button>
                        <button
                            className="trailer-btn"
                            onClick={() => setShowTrailer(true)}
                        >
                            ▶ Play Trailer
                        </button>
                    </div>

                    <h3>Overview</h3>
                    <p>{movie.description}</p>

                    <div className="crew">
                        <p>
                            <strong>{movie.director}</strong> — Director
                        </p>
                        <p>
                            <strong>{movie.writer}</strong> — Screenplay
                        </p>
                    </div>

                    <button className="back-btn" onClick={() => navigate(-1)}>
                        ← Back
                    </button>
                </div>
            </div>


             {/* Trailer Modal */}
            {showTrailer && (
                <div className="modal-overlay" onClick={() => setShowTrailer(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setShowTrailer(false)}>✖</button>
                        <iframe
                            width="100%"
                            height="500"
                            src={movie.trailer} // make sure you add trailer link in your movie object
                            title="YouTube Trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}

        </section>
    );
}
