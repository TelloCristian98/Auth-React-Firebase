import { View, Text, StyleSheet, TextInput, ActivityIndicator, Button } from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../FirebasConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            //    alert("Check your email for a link to verify your account");
        } catch (e: any) {
            console.log(e);
            alert("Registration failed" + e.message);
        }
        setLoading(false);
    };

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            alert("Check your email for a link to verify your account");
        } catch (e: any) {
            console.log(e);
            alert("Registration failed" + e.message);
        }
        setLoading(false);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            {loading ? <ActivityIndicator size='large' color='#0000ff' />
                : <>
                    <Button title='Login' onPress={signIn} />
                    <Button title='Create Account' onPress={signUp} />
                </>
            }
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
    },
    input: {
        height: 50,
        marginVertical: 4,
        padding: 10,
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: '#fff',
    }
});