let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person')

const quotes = [
    {
        quote: 'the best way to find yourself is to lose yourself '
        , person: 'Mahatma Gandhi'
    },
    {
        quote: 'Goal is a happy life'
        , person: 'Albert Ensitein'
    },
    {
        quote: ' I do the very best I know how - the very best I can'
        , person: 'Abraham Lincoln'
    }
]


btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})