Ref links:

    Node: https://nodejs.org/dist/latest-v7.x/docs/api/documentation.html
    REST: https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09#.z8tysoh96
    Babel: http://stackoverflow.com/questions/28782656/how-to-run-node-js-app-with-es6-features-enabled
    Debugging: https://www.youtube.com/watch?v=03qGA-GJXjI // keep node-inspector running in terminal(seperate) and do node --debug server.js
    NVM: https://github.com/creationix/nvm/blob/master/README.markdown // nvm use 7
    Auth: https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens


Handy commands:

    Stop node processes: ps aux | awk '/node/{print $2}' | xargs kill -9


Global installations:

    node
    mongodb
    express
    nodemon
    node-inspector


NPM:

    Helpfull commands:
        npm init --yes
        npm config set init.author.name YOUR_NAME
        npm config set init.author.email YOUR_EMAIL
        npm home MODULE_NAME
        npm bugs MODULE_NAME
        npm repo MODULE_NAME
        npm install MODULE_NAME --save / npm i MODULE_NAME -S
        npm config set save-prefix='~' // ~, ^
        npm config set save-exact true
        npm outdated
        npm install --production / NODE_ENV=production npm install // --save-dev
        In case of using npm with a logged in user, your npm token will be placed in the .npmrc file. Another source of possible security issues are the files which are published to npm by accident. By default npm respects the .gitignore file, and files matching those rules won't be published. However, if you add an .npmignore file, it will override the content of .gitignore - so they won't be merged.
        npm link
        npm link MODULE_NAME
        npm publish

    Set default env:
        Put in package.js:
            "configurations": [{
                "env": {
                    "NODE_ENV": "development",
                    "PORT": 8005,
                    "DATABASE_HOST": "127.0.0.1"
                },
            }],




MEAN Notes:

    Server Side:

        Folder structure:

            Module wise partition:
                index.js, separate-sub-module-file.js, partials-folder

        Configuration Settings:
