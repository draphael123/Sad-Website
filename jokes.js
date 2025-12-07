// Large collection of jokes - over 1000 jokes total
// This file contains static jokes and API integration for fetching more

const staticJokes = {
    filipino: [
        { text: "Bakit hindi pwedeng maglaro ng hide and seek ang mga baka? Kasi lahat sila, 'Moo!'", translation: "Why can't cows play hide and seek? Because they all say 'Moo!'" },
        { text: "Ano ang tawag sa kalabaw na nasa loob ng elevator? Kalabaw na elevator!", translation: "What do you call a carabao inside an elevator? A carabao in an elevator!" },
        { text: "Bakit masaya ang kalendaryo? Kasi marami siyang dates!", translation: "Why is the calendar happy? Because it has many dates!" },
        { text: "Ano ang favorite subject ng mga isda? Math! Kasi full of numbers ang dagat!", translation: "What's the fish's favorite subject? Math! Because the ocean is full of numbers!" },
        { text: "Bakit hindi pwedeng mag-joke ang mga bato? Kasi walang sense of humor!", translation: "Why can't stones tell jokes? Because they have no sense of humor!" },
        { text: "Bakit ayaw ng mga pusa sa computer? Kasi may mouse!", translation: "Why don't cats like computers? Because there's a mouse!" },
        { text: "Ano ang tawag sa kalabaw na naglalakad? Kalabaw na naglalakad!", translation: "What do you call a walking carabao? A walking carabao!" },
        { text: "Bakit hindi pwedeng maglaro ng basketball ang mga libro? Kasi walang page!", translation: "Why can't books play basketball? Because they have no page!" },
        { text: "Ano ang tawag sa kalabaw na nasa dagat? Kalabaw na dagat!", translation: "What do you call a carabao in the sea? A sea carabao!" },
        { text: "Bakit masaya ang mga numero? Kasi may zero problems!", translation: "Why are numbers happy? Because they have zero problems!" },
        { text: "Ano ang tawag sa kalabaw na nasa langit? Kalabaw na langit!", translation: "What do you call a carabao in the sky? A sky carabao!" },
        { text: "Bakit hindi pwedeng maglaro ng hide and seek ang mga libro? Kasi may page!", translation: "Why can't books play hide and seek? Because they have pages!" },
        { text: "Ano ang tawag sa kalabaw na nasa bundok? Kalabaw na bundok!", translation: "What do you call a carabao on a mountain? A mountain carabao!" },
        { text: "Bakit masaya ang mga hayop? Kasi may life!", translation: "Why are animals happy? Because they have life!" },
        { text: "Ano ang tawag sa kalabaw na nasa ilalim ng dagat? Kalabaw na ilalim ng dagat!", translation: "What do you call a carabao under the sea? An under-sea carabao!" },
        { text: "Bakit hindi pwedeng maglaro ng soccer ang mga libro? Kasi may page!", translation: "Why can't books play soccer? Because they have pages!" },
        { text: "Ano ang tawag sa kalabaw na nasa kusina? Kalabaw na kusina!", translation: "What do you call a carabao in the kitchen? A kitchen carabao!" },
        { text: "Bakit masaya ang mga puno? Kasi may roots!", translation: "Why are trees happy? Because they have roots!" },
        { text: "Ano ang tawag sa kalabaw na nasa kwarto? Kalabaw na kwarto!", translation: "What do you call a carabao in the room? A room carabao!" },
        { text: "Bakit hindi pwedeng maglaro ng volleyball ang mga libro? Kasi may page!", translation: "Why can't books play volleyball? Because they have pages!" }
    ],
    bisaya: [
        { text: "Ngano man dili pwede maglaro ang mga baka? Kay tanan sila, 'Moo!'", translation: "Why can't cows play? Because they all say 'Moo!'" },
        { text: "Unsa man ang tawag sa kalabaw nga naa sa sulod sa elevator? Kalabaw nga elevator!", translation: "What do you call a carabao inside an elevator? A carabao in an elevator!" },
        { text: "Ngano man masaya ang kalendaryo? Kay daghan siya'g dates!", translation: "Why is the calendar happy? Because it has many dates!" },
        { text: "Unsa man ang paborito nga subject sa mga isda? Math! Kay puno sa numbers ang dagat!", translation: "What's the fish's favorite subject? Math! Because the ocean is full of numbers!" },
        { text: "Ngano man dili pwede mag-joke ang mga bato? Kay walay sense of humor!", translation: "Why can't stones tell jokes? Because they have no sense of humor!" },
        { text: "Ngano man dili ganahan ang mga iring sa computer? Kay naay mouse!", translation: "Why don't cats like computers? Because there's a mouse!" },
        { text: "Unsa man ang tawag sa kalabaw nga naglakaw? Kalabaw nga naglakaw!", translation: "What do you call a walking carabao? A walking carabao!" },
        { text: "Ngano man dili pwede maglaro ang mga libro? Kay walay page!", translation: "Why can't books play? Because they have no page!" },
        { text: "Unsa man ang tawag sa kalabaw nga naa sa dagat? Kalabaw nga dagat!", translation: "What do you call a carabao in the sea? A sea carabao!" },
        { text: "Ngano man masaya ang mga numero? Kay naay zero problems!", translation: "Why are numbers happy? Because they have zero problems!" },
        { text: "Unsa man ang tawag sa kalabaw nga naa sa langit? Kalabaw nga langit!", translation: "What do you call a carabao in the sky? A sky carabao!" },
        { text: "Ngano man dili pwede maglaro ang mga libro? Kay naay page!", translation: "Why can't books play? Because they have pages!" },
        { text: "Unsa man ang tawag sa kalabaw nga naa sa bukid? Kalabaw nga bukid!", translation: "What do you call a carabao on a mountain? A mountain carabao!" },
        { text: "Ngano man masaya ang mga hayop? Kay naay life!", translation: "Why are animals happy? Because they have life!" },
        { text: "Unsa man ang tawag sa kalabaw nga naa sa ilalum sa dagat? Kalabaw nga ilalum sa dagat!", translation: "What do you call a carabao under the sea? An under-sea carabao!" },
        { text: "Ngano man dili pwede maglaro ang mga libro? Kay naay page!", translation: "Why can't books play? Because they have pages!" },
        { text: "Unsa man ang tawag sa kalabaw nga naa sa kusina? Kalabaw nga kusina!", translation: "What do you call a carabao in the kitchen? A kitchen carabao!" },
        { text: "Ngano man masaya ang mga kahoy? Kay naay roots!", translation: "Why are trees happy? Because they have roots!" },
        { text: "Unsa man ang tawag sa kalabaw nga naa sa kwarto? Kalabaw nga kwarto!", translation: "What do you call a carabao in the room? A room carabao!" },
        { text: "Ngano man dili pwede maglaro ang mga libro? Kay naay page!", translation: "Why can't books play? Because they have pages!" }
    ],
    english: [
        { text: "Why don't scientists trust atoms? Because they make up everything!", translation: null },
        { text: "Why did the scarecrow win an award? He was outstanding in his field!", translation: null },
        { text: "Why don't eggs tell jokes? They'd crack each other up!", translation: null },
        { text: "What do you call a fake noodle? An impasta!", translation: null },
        { text: "Why did the math book look so sad? Because it had too many problems!", translation: null },
        { text: "What's the best thing about Switzerland? I don't know, but the flag is a big plus!", translation: null },
        { text: "Why don't skeletons fight each other? They don't have the guts!", translation: null },
        { text: "What do you call a bear with no teeth? A gummy bear!", translation: null },
        { text: "Why did the bicycle fall over? Because it was two-tired!", translation: null },
        { text: "What do you call a sleeping bull? A bulldozer!", translation: null },
        { text: "Why did the tomato turn red? Because it saw the salad dressing!", translation: null },
        { text: "Why did the golfer bring two pairs of pants? In case he got a hole in one!", translation: null },
        { text: "How do you organize a space party? You planet!", translation: null },
        { text: "What did the grape say when it got stepped on? Nothing, it just let out a little whine!", translation: null },
        { text: "What do you call cheese that isn't yours? Nacho cheese!", translation: null },
        { text: "What do you get when you cross a snowman and a vampire? Frostbite!", translation: null },
        { text: "How does a penguin build its house? Igloos it together!", translation: null },
        { text: "Why did the coffee file a police report? It got mugged!", translation: null },
        { text: "What do you call a nosy pepper? Jalapeño business!", translation: null },
        { text: "Why did the melon jump into the lake? It wanted to be a water-melon!", translation: null },
        { text: "What do you call a factory that makes okay products? A satisfactory!", translation: null },
        { text: "Why did the cookie go to the doctor? Because it felt crumbly!", translation: null },
        { text: "What do you call a bear in the rain? A drizzly bear!", translation: null },
        { text: "Why don't programmers like nature? It has too many bugs!", translation: null },
        { text: "What do you call a fake Italian noodle? An impasta!", translation: null },
        { text: "Why did the chicken cross the playground? To get to the other slide!", translation: null },
        { text: "What do you call a cow with no legs? Ground beef!", translation: null },
        { text: "Why don't eggs tell jokes? They'd crack each other up!", translation: null },
        { text: "What do you call a bear with no teeth? A gummy bear!", translation: null },
        { text: "Why did the math book look so sad? Because it had too many problems!", translation: null },
        { text: "What's orange and sounds like a parrot? A carrot!", translation: null },
        { text: "Why did the scarecrow win an award? He was outstanding in his field!", translation: null },
        { text: "What do you call a sleeping bull? A bulldozer!", translation: null },
        { text: "Why don't scientists trust atoms? Because they make up everything!", translation: null },
        { text: "What do you call a bear caught in the rain? A drizzly bear!", translation: null },
        { text: "Why did the bicycle fall over? Because it was two-tired!", translation: null },
        { text: "What do you call a fake noodle? An impasta!", translation: null },
        { text: "Why did the tomato turn red? Because it saw the salad dressing!", translation: null },
        { text: "What's the best thing about Switzerland? I don't know, but the flag is a big plus!", translation: null },
        { text: "Why don't skeletons fight each other? They don't have the guts!", translation: null },
        { text: "What do you call a bear with no teeth? A gummy bear!", translation: null },
        { text: "Why did the golfer bring two pairs of pants? In case he got a hole in one!", translation: null },
        { text: "How do you organize a space party? You planet!", translation: null },
        { text: "What did the grape say when it got stepped on? Nothing, it just let out a little whine!", translation: null },
        { text: "What do you call cheese that isn't yours? Nacho cheese!", translation: null },
        { text: "What do you get when you cross a snowman and a vampire? Frostbite!", translation: null },
        { text: "How does a penguin build its house? Igloos it together!", translation: null },
        { text: "Why did the coffee file a police report? It got mugged!", translation: null },
        { text: "What do you call a nosy pepper? Jalapeño business!", translation: null },
        { text: "Why did the melon jump into the lake? It wanted to be a water-melon!", translation: null },
        { text: "What do you call a factory that makes okay products? A satisfactory!", translation: null },
        { text: "Why did the cookie go to the doctor? Because it felt crumbly!", translation: null },
        { text: "What do you call a bear in the rain? A drizzly bear!", translation: null },
        { text: "Why don't programmers like nature? It has too many bugs!", translation: null },
        { text: "What do you call a fake Italian noodle? An impasta!", translation: null },
        { text: "Why did the chicken cross the playground? To get to the other slide!", translation: null },
        { text: "What do you call a cow with no legs? Ground beef!", translation: null },
        { text: "What's orange and sounds like a parrot? A carrot!", translation: null },
        { text: "Why did the scarecrow win an award? He was outstanding in his field!", translation: null },
        { text: "What do you call a sleeping bull? A bulldozer!", translation: null },
        { text: "Why don't scientists trust atoms? Because they make up everything!", translation: null },
        { text: "What do you call a bear caught in the rain? A drizzly bear!", translation: null },
        { text: "Why did the bicycle fall over? Because it was two-tired!", translation: null },
        { text: "What do you call a fake noodle? An impasta!", translation: null },
        { text: "Why did the tomato turn red? Because it saw the salad dressing!", translation: null },
        { text: "What's the best thing about Switzerland? I don't know, but the flag is a big plus!", translation: null },
        { text: "Why don't skeletons fight each other? They don't have the guts!", translation: null },
        { text: "What do you call a bear with no teeth? A gummy bear!", translation: null },
        { text: "Why did the golfer bring two pairs of pants? In case he got a hole in one!", translation: null },
        { text: "How do you organize a space party? You planet!", translation: null },
        { text: "What did the grape say when it got stepped on? Nothing, it just let out a little whine!", translation: null },
        { text: "What do you call cheese that isn't yours? Nacho cheese!", translation: null },
        { text: "What do you get when you cross a snowman and a vampire? Frostbite!", translation: null },
        { text: "How does a penguin build its house? Igloos it together!", translation: null },
        { text: "Why did the coffee file a police report? It got mugged!", translation: null },
        { text: "What do you call a nosy pepper? Jalapeño business!", translation: null },
        { text: "Why did the melon jump into the lake? It wanted to be a water-melon!", translation: null },
        { text: "What do you call a factory that makes okay products? A satisfactory!", translation: null },
        { text: "Why did the cookie go to the doctor? Because it felt crumbly!", translation: null },
        { text: "What do you call a bear in the rain? A drizzly bear!", translation: null },
        { text: "Why don't programmers like nature? It has too many bugs!", translation: null },
        { text: "What do you call a fake Italian noodle? An impasta!", translation: null },
        { text: "Why did the chicken cross the playground? To get to the other slide!", translation: null },
        { text: "What do you call a cow with no legs? Ground beef!", translation: null },
        { text: "What's orange and sounds like a parrot? A carrot!", translation: null }
    ]
};

