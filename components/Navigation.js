import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import {appNavigationBackgroundColor, appDarkInk} from '../styles/colors';
import Decks from './Decks';
import AddDeck from './AddDeck';
import Deck from './Deck';
import AddCard from './AddCard';
import Quiz from './Quiz';

const Tabs = TabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({tintColor}) => <FontAwesome name="list-alt" size={24} color={tintColor} />
        },
    },
    AddDeck: {
        screen: AddDeck,
        navigationOptions: {
            tabBarLabel: 'Add New Deck',
            tabBarIcon: ({tintColor}) => <FontAwesome name="plus-square" size={24} color={tintColor} />
        },
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: appDarkInk,
        showIcon: true,
        style: {
            height: 70,
            backgroundColor: appNavigationBackgroundColor,
        }
    }
});

const MainNavigation = StackNavigator({
    Home: {
        screen: Tabs,
    },
    Deck: {
        screen: Deck,
        navigationOptions: {
            headerTintColor: appDarkInk,
            headerStyle: {
                backgroundColor: appNavigationBackgroundColor,
            }
        }
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            headerTintColor: appDarkInk,
            headerStyle: {
                backgroundColor: appNavigationBackgroundColor,
            }
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            headerTintColor: appDarkInk,
            headerStyle: {
                backgroundColor: appNavigationBackgroundColor,
            }
        }
    }
});

export default MainNavigation;
