import React, {useState, useEffect} from 'react'
import { StyleSheet, View, TextInput, Text, Button, FlatList, ActivityIndicator } from 'react-native'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
import FilmList from '../Components/FilmList'

// export default function Search() {
//     const [films, setFilms] = useState([]);
//     const [searchedText, setSearchedText] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [page, setPage] = useState(0);
//     const [totalPages, setTotalPages] = useState(0);

//     const _searchTextInputChanged = (text) => {
//         setSearchedText(text)
//     }

//     const _searchFilms = () => {
//         setPage(0)
//         setTotalPages(0)
//         setFilms([])
//     }

//     const _loadFilms = () => {
//         console.log('Keyword: ' + searchedText)
//         if (searchedText.length > 0) {
//             setIsLoading(true)
//             getFilmsFromApiWithSearchedText(searchedText, page+1)
//             .then(data => {
//                 setFilms([...films, ...data.results])
//                 setPage(data.page)
//                 setTotalPages(data.total_pages)
//                 setIsLoading(false)
//             });
//         }
//     }

//     const _displayLoading = () => {
//         if (isLoading) {
//             return (
//                 <View style={styles.loading_container}>
//                     <ActivityIndicator size='large'/>
//                 </View>
//             )
//         }
//     }

//     return (
//         <View style={styles.main_container}>
//             <TextInput 
//                 style={styles.textinput}
//                 placeholder='Titre du film'
//                 onChangeText={(text) => {_searchTextInputChanged(text)}}
//                 onSubmitEditing={() => _searchFilms()}
//             />
//             <Button title='Rechercher' onPress={() => {_searchFilms()}}/>
//             <FlatList
//                 data={films}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({item}) => <FilmItem film={item} />}
//                 onEndReachedThreshold={0.5}
//                 onEndReached={()=> {
//                     ( page < totalPages ) && _loadFilms()
//                 }}
//             />
//             {_displayLoading()}
//         </View>
//     )
// }

export default class Search extends React.Component {

    constructor(props) {
        super(props)
        this.searchedText = ""
        this.page = 0
        this.totalPages = 0
        this.state = {
            films: [],
            isLoading: false
        }
        this._loadFilms = this._loadFilms.bind(this)
    }
  
    _loadFilms() {
        if (this.searchedText.length > 0) {
            this.setState({ isLoading: true })
            getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({
                    films: [ ...this.state.films, ...data.results ],
                    isLoading: false
                })
            })
        }
    }
  
    _searchTextInputChanged(text) {
        this.searchedText = text 
    }
  
    _searchFilms() {
        this.page = 0
        this.totalPages = 0
        this.setState({
            films: [],
        }, () => {
          this._loadFilms()
        })
    }
  
    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    // _displayFilmDetail = (idFilm) => {
    //     console.log('Display film with id ' + idFilm)
    //     this.props.navigation.navigate("Détail", { idFilm: idFilm })
    // }
  
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput
                    style={styles.textinput}
                    placeholder='Titre du film'
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._searchFilms()}
                />
                <Button title='Rechercher' onPress={() => this._searchFilms()}/>
                <FilmList
                    films={this.state.films}
                    navigation={this.props.navigation}
                    loadFilms={this._loadFilms}
                    page={this.page}
                    totalPages={this.totalPages}
                    isFavoriteList = {false}
                />
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        margin: 5
    },
    textinput: {
        marginBottom: 5,
        height: 50,
        backgroundColor: '#ffffff',
        borderColor: '#dadada',
        borderWidth: 1,
        paddingLeft: 5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});