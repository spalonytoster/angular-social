# AngularJS - Social app

##### Aplikacja zbudowana na podstawie przykładu z książki pt. "Nowoczesne aplikacje internetowe" autorstwa Jeff'a Dickey.

Aplikacja bazuje na stosie MEAN.

### Sposób użycia

1.) Instalacja zależności:

    npm install && bower install

2.) Uruchomienie bazy danych MongoDB:

    mongod --dbpath <path>/social

3.) Uruchomienie bazy Redis:

    redis [--port port][--loglevel verbose]

##### Uruchomienie aplikacji w trybie deweloperskim (automatyczna kompilacja assetów + nodemon):

    gulp dev

##### Uruchomienie aplikacji w trybie produkcyjnym:

1.) Kompilacja assetów

    npm run build

2.) Start serwera

    npm start
