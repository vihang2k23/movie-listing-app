import React, { useState, useEffect } from 'react';
import movieApi from "../common/apis/movieApi";
import { useParams } from 'react-router-dom'; 
import "./spinner.css"
const MovieDetail = () => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    let { imdbID } = useParams();

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                const response = await movieApi.get(`/titles/${imdbID}`);
                 setMovie(response.data.results); // Assuming response.data contains movie details
                setLoading(false);
                console.log(movie,"movie");
            } catch (error) {
                console.error('Error fetching movie:', error);
                setLoading(false);
            }
        };

        fetchMovie();
    }, [imdbID]);

    if (loading) {
        return <div className="spinner"></div>;
    }

    if (!movie) {
        return <div>Movie not found</div>;
    }

    const plainText = movie?.primaryImage?.caption?.plainText
    return (
        <div style={{ color: 'white', textAlign: 'center' }}>
           <h1>{movie.titleText ? movie.titleText.text : ''}</h1>
            <p>Release Year: {movie.releaseYear ? movie.releaseYear.year : ''}</p>
            <p>titleType: {movie.titleType.text}</p> {/* Assuming `genre` is available in `movie` */}
            <p>caption:{plainText} ;</p>
            {movie.primaryImage && (
                <img 
                    src={movie.primaryImage.url} 
                    alt={movie.titleText ? movie.titleText.text : ''} 
                    style={{ width: '25%', height: 'auto', display: 'block', margin: '0 auto' }}
                />
            )}
            {/* Add more details as needed */}
        </div>
    );
}

export default MovieDetail;
