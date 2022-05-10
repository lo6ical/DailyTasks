import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Task from '../components/task';

function Home() {
    return (
      <View>
        <Task taskName="Clean apartment" taskDescription="Vacuum the apartment and take out the trash"/>
        <Task taskName="Go to the gym" taskDescription="Train at the gym for at least 60 minutes. Today is legday." />
      </View>
    );
}

export default Home;