const jokes = [
    {
        line1: 'I just got a wooden motorcycle. It has a wooden frame, wooden handle bars, wooden wheels, and a wooden seat. Guess what?',
        line2: 'It wooden start.'
    },
    {
        line1: 'Why cant the motorcycle stand up by itself?',
        line2: 'Because it\'s two tired.'
    },
    {
        line1: 'What was the bicycle that wondered how it was like being a motorcycle called?',
        line2: 'Bike-curious.'
    },
    {
        line1: 'Moses had a motorcycle, it says so in the Bible:',
        line2: '"And lo, the roar of Moses\' Triumph was heard throughout Israel"'
    },
    {
        line1: 'I got a motorcycle for my wife last week.',
        line2: 'Best. Trade. Ever!'
    },
    {
        line1: 'What sound does a witch\'s motorcycle make?',
        line2: 'BROOM, BROOOOOM!'
    },
    {
        line1: 'My girlfriend left me and became a motorcyclist.',
        line2: 'I guess she prefers two strokes to one stroke.'
    },
    {
        line1: 'Who Did Fonzie call when his motorcycle broke down?',
        line2: 'Triple Ayyy!'
    },
    {
        line1: 'What do you get when you mix a motorcycle with a joke?',
        line2: 'A Yamahaha.'
    },
    {
        line1: 'I can\'t think of a time when I lost my toupee while riding a motorcycle.',
        line2: 'At least not right off the top of my head.'
    },
    {
        line1: 'There was a guy who had a motorcycle accident and lost the whole left side of his body.',
        line2: 'He\'s alright now.'
    },
    {
        line1: 'Sean Connery: What\'s the difference between your Mother and a motorcycle?',
        line2: 'When I ride a motorcycle... I wear protection.'
    },
    {
        line1: 'What is Bob Marley called on a motorcycle?',
        line2: 'Bob Harley.'
    },
    {
        line1: 'I lost both arms to a motorcycle accident.',
        line2: 'I think there’s something wrong with my legs too but I just can’t put my finger on it.'
    },
    {
        line1: 'What\'s the difference between a vaccuum and a Harley motorcycle?',
        line2: 'The vaccuum carries its dirt bag on the inside.'
    },
    {
        line1: 'My girlfriend, Ruth, fell off the back of my motorcycle.',
        line2: 'I rode on, ruthlessly.'
    },
    {
        line1: 'What type of motorcycle does Santa ride?',
        line2: 'A Holly Davidson.'
    },
    {
        line1: '“Man... I’ll never be as cool as a bicycle or a motorcycle...”',
        line2: 'He moped.'
    },
    {
        line1: 'When it comes to motorcycle jokes..',
        line2: 'I triumph every time.'
    },
    {
        line1: 'I used to be a motorcycle courier...',
        line2: 'Man those things are heavy..'
    },
    {
        line1: 'How can you tell when someone is a vegan or a motorcycle rider?',
        line2: 'They’ll tell you within the first 5 minutes of talking to them.'
    },
    {
        line1: 'Why did the unvaccinated child buy a motorcycle when he was 3 years old?',
        line2: 'Midlife Crisis.'
    },
    {
        line1: 'A policeman pulled me over on his motorcycle.',
        line2: 'I don\'t know why, I told him I was only borrowing it for 5 minutes.'
    },
    {
        line1: 'My investment banker used all of my money to buy a leather jacket and a motorcycle, and when I asked for it back he told me to \'sit on it\'.',
        line2: 'I think he might be running a Fonzi scheme.'
    },
    {
        line1: 'My doctor thinks I\'m sick.',
        line2: 'I landed a triple flip on my motorcycle with no hands.'
    },
    {
        line1: 'It is now legal to park bovines with foot coverings in motorcycle parking spaces.',
        line2: 'They\'re officially labeled as Cowasockies.'
    },
    {
        line1: 'Why does the motorcycle get sad when shifting gears?',
        line2: 'Because the clutch is depressed.'
    },
    {
        line1: 'What\'s a medical doctor called, who is also part of a motorcycle club?',
        line2: 'A Healths Angel.'
    }
];

const getJoke = () => {
    const num = Math.floor(Math.random()*jokes.length);
    return jokes[num];
}

const displayJoke = () => {
    const joke = getJoke();
    document.getElementById("line1").innerHTML = joke.line1;
    document.getElementById("line2").innerHTML = joke.line2;
}

const changeBg = () => {
    document.querySelector('.click').classList.add('click');
}

const changeBack = () => {
    document.querySelector('.click').classList.add('clicked');
}