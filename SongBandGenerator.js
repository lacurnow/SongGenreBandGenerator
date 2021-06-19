// A message generator programme that produces a randomised song title, genre and band name upon being run.

// Arrays to randomise word selection from for each string.
const songTitleWords = [["Eye", "Heart", "Tornado", "Sonic", "Holy", "Dance", "City"], ["", "of"], ["Soul", "Death", "Dreams", "Titan", 
"Mountain"]];
const genreWords = ["Rap", "Rock", "Metal", "Country", "Shoegaze", "Pop", "Electronic"];
const bandNameWords = [["Red", "Angry", "Beach", "Biggy", "Rolling", "The", "Electric", "New", "Mammoth", "Yellow", "Ancient", "Alien", "King"], 
["Tigers", "Wizards", "Mammoths", "House", "Fangs", "Reapers", "Boys", "Sniffers", "Moon", "Sabbathi", "Mustangs", "Gang"]];

const songBandGenerator = () => {
    // Returns a pseudo-random index of input array.
    const randomArrayNum = (array) => { 
        return Math.floor(Math.random() * array.length);
    };
    // Produces one random word for each word variable and returns the random string.
    const wordGenerator = (array) => {
        let wordSelection = "";

        if(Array.isArray(array[0])) {
            for (let i = 0; i < array.length; i++) {
                const randomWord = array[i][randomArrayNum(array[i])];
                wordSelection = wordSelection.concat(' ', randomWord);
            };
        } else {
            const randomWord = array[randomArrayNum(array)];
            wordSelection = wordSelection.concat(randomWord);
        };
        return wordSelection;
    };

    const songName = wordGenerator(songTitleWords);
    const genreName = wordGenerator(genreWords);
    const bandName = wordGenerator(bandNameWords);

    console.log(`Your song name is... ${songName}`);
    console.log(`The genre is... ${genreName}`);
    console.log(`Your band name is... ${bandName}`);

};

songBandGenerator();