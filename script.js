const Joke= document.getElementById('joke');
const jokebtn= document.getElementById('btn');

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = ()=>{
    Joke.classList.remove("fade");
    fetch(url).then(data => data.json()).then(item =>{
        Joke.textContent= `${item.joke}`;
        Joke.classList.add("fade");
    })

}
jokebtn.addEventListener("click",getJoke);
getJoke();