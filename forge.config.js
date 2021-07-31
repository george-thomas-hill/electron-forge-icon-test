const path = require('path');

module.exports = {
    "packagerConfig": {
        icon: path.resolve(__dirname, 'assets/icon.png'),
    },
    "makers": [
        {
            "name": "@electron-forge/maker-squirrel",
            "config": {
                "name": "my_new_app"
            }
        },
        {
            "name": "@electron-forge/maker-zip",
            "platforms": [
                "darwin"
            ]
        },
        {
            "name": "@electron-forge/maker-deb",
            "config": {
                "options": {
                    "icon": "./src/images/icon.png"
                }
            }
        },
        {
            "name": "@electron-forge/maker-rpm",
            "config": {}
        }
    ],
    "plugins": [
        [
            "@electron-forge/plugin-webpack",
            {
                "mainConfig": "./webpack.main.config.js",
                "renderer": {
                    "config": "./webpack.renderer.config.js",
                    "entryPoints": [
                        {
                            "html": "./src/index.html",
                            "js": "./src/renderer.js",
                            "name": "main_window"
                        }
                    ]
                }
            }
        ]
    ]
}
