const getTime = () => {
    let currentTime = new Date();
    currentTime = currentTime.toLocaleTimeString('en-US',{hour12: false, hour: "numeric", minute: "numeric"});

    if(currentTime > '06:00' && currentTime <= '11:00'){
        return [currentTime,'morning'];
    } else if(currentTime > '11:00' && currentTime <= '15:00'){
        return [currentTime,'daytime'];
    } else if(currentTime > '15:00' && currentTime <= '18:00'){
        return [currentTime,'afternoon'];
    } else if(currentTime > '18:00' && currentTime <= '00:00'){
        return [currentTime,'night'];
    } else if(currentTime > '00:00' && currentTime <= '06:00'){
        return [currentTime,'midnight'];
    };
};

const randomNum = num => {
    return Math.floor(Math.random() * num);
};

const suggestionData = {
    coffee: {
        morning: ['cappucino','late','machiato','mocca'],
        daytime: ['cappucino','mocca','americano'],
        afternoon: ['americano','latte'],
        night: ['espresso','americano'],
        midnight: ['espresso'],
    },
    snacks: ['French Fries','Donuts','Peanut Butter-Banana Pancakes','Almond-Maple Energy Bites','Fruit and Nut Coins'],
    coffeeShops: ['Starbucks','Blue Bottle','Four Barrel Coffee','Colectivo Coffee','Tullys Coffee'],
    sentences: [
        "Humans are equal in God's eyes and everyone has the same rights. Like coffee that never chooses who can enjoy it.",
        "When you wake up without a cup of coffee it makes you feel that one of the food chains is missing.",
        "You and coffee are two things in common. They both make me fall in love.",
        "As bitter as coffee, it will be even bitter if you are not there by my side.",
        "Coffee teaches us that life is not always sweet, but also bitter."
    ],
};

let yourSuggest = [];

const startSuggestion = () => {
    const time = getTime();

    yourSuggest.push(`Time: ${time[0]}`)

    for (let prop in suggestionData){
        let index = randomNum(suggestionData[prop].length)

        switch(prop){
            case 'coffee':
                const coffeeIdx = randomNum(suggestionData[prop][time[1]].length);

                yourSuggest.push(`The coffee you need: ${suggestionData[prop][time[1]][coffeeIdx]}`);
                break;
            case 'snacks':
                yourSuggest.push(`The best snack you need: ${suggestionData[prop][index]}`);
                break;
            case 'coffeeShops':
                yourSuggest.push(`The perfect coffee shop for you: ${suggestionData[prop][index]}`);
                break;
            case 'sentences':
                yourSuggest.push(`A quote for you: ${suggestionData[prop][index]}`);
                break;
        }
    }
    
};

const formatter = suggest => {
    const formatted = yourSuggest.join('\n');

    console.log(formatted);
};

startSuggestion();

formatter(yourSuggest);
