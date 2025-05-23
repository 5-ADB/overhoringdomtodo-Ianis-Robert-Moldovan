const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const toevoegenBtn = document.getElementById("toevoegenBtn")

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim();
  const gekozenwinkel = winkelSelectBox.value
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = `${text} (${gekozenwinkel})`;
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    list.appendChild(li);
    input.value = "";
  } 
});
 
// 1) reeds aantal taken die niet afgewerkt zijn

const winkelenFruit = document.createElement("li")
const lerenFrans = document.createElement("li")
const fitnessGaan = document.createElement("li")

winkelenFruit.textContent = "Winkelen voor Fruit"
lerenFrans.textContent = "Leren voor toets frans"
fitnessGaan.textContent = "Naar de fitness gaan"

winkelenFruit.addEventListener("click", function () {
  winkelenFruit.classList.toggle("completed")
})

lerenFrans.classList.toggle("completed")

fitnessGaan.classList.toggle("completed")

list.appendChild(winkelenFruit)
list.appendChild(lerenFrans)
list.appendChild(fitnessGaan)

// 2) dropdown met winkels

const winkels = [
  { 
    id: 1,
    naam: "Lidl"
  }, 
  { 
    id: 2,
    naam: "Aldi"
  },
  { 
    id: 3,
    naam: "Alberthijn"
  },
  { 
    id: 4,
    naam: "Carrefour"
  },
  { 
    id: 5,
    naam: "geen winkel"
  }
]

const winkelSelectBox = document.createElement("select")
winkelSelectBox.id = "winkelLijst"

winkels.forEach((winkel) => {
  const optieWinkel = document.createElement("option")
  optieWinkel.innerHTML = winkel.naam
  optieWinkel.value = winkel.id
  winkelSelectBox.appendChild(optieWinkel)
})
form.appendChild(winkelSelectBox)
