module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2,
            { "SwitchCase": 1 },
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        "no-unused-vars": [
            0
        ],
        "no-console": [
          "warn"
        ],
    }
};
