module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./src"],
                extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
                alias: {
                    tests: ["./tests/"],
                    "@components": "./src/components",
                    "@authentication": "./src/Authentication",
                    "@assets": "./src/assets",
                    "@navigations": "./src/navigations",
                    "@screens": "./src/screens",
                    "@services": "./src/services",
                    "@styles": "./src/styles",
                    "@types": "./src/types",
                    "@utils": "./src/utils",
                    "@store": "./src/store",
                    "@hooks": "./src/hooks",
                    "@theme": "./src/theme",
                },
            },
        ],
    ],
};
