import React from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';
import {defaultStyles} from '../styles/default';

class AddCard extends React.Component {
    render() {
        return <View style={defaultStyles.mainView}>
            <Text>AddCard</Text>
        </View>;
    }
}

const mapStateToProps = (state, props) => ({
    key: props.key,
} );

export default connect(mapStateToProps)(AddCard);
