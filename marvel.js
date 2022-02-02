#!/usr/bin/node
const process = require('process');
const request = require('request');
const requestURL = 'https://gateway.marvel.com:443/v1/public/events?limit=3&ts=1&apikey=c816ab0833ed28c3aaeb7f442ca818ca&hash=4559869b7f093907da2b27e6cb1aaace';
//const hashrequestlimit = 'd0b9c518ab250fdf2f0b22a66f2c99cf';


request(requestURL, function (error, response, body) {
  if (error) throw error;
  const jsonBody = JSON.parse(body).data.results;
  jsonBody.forEach(element => {
    const eventId = element.id;
    const eventTitle = element.title;
    const eventDescription = element.description;
    const eventStart = element.urls.start;
    const eventEnd = element.urls.end;
    const creators = '';
    element.creators.items.forEach(element => {
        creators += element.name + ',';
    });
    element.characters.items.forEach(element => {
        const characterURL = element.resourceURI + '?ts=1&apikey=c816ab0833ed28c3aaeb7f442ca818ca&hash=4559869b7f093907da2b27e6cb1aaace';
        request(characterURL, function (error, response, body) {
            if (error) throw error;
            const jsonCharacter = JSON.parse(body).data.results;
            const characterID = jsonCharacter.id;
            const characterName = jsonCharacter.name;
            const characterDescription = jsonCharacter.description;
            const characterComics = jsonCharacter.comics.available;
            const characterSeries = jsonCharacter.series.available;
            const characterStories = jsonCharacter.stories.available;
            const characterEvents = jsonCharacter.events.available;
            
        });

    });
  });
  
});
