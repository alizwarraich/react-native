import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { auth } from '../firebase';

export default function AccountScreen({ navigation }) {
    // auth.then()
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                console.log('Logged out!')
                navigation.replace('Login')
            })
            .catch(error => alert(error.message))
    }
    const user = "alizwaraich";
    return (
        <View style={styles.container}>
            <Text
                style={{ fontWeight: '500', marginHorizontal: 40, marginTop: -30, marginBottom: 30, fontSize: 20, alignSelf: 'center' }}>
                Goodbye <Text style={{ color: '#D4263F' }}>{user}</Text>
            </Text>
            <Text style={{ marginVertical: 20, fontSize: 16, fontWeight: '500', color: 'grey' }}>
                We will be looking forward to see you soon
            </Text>
            <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>
                    Sign out
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingVertical: 20,
        paddingHorizontal: 50,
        backgroundColor: 'red',
        borderRadius: 50,
    },
});