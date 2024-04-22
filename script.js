document.getElementById('fetchButton').addEventListener('click', () => {
    fetchSpaceImage();
    fetchJoke();
});

async function fetchSpaceImage() {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=R3Gidqh3M7PJ1BS7vnr47NRk1uYpgf0CYALbrOKL');
    const data = await response.json();
    const fact = document.getElementById('spaceFact');
    const image = document.createElement('img');
    

    if (data.media_type === 'image') {
        image.src = data.url;
        image.alt = "NASA Astronomy Picture of the Day";
        image.style.maxWidth = "100%";
        image.style.height = "auto";
        fact.textContent = "NASA Space Image: " + data.explanation;
        fact.appendChild(image); 
    } else {
        fact.textContent = "NASA Space Image (no image today): " + data.explanation;
    }
}

async function fetchJoke() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?contains=space');
    const jokeData = await response.json();
    let joke = '';
    if (jokeData.type === 'single') {
        joke = jokeData.joke;
    } else {
        joke = jokeData.setup + " " + jokeData.delivery;
    }
    document.getElementById('spaceJoke').textContent = "Space Joke: " + joke;
}


