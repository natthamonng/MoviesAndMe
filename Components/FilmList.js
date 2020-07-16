import React from 'react';
import { StyleSheet, FlatList } from "react-native";
import FilmItem from "./FilmItem";
import { useSelector } from 'react-redux';

export default function FilmList(props) {
    const { films, navigation, page, totalPages, loadFilms, isFavoriteList } = props;
    const favoritesFilm = useSelector(state => state.favoritesFilm);

    const displayFilmDetail = (idFilm) => {
        navigation.navigate("Détail", {idFilm: idFilm})
    };

    return (
        <FlatList
            style={styles.list}
            data={films}
            extraData={favoritesFilm}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) =>
                <FilmItem
                    film={item}
                    displayFilmDetail={displayFilmDetail}
                    isFilmFavorite={(favoritesFilm.findIndex(favoriteFilm => favoriteFilm.id === item.id) !== -1)}
                />
            }
            onEndReachedThreshold={0.5}
            onEndReached={() => {
                if (!isFavoriteList && (page < totalPages)) {
                    loadFilms()
                }
            }}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    }
});