module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "sourceType": "module",
        "project": "./tsconfig.json",
        "tsconfigRootDir": ".",
        "extraFileExtensions": [".vue"]
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    },
    "ignorePatterns": ["**/*.js"]
}
