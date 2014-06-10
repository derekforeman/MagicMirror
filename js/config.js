//Centralize all configuration options.

"use strict";

var mirror = new function () {

    var config = {
        //get browser language.
        lang: window.navigator.language,
        //limit the number of calendar events to display, 0 disables.
        eventsToDisplay: 3,

        compliments: [
            'Hey, handsome!',
            'Hi, sexy!',
            'Hello, beauty!',
            'You look sexy!',
            'Wow, you look hot!',
            'Looking good today!',
            'You look nice!',
            'Enjoy your day!',
            'Sha-WING!',
            'I bet you look good on the dancefloor!'
        ],
        enableDishWasher: 0,
        newsFeeds: []

    };
    //create weather parameters. Need to split it from config as it depends on config.lang.
    var weatherParams = {
        'q': 'Bloomington,IN',
        'units': 'imperial',
        'lang': config.lang
    };

    config.weatherParams = weatherParams;

    return {
        config:config
    }
}();
