import React, {useState} from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ImagePicker from 'react-native-image-picker';

function Avatar () {
    // const [avatar, setAvatar] = useState(require('../Images/ic_tag_faces.png'));
    const dispatch = useDispatch();
    const avatar = useSelector(state => state.setAvatar.avatar);

    const _avatarClicked = () => {
    // Ici nous appellerons la librairie react-native-image-picker pour récupérer un avatar
        ImagePicker.showImagePicker({}, (response) => {
            if (response.didCancel) {
                console.log('L\'utilisateur a annulé.')
            }
            else if (response.error) {
                console.log('Erreur: ', response.error)
            } 
            else {
                console.log('Photo: ', response.uri)
                let requireSource = {uri: response.uri}
                dispatch({type: "SET_AVATAR", value: requireSource})
            }
        });
    }

    return (
        <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={_avatarClicked}>
            <Image style={styles.avatar} source={avatar} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableOpacity: {
        margin: 5,
        width: 100, // Pensez bien à définir une largeur ici, sinon toute la largeur de l'écran sera cliquable
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#9B9B9B',
        borderWidth: 2
    }
})

export default Avatar