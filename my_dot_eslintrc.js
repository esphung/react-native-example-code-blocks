module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "node": true
    },
    "extends": [
      "airbnb-base",
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "camelcase": "off",
      "react/style-prop-object": "off",
      "import/no-unresolved": "off",
      "no-restricted-globals": "off",
      "import/no-extraneous-dependencies": "off",
    }
};
