# AngularJS - Social app

##### Aplikacja zbudowana na podstawie przykładu z książki pt. "Nowoczesne aplikacje internetowe" autorstwa Jeff'a Dickey.

Aplikacja bazuje na stosie MEAN.

### Sposób użycia

Instalacja zależności:

    npm install && bower install

Uruchomenie bazy danych MongoDB:

    mongod --dbpath <path>/social

Uruchomienie bazy Redis:

    redis [--port port][--loglevel verbose]

Uruchomienie aplikacji w trybie produkcyjnym (po skompilowaniu źródeł):

    npm start

Uruchomienie aplikacji w trybie deweloperskim:

    gulp dev
