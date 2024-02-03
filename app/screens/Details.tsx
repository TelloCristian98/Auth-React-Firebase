import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FIREBASE_AUTH } from "../../FirebasConfig";

const Details = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {FIREBASE_AUTH.currentUser ? <Text>Welcome {FIREBASE_AUTH.currentUser.email}</Text> : null}<br />
                {FIREBASE_AUTH.currentUser ? <Text>Verified: {FIREBASE_AUTH.currentUser.emailVerified ? 'Yes' : 'No'}</Text> : null}<br />
                {FIREBASE_AUTH.currentUser ? <Text>UID: {FIREBASE_AUTH.currentUser.uid}</Text> : null}<br />
                {FIREBASE_AUTH.currentUser ? <Text>Provider: {FIREBASE_AUTH.currentUser.providerId}</Text> : null}<br />
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default Details;