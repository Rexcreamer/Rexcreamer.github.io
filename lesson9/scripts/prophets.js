const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

function displayProphets(prophet) { 
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    let p1 = document.createElement('p');
    p1.textContent = `Date of Birth: ${prophet.birthdate}`;
    let p2 = document.createElement('p');
    p2.textContent = `Place of Birth: ${prophet.birthplace}`;
    let img = document.createElement('img');
    img.setAttribute("src", prophet.imageurl);
    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(img);
    document.querySelector('div.cards').appendChild(card);
  }

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    let prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });