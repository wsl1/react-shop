module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    globals: {
        "window": true,
        "document": true,
    },
    env: {
        jest: true
    },
    rules: {
        "react/prefer-stateless-function": 0,
        "react/jsx-filename-extension": 0,
        "linebreak-style": 0,
        "arrow-parens": 0,
        "no-tabs": 0,
        "react/require-default-props": 0,
        "quote-props": 0,
        "import/no-extraneous-dependencies": 0
    }
};