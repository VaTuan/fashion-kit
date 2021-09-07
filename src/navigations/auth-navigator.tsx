import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import {OnboardingScreen} from "screens";
import {AuthenticationStackParamList} from "types/stack.navigator";

const AuthNavigator = () => {
    const AuthStack = createStackNavigator<AuthenticationStackParamList>();
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Onboarding" component={OnboardingScreen} />
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;
