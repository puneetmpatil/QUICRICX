const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',               // Enter your api key
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
};

fetch('https://cricbuzz-cricket.p.rapidapi.com/news/v1/index', options)
    .then(response => response.json())
    .then(response => {

        for (let i = 0; i < response["storyList"].length; i++) {
            if (response["storyList"][i].hasOwnProperty("story")) {

                const title = document.createElement('h3');
                title.classList.add('news-title');
                title.innerText = response["storyList"][i]["story"]["hline"]

                const intro = document.createElement('p');
                intro.classList.add('news-intro');
                intro.innerText = response["storyList"][i]["story"]["intro"]

                const newsBody = document.createElement('div');
                newsBody.classList.add("news-body");
                newsBody.appendChild(title);
                newsBody.appendChild(intro);

                const news = document.getElementsByClassName('news')[0];
                news.appendChild(newsBody);
            }
        }

    })
    .catch(err => console.error(err));
