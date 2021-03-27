const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images" },
  { name: "Voluptatem", image: "images" },
  { name: "Explicabo", image: "images" },
  { name: "Rchitecto", image: "images" },
  { name: " Beatae", image: "images" },
  { name: " Vitae", image: "images" },
  { name: "Inventore", image: "images" },
  { name: "Veritatis", image: "images" },
  { name: "Accusantium", image: "images" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
