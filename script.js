console.log("Inspirational Message Generator");
const quotes = [
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    }
]

const randomIndex = Math.floor(Math.random() * quotes.length);

const selectedQuote = quotes[randomIndex]

const greetings = ["Keep going", "You've got this", "You're a star", "You're killing it" ]
const randomGreetingIndex = Math.floor(Math.random() * greetings.length);
const selectedGreeting = greetings [randomGreetingIndex];

const userName = "Victoria";
console.log(`${selectedGreeting}, ${userName}!`);
console.log(`"${selectedQuote.quote}"`);
console.log(`- ${selectedQuote.author}`);