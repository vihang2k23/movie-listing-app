import React from "react";
import { useHistory } from "react-router-dom";
import "./MovieCard.css";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const MovieCard = (props) => {
    const { data } = props;
    const history = useHistory();

    const imageUrl = data?.primaryImage?.url;
    const title = data?.titleText.text;
    const releaseYear = data?.releaseYear?.year;
    const movieId = data?.id;
    const caption = data?.primaryImage?.caption?.plainText ;

    const handleClick = () => {
        history.push(`/movie/${movieId}`);
    };

    return (
        <div className="card" onClick={handleClick}>
            <div className="imgContainer">
                <img src={imageUrl || IMGPATH} className="img" alt={title} />
            </div>
            <div className="textBox">
                <h4 className="text head">{title}</h4>
                <p>{releaseYear} </p>
                <p>titleType: {data?.titleType?.text}</p>
                <p>caption:{caption}</p>

     
            </div>
        </div>
    );
};

export default MovieCard;
