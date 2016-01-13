# HomeNet
HomeNet is a home automation network that allows you to incorporate all your home automation tasks into one central, easy to use location.  The idea is to control everything in the house with any device with a simple and intelligent interface.  

The Application is build with AngularJS and a NodeJS backend.

I have utilized Grunt, Bower and NPM within this as a task runner and package manager which simplifies running and building the application.

### Features
- Feature: Controlling the Sonos Hifi system for sound
Source: [jishi/node-sonos-http-api](https://github.com/jishi/node-sonos-http-api)

- Feature: Allow the user to see the next 4 day forecast in the area
Source: [weatherUnderground](http://www.wunderground.com/weather/api/)

- Feature: Allow the user to text message
Source: [amper5and/voice.js](https://github.com/amper5and/voice.js)

### Running the application:
-npm install
-brew install mongodb
-sudo mongod
-grunt serve