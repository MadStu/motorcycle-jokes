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
    }
];

const getJoke = () => {
    const num = Math.floor(Math.random()*jokes.length);
    return jokes[num];
}
