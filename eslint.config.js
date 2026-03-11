export default [
    {
        files: ["src/**/*.js"],
        languageOptions:{
            ecmaVersion: "latest",
            sourceType:"module"
        },
        rules: {
            "no-console":"warn",
            "no-unused-vars": "warn",
            "semi" : ["error", "always"],
            "quotes" : ["error", "double"]
        }
    }
]