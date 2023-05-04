


Karaoke Practice Website
This is a web application designed to help users practice their singing skills by singing along with their favorite karaoke tracks. The application is built using Angular for the front-end, Java Spring for the back-end, and My SQL for the database.

Features
Search for karaoke tracks by title, artist, or genre
Play karaoke tracks and sing along with lyrics highlighted in real-time
Record and save user singing performances
Rate and review karaoke tracks
Create and manage playlists
Getting Started
To run the application locally, follow these steps:

Clone the repository to your local machine
Install the necessary dependencies by running npm install in the karaoke-practice-website/angular directory
Start the Angular development server by running ng serve in the karaoke-practice-website/angular directory
Install and set up My SQL database on your machine
Run the Java Spring application by running mvn spring-boot:run in the karaoke-practice-website/backend directory
Open your browser and navigate to http://localhost:4200 to use the application
Contributing
Contributions to this project are welcome. If you have an idea for a feature or find a bug, please create a new issue on the project's GitHub page. If you would like to contribute code, please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License. See the LICENSE file for more information.






# KaraokePracticeWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## BACKEND

## Technologies
Java
Spring Framework
MySQL
Maven

## Prerequisites

Java 17 
MySQL 8.0.31
Maven 3.9.1

## Installation
1.Clone the repository:
2.Update the application.properties file with your database credentials:

spring.datasource.url=jdbc:mysql://localhost:3306/<database-name>?useSSL=false
spring.datasource.username=<database-username>
spring.datasource.password=<database-password>
  
3.Build the application using Maven:
mvn clean install
