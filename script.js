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
    },
       {
        quote: "My mission in life is not merely to survive, but to thrive.",
        author: "Maya Angelou"
    },
    {
        quote: "Nothing is impossible. The word itself says 'I'm possible!'",
        author: "Audrey Hepburn"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },   
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "Andre Gide"
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison"
    }
];

const generateMessage = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    const randomGreetingIndex = Math.floor(Math.random() * greetings.length);
    const selectedGreeting = greetings [randomGreetingIndex];
    console.log(`${selectedGreeting}, ${userName}!
    "${selectedQuote.quote}"
    - ${selectedQuote.author}`);
};


const greetings = ["Keep going", "You've got this", "You're a star", "You're killing it" ]

const userName = "Victoria";

generateMessage();