import React from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {defaultStyles} from '../styles/default';

class AddCard extends React.Component {
    static navigationOptions = ({navigation}) => ({title: `Add card to '${navigation.state.params.title}'`});

    render() {
        const {title} = this.props;
        return <View style={defaultStyles.mainView}>
            <Text>AddCard for deck {title}</Text>
        </View>;
    }
}

const mapStateToProps = (state, {navigation}) => ({
    title: navigation.state.params.title,
} );

export default connect(mapStateToProps)(AddCard);
