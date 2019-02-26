
## Client

A small working prototype used to investigate design options, styling and tradeoffs in a web application

This web app is intended to be used with a backend mongo server
## Getting Set Up

Getting the app running on your local machine takes only a few steps:

1. clone the project - `git clone https://github.com/pdhoward/client.git
2. rename configEx directory to config. No additional updates needed in config.json
2. install its dependencies - `npm install`
3. Built with create-react-app -- npm run start

Also, install the backend db server

1. clone the project - `git clone https://github.com/pdhoward/server.git
2. install its dependencies - `npm install`
3, When running local, start your mongo db server
4. start the backend server - `node server.js`

Start the backend server first, then the client, since the client will initialize state be retrieving the set of available agents and customers


## License and Use
 [LICENSE](LICENSE.txt).

## Contributing

For details, check out [CONTRIBUTING](./.github/CONTRIBUTING.md).

## Code of Conduct

[CODE OF CONDUCT](./.github/CODE_OF_CONDUCT.md).

Strategic Machines and affiliates
connecting businesses with the conversational economy
