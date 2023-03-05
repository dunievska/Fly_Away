fetch("https://raw.githubusercontent.com/dunievska/Fly_Away/main/api/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.destinations);
  });

const x = 9;
