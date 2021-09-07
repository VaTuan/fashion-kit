import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Onboarding = () => {
    return (
        <View>
            <Text style={styles.text1}>Hi from Onboarding hihi regular</Text>
            <Text style={styles.text2}>Hi from Onboarding bold</Text>
            <Text style={styles.text3}>Hi from Onboarding semi-bold</Text>
        </View>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    text1: {
        fontFamily: "SF-Pro-Text-Regular",
        fontSize: 30,
        textAlign: "center",
        margin: 10,
    },
    text2: {
        fontFamily: "SF-Pro-Text-Bold",
        fontSize: 30,
        textAlign: "center",
        margin: 10,
    },
    text3: {
        fontFamily: "SF-Pro-Text-Semibold",
        fontSize: 20,
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    },
});
