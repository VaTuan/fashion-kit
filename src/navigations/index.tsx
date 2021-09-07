import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthNavigator from "./auth-navigator";

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
