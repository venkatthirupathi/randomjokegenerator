const jokegenerator = document.getElementById("jokegenerator");
const btn = document.getElementById("btn");
const url = "https://api.quotable.io/random";

let getjoke = () => {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            jokegenerator.textContent = `${item.content}`; 
        })
        .catch((error) => console.error("Error fetching joke:", error)); 
};


btn.addEventListener("click", getjoke);

getjoke();
