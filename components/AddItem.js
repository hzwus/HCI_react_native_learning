import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({title, addItem}) => {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);
    return (
        <View style={styles.listItemView}>
            <TextInput placeholder="Add Item..." style={styles.input} 
            onChangeText={onChange}/>
            <TouchableOpacity style={styles.btn} onPress={() =>
            addItem(text)}>
                <Text style={styles.btnText}>
                    Add Item
                    <Icon name="plus" size={20} />
                </Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        fontFamily: 'Cochin',
        height: 60,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#239B56',
        padding: 9,
        margin: 5,
        borderColor: '#145A32',
        borderWidth: 2,
        borderRadius: 20
    },
    btnText: {
        fontFamily: 'Cochin',
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});

export default AddItem;