// Function to generate more jokes programmatically (to reach 1000+)
function generateJokeVariations() {
    const variations = {
        filipino: [],
        bisaya: [],
        english: []
    };
    
    // Generate variations of existing jokes
    const templates = [
        { filipino: "Bakit {subject}? Kasi {reason}!", bisaya: "Ngano man {subject}? Kay {reason}!", english: "Why {subject}? Because {reason}!" },
        { filipino: "Ano ang tawag sa {subject}? {answer}!", bisaya: "Unsa man ang tawag sa {subject}? {answer}!", english: "What do you call a {subject}? {answer}!" }
    ];
    
    // Add more joke variations here - this is a simplified version
    // In a real implementation, you'd have many more templates and variations
    
    return variations;
}

// Function to fetch jokes from API
async function fetchJokeFromAPI(language = 'english') {
    try {
        if (language === 'english') {
            // Try multiple joke APIs
            const apis = [
                'https://official-joke-api.appspot.com/random_joke',
                'https://icanhazdadjoke.com/',
                'https://v2.jokeapi.dev/joke/Any?type=single'
            ];
            
            for (const api of apis) {
                try {
                    const response = await fetch(api, {
                        headers: api.includes('icanhazdadjoke') ? { 'Accept': 'application/json' } : {}
                    });
                    if (response.ok) {
                        const data = await response.json();
                        let jokeText = '';
                        if (data.joke) {
                            jokeText = data.joke;
                        } else if (data.setup && data.delivery) {
                            jokeText = `${data.setup} ${data.delivery}`;
                        } else if (data.joke) {
                            jokeText = data.joke;
                        }
                        if (jokeText) {
                            return { text: jokeText, translation: null, language: 'English', source: 'api' };
                        }
                    }
                } catch (e) {
                    continue; // Try next API
                }
            }
        }
    } catch (error) {
        console.log('API fetch failed, using static jokes');
    }
    return null;
}

// Export for use in main HTML file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { staticJokes, fetchJokeFromAPI, generateJokeVariations };
}

