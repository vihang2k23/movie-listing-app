import React, { useState, useEffect } from 'react';
import MovieListing from "./MovieListing";
import movieApi from "../common/apis/movieApi";
import { addMovies } from '../features/movies/movieSlice';
import { useDispatch } from 'react-redux';
import "./spinner.css"
const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        console.log("calll");
        const fetchMovies = async() => {
            try{
                const response = await movieApi.get(`/titles`);
            console.log('response: ', response);
            dispatch(addMovies(response.data.results));
            setLoading(false);
            }catch(e){
                console.log(e);
                setLoading(false);
            }
        };
        fetchMovies();
    }, [])
    if (loading) {
        return <div className="spinner"></div>;
    }
    return (
        <>
            <div className="banner-img"></div>
            <MovieListing />
        </>
    )
}

export default Home
