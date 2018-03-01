[![Build Status](http://www.jenkins.bettorleague.ovh/buildStatus/icon?job=bettor-league)](http://www.jenkins.bettorleague.ovh/job/bettor-league/)
[![License Apache-2.0](https://img.shields.io/badge/license-APACHE_2.0-blue.svg)](https://github.com/BettorLeague/bettor-league/blob/master/LICENSE)

# Bettor-league

Comment enrichir la communauté du football au travers d’une application divertissante autour des pronostics ?

BettorLeague / Ligue des parieurs

Principales fonctionnalités

- Suivre les résultats des matchs
- Pronostics sur les futurs matchs de la ligue 1
- Création de groupe de pronostic & discussion

Les résultats rapportent plus ou moins de points / trophés pour monter en rang .

### Prerequisites

Ensure you have this installed before proceeding further
- Java 8
- Maven 3.3.9+ 
- Node 6.0 or above,  
- npm 5 or above,   
- Angular-cli 1.6.3

### Technology Stack
Component         | Technology
---               | ---
Frontend          | [Angular 5](https://github.com/angular/angular) (JavaScript)
Backend (REST)    | [SpringBoot](https://projects.spring.io/spring-boot) (Java)
REST Documentation| [Swagger UI / Springfox](https://github.com/springfox/springfox)
In Memory DB      | [H2](http://www.h2database.com/html/main.html) / [MySQL](https://www.mysql.com/fr/) 
Persistence       | [JPA](https://fr.wikipedia.org/wiki/Java_Persistence_API) (Using Spring Data)
Client Build Tools| [angular-cli , npm](https://github.com/angular/angular-cli)
Server Build Tools| [Maven](https://maven.apache.org/) (Java)
Continuous integration | [Jenkins](https://jenkins.io)
API Restfull de Resultat Sportif | [FootballData](https://www.football-data.org/)

## Local Environment 


### Build Only Frontend (Angular JS)
http://localhost:4200
```
# Front Dev to client/src/
npm install
npm start
```

### Build Front & Backend (SpringBoot Java)
http://localhost:8080
```
# Backend Dev to server/
mvn clean install
mvn spring-boot:run
```

### Database (H2 in memory)
http://localhost:8080/database
```
UserName: root
Password: root
```

#### Useful Links 

- Swagger : http://localhost:8080/swagger-ui.html
- Database : http://localhost:8080/database/


## Production Environment 

#### Useful Links 

- App : http://www.bettorleague.ovh
- Jenkins : http://www.jenkins.bettorleague.ovh