import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Movies.css";



export default function Movies() {
    const navigate = useNavigate();

    const [hoveredBg, setHoveredBg] = useState(null);


    const [showTrailer, setShowTrailer] = useState(false);
    const [currentTrailer, setCurrentTrailer] = useState("");


    const handlePlayTrailer = (trailerUrl) => {
        setCurrentTrailer(trailerUrl);
        setShowTrailer(true);
    };
    
    const trailers = [
        {
            id: 1,
            title: "TRON: Ares",
            subtitle: "In Theaters this Friday",
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159346/latest-trailer-1_iqyo97.webp",
            trailer: "https://www.youtube.com/embed/IAdJYzgSPiI"
        },
        {
            id: 2,
            title: "HIM",
            subtitle: "Watch At Home Now",
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159346/latest-trailer-2_ciru6u.webp",
            trailer: "https://www.youtube.com/embed/MC1Mwj5K3Lk"
        },
        {
            id: 3,
            title: "Gachiakuta",
            subtitle: "Official Cour 2 Trailer [Subtitled]",
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159347/latest-trailer-3_ftl4ev.webp",
            trailer: "https://www.youtube.com/embed/l9T5D-kjK6U"
        },
        {
            id: 4,
            title: "Predator: Badlands",
            subtitle: "Final Trailer",
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159347/latest-trailer-4_qyzemz.webp",
            trailer: "https://www.youtube.com/embed/6WkPwk0PHzY"
        },
        {
            id: 5,
            title: "Bugonia",
            subtitle: "Official Trailer",
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159347/latest-trailer-5_przu4k.webp",
            trailer: "https://www.youtube.com/embed/6WkPwk0PHzY",
        },
        {
            id: 6,
            title: "The Smashing Machine",
            subtitle: "The Smashing Machine - Official Trailer",
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159353/latest-trailer-6_uiwaf1.webp",
            trailer: "https://www.youtube.com/embed/6WkPwk0PHzY"
        },
        {
            id: 7,
            title: "Roofman",
            subtitle: "Final Trailer",
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159354/latest-trailer-7_bmxu5e.webp",
            trailer: "https://www.youtube.com/embed/6WkPwk0PHzY"
        },
        {
            id: 8,
            title: "A Big Bold Beautiful Journey",
            subtitle: "In Cinemas Now",
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159354/latest-trailer-8_bky17q.webp",
            trailer: "https://www.youtube.com/embed/6WkPwk0PHzY"
        },
        {
            id: 9,
            title: "One Battle After Another",
            subtitle: "An action comedy on an epic scale",
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159354/latest-trailer-9_lcawjw.webp",
            trailer: "https://www.youtube.com/embed/6WkPwk0PHzY"
        },
        {
            id: 10,
            title: "One Battle After Another",
            subtitle: "An action comedy on an epic scale",
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159354/latest-trailer-9_lcawjw.webp",
            trailer: "https://www.youtube.com/embed/6WkPwk0PHzY"
        },
    ];
    


    const movies = [
        { 
            id: 1, 
            title: "The 4 Rascals",
            releaseDate: "11 Oct 2025", 
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764158684/trending-1_grbbbs.jpg",
            year: 2025,
            genres: ["Thriller", "Drama", "History", "Mystery"],
            duration: "2h 10m",
            score: 82,
            description:
                "A determined father risks everything to rescue a dedicated teacher and her students from a raging wildfire.",
            director: "Paul Greengrass",
            writer: "Brad Ingelsby",
            youtube: "https://www.youtube.com/watch?v=abcd123", // replace with real link
            trailer: ""
        },
        { 
            id: 2, 
            title: "365 Days",
            releaseDate: "11 Oct 2025",
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159359/trending-2_pz6yde.jpg",
            year: 2025,
            genres: ["Thriller", "Drama", "History", "Mystery"],
            duration: "2h 10m",
            score: 82,
            description:
                "A determined father risks everything to rescue a dedicated teacher and her students from a raging wildfire.",
            director: "Paul Greengrass",
            writer: "Brad Ingelsby",
            youtube: "https://www.youtube.com/watch?v=abcd123", // replace with real link
            trailer: ""
        },
        { 
            id: 3, 
            title: "MAI",
            releaseDate: "11 Oct 2025", 
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159359/trending-3_sf2tdx.jpg",
            year: 2025,
            genres: ["Crime", "Thriller", "Drama", "Mystery"],
            duration: "2h 10m",
            score: 82,
            description:
                "A determined father risks everything to rescue a dedicated teacher and her students from a raging wildfire.",
            director: "Paul Greengrass",
            writer: "Brad Ingelsby",
            youtube: "https://www.netflix.com/title/81687484", // replace with real link
            trailer: "https://www.youtube.com/watch?v=aLxhNzvqToY"
        },
        { 
            id: 4, 
            title: "WLGYT",
            releaseDate: "11 Oct 2025",
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159360/trending-4_rc7uur.jpg",
            year: 2025,
            genres: ["Thriller", "Drama", "History", "Mystery"],
            duration: "2h 10m",
            score: 82,
            description:
                "A determined father risks everything to rescue a dedicated teacher and her students from a raging wildfire.",
            director: "Paul Greengrass",
            writer: "Brad Ingelsby",
            youtube: "https://www.youtube.com/watch?v=abcd123", // replace with real link
            trailer: ""
        },
        { 
            id: 5, 
            title: "Mantis",
            releaseDate: "11 Oct 2025", 
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159360/trending-5_kieavv.jpg",
            year: 2025,
            genres: ["Thriller", "Drama", "History", "Mystery"],
            duration: "2h 10m",
            score: 82,
            description:
                "A determined father risks everything to rescue a dedicated teacher and her students from a raging wildfire.",
            director: "Paul Greengrass",
            writer: "Brad Ingelsby",
            youtube: "https://www.youtube.com/watch?v=abcd123", // replace with real link
            trailer: ""
        },
        { 
            id: 6, 
            title: "Monster",
            releaseDate: "11 Oct 2025", 
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159364/trending-6_k7pwkx.jpg",
            year: 2025,
            genres: ["Thriller", "Drama", "History", "Mystery"],
            duration: "2h 10m",
            score: 82,
            description:
                "A determined father risks everything to rescue a dedicated teacher and her students from a raging wildfire.",
            director: "Paul Greengrass",
            writer: "Brad Ingelsby",
            youtube: "https://www.youtube.com/watch?v=abcd123", // replace with real link
            trailer: ""
        },
        { 
            id: 7, 
            title: "Wednesday",
            releaseDate: "11 Oct 2025",
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159364/trending-7_mnjc57.jpg",
            year: 2025,
            genres: ["Thriller", "Drama", "History", "Mystery"],
            duration: "2h 10m",
            score: 82,
            description:
                "A determined father risks everything to rescue a dedicated teacher and her students from a raging wildfire.",
            director: "Paul Greengrass",
            writer: "Brad Ingelsby",
            youtube: "https://www.youtube.com/watch?v=abcd123", // replace with real link
            trailer: ""
        },
        { 
            id: 8, 
            title: "Face Off 6",
            releaseDate: "11 Oct 2025", 
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159365/trending-8_s4ajoe.jpg",
            year: 2025,
            genres: ["Thriller", "Drama", "History", "Mystery"],
            duration: "2h 10m",
            score: 82,
            description:
                "A determined father risks everything to rescue a dedicated teacher and her students from a raging wildfire.",
            director: "Paul Greengrass",
            writer: "Brad Ingelsby",
            youtube: "https://www.youtube.com/watch?v=abcd123", // replace with real link
            trailer: ""
        },
        { 
            id: 9, 
            title: "Kill Boksoon",
            releaseDate: "11 Oct 2025", 
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159368/trending-9_nydpzj.jpg",
            year: 2025,
            genres: ["Thriller", "Drama", "History", "Mystery"],
            duration: "2h 10m",
            score: 82,
            description:
                "A determined father risks everything to rescue a dedicated teacher and her students from a raging wildfire.",
            director: "Paul Greengrass",
            writer: "Brad Ingelsby",
            youtube: "https://www.youtube.com/watch?v=abcd123", // replace with real link
            trailer: ""
        },
        { 
            id: 10, 
            title: "Sinners",
            releaseDate: "11 Oct 2025", 
            img: "https://res.cloudinary.com/dchx8lhox/image/upload/v1764159364/trending-7_mnjc57.jpg",
            year: 2025,
            genres: ["Thriller", "Drama", "History", "Mystery"],
            duration: "2h 10m",
            score: 82,
            description:
                "A determined father risks everything to rescue a dedicated teacher and her students from a raging wildfire.",
            director: "Paul Greengrass",
            writer: "Brad Ingelsby",
            youtube: "https://www.youtube.com/watch?v=abcd123", // replace with real link
            trailer: ""
        },
    ];
    
    return (
        <div className="movies-page">
            {/* HERO */}
            <section
                className="movie-hero"
                style={{ backgroundImage: `url(${"https://res.cloudinary.com/dchx8lhox/image/upload/v1764158301/hero-bg_gicoox.jpg"})` }}
            >
                <div className="movie-hero-overlay">
                    <h1 className="movie-hero-title">Welcome.</h1>
                    <p className="movie-hero-subtitle">
                        Millions of movies, TV shows and people to discover. Explore now.
                    </p>
                    <a href="#trending" className="hero-btn">Explore Movies</a>
                </div>
            </section>

            {/* TRENDING */}
            <section className="trending" id="trending">
                <div className="trending-header">
                    <h2 className="trending-title">Trending</h2>
                </div>

                <div className="trending-scroll">
                    {movies.map((movie) => (
                        <div 
                            className="movie-card" 
                            key={movie.id}
                            onClick={() => navigate(`/movies/${movie.id}`, { state: movie})}
                        >
                            <img src={movie.img} alt={movie.title} />
                            <div className="movie-info">
                                <div className="movie-title">{movie.title}</div>
                                <div className="movie-date">{movie.releaseDate}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* LATEST TRAILERS */}
            <section
                className="latest-trailers"
                id="latest-trailers"
                style={{
                    backgroundImage: hoveredBg ? `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${hoveredBg})` : 'var(--bg-dark-color)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'background-image 0.6s ease-in-out'
                }}
                onMouseLeave={() => setHoveredBg(hoveredBg)} // Keep last hovered image
            >
                <h2 className="trailers-title">Latest Trailers</h2>
                <div className="trailers-scroll">
                    {trailers.map((trailer) => (
                        <div
                            className="trailer-card"
                            key={trailer.id}
                            onMouseEnter={() => setHoveredBg(trailer.img)}
                            // onMouseLeave={() => setHoveredBg(null)}
                        >
                            <img src={trailer.img} alt={trailer.title} />
                            <div
                                className="play-overlay"
                                onClick={() => handlePlayTrailer(trailer.trailer)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="30"
                                    height="30"
                                    fill="white"
                                    className="play-icon"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <div className="trailer-info">
                                <h4>{trailer.title}</h4>
                                <p>{trailer.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {showTrailer && (
                    <div className="trailer-modal">
                        <div className="trailer-modal-content">
                            <span className="close" onClick={() => setShowTrailer(false)}>
                                &times;
                            </span>
                            <iframe
                                width="100%"
                                height="400"
                                src={`${currentTrailer}?autoplay=1`}
                                title="Trailer"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </section>

            
        </div>
    );
}
