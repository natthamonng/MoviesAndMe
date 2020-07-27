import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import FilmList from '../Components/FilmList';
import Avatar from '../Components/Avatar';

export default function Favorites(props) {
    const favoriteFilms = useSelector(state => state.toggleFavorite.favoritesFilm);
    return (
        <View style={styles.main_container}>
            <View style={styles.avatar_container}>
                <Avatar/>
            </View>
            <FilmList
                films={favoriteFilms}
                navigation={props.navigation}
                isFavoriteList = {true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    avatar_container: {
        alignItems: 'center'
    }
});

