import React from 'react';
import { useSelector } from 'react-redux';
import FilmList from "../Components/FilmList";

export default function Favorites(props) {
    const favoriteFilms = useSelector(state => state.favoritesFilm);
    return (
        <FilmList
            films={favoriteFilms}
            navigation={props.navigation}
            isFavoriteList = {true}
        />
    )
}