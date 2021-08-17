module.exports = {
    root: true,
    extends: "@react-native-community",
    rules: {
        "no-console": "warn",
        semi: ["error", "always"],
        quotes: ["error", "double"],
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
    },
};
