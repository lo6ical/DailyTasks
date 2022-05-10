import {React, useState} from 'react';
import { Text, View, CheckBox, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    const [taskName, setTaskName] = useState(props.taskName);
    const [taskDescription, setTaskDescription] = useState('');
    const [descriptionState, setDescriptionState] = useState(false);

    const showDescription = () => {
        if (descriptionState == false) {
            setTaskDescription(props.taskDescription);
            setDescriptionState(true);
        } else {
            setTaskDescription('');
            setDescriptionState(false);
        }
        
    }
    return(
        <TouchableOpacity onPress={() => showDescription()} style={taskStyle.container}>
            <Text style={taskStyle.header}>
                {taskName}
            </Text>
            <Text style={taskStyle.description}>
                {taskDescription}
            </Text>
        </TouchableOpacity>
    );
}
const taskStyle = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
        padding: 10,
        marginTop: 12,
        justifyContent: 'center',
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 13,
        width: '90%',

    },
    header: {

    },
    description: {
        fontSize: 10,
        textAlign: 'center',
    }
});

export default Task;