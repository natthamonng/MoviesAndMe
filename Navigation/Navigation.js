import React from 'react';
import { StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../Containers/Search';
import FilmDetail from '../Containers/FilmDetail';
import Favorites from '../Containers/Favorites';

function SearchStackNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Rechercher" component={Search}/>
            <Stack.Screen name="Détail" component={FilmDetail}/>
        </Stack.Navigator>
    )
}

function FavoritesStackNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favoris" component={Favorites}/>
            <Stack.Screen name="Détail" component={FilmDetail}/>
        </Stack.Navigator>
    )
}

export default function MoviesTabNavigator() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    // activeTintColor: '#FFFFFF',
                    // inactiveTintColor: '#DDDDDD',
                    activeBackgroundColor: '#DDDDDD',
                    inactiveBackgroundColor: '#FFFFFF',
                    showLabel: false
                }}
            >
                <Tab.Screen
                    name="Rechercher"
                    component={SearchStackNavigator}
                    options={{
                        tabBarLabel: 'Rechercher',
                        tabBarIcon: () => {
                            return <Image
                                source={require('../Images/ic_search.png')}
                                style={styles.icon}/>
                        }
                    }}
                />
                <Tab.Screen
                    name="Favoris"
                    component={FavoritesStackNavigator}
                    options={{
                        tabBarLabel: 'Favoris',
                        tabBarIcon: () => {
                            return <Image
                                source={require('../Images/ic_favorite.png')}
                                style={styles.icon}/>
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 25,
        height: 25,
    }
})