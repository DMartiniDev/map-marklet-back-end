# Map Marklet - Back-End

Map Marklet is a Chrome extension that lets users save urls to markers on a personal instance of Google Maps and share with friends.

![popup](https://i.imgur.com/CsmatPR.png "Popup")
![main-page](https://i.imgur.com/i89X4P4.png "Main")

## About the Back-End

The Map-Marklet Back-End offers two endpoints. One of them is used to read the list of markers for a specific user whereas the other
is used to set/update the list of markers for a specific user. In order to do that, the backend communicates with a Firebase database.

## Getting Started

If you want to run your own version of the back-end, you'll need to do the following:

- Clone this repository
- cd into the project folder: `cd map-marklet-back-end`
- Install dependencies `using npm i`
- Make a copy of `.env.default`, rename it as `.env` and fill it with your own information.
- Run the server using: `node index.js`

## Tech Stack
- Express
- Firebase

## Authors

* Dave Martínez - [Github](https://github.com/dkm-coder) - [LinkedIn](https://www.linkedin.com/in/dmartinezanim/)
* Juliane Nagao - [Github](https://github.com/junagao) - [LinkedIn](https://www.linkedin.com/in/junagao/)
* Kryshlynn Florante - [Github](https://github.com/mhalomy) - [LinkedIn](https://www.linkedin.com/in/kryshlynn-florante/)

## Contributing
If you'd like to contribute to this project, feel free to open a new issue in this repository so we can get a conversation started.
