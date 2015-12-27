var config = {
    lang: 'en',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Pleasanton,California',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: '60f33088b61eb9592757f3067449fe3c'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good Morning!',
            'That looks nice on you',
            'Have a great day!'
        ],
        afternoon: [
            'Good Afternoon!',
            'Halfway there',
            'YOLO'
        ],
        evening: [
            'Good Evening!',
            'Looking good',
            'Hey wassup hello'
        ]
    },
    calendar: {
        maximumEntries: 5,
        url: "https://calendar.google.com/calendar/ical/mlnaik93%40gmail.com/private-c1787f9a99bff08920c847ab1295149b/basic.ics"
    },
    news: {
        feed: 'http://rss.cnn.com/rss/edition.rss'
    }
}
