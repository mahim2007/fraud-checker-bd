const API_URL = "https://opensheet.elk.sh/1Wl9Q8PckiGl8RhTqDWfiD9KqvlGFMLY4umx9qPKVeoY/Sheet1";

fetch(API_URL)
.then(res => res.json())
.then(data => {

const list = document.getElementById("fraudList")

function showFraud(items){

list.innerHTML=""

items.reverse().forEach(f => {

list.innerHTML += `

<div class="col-md-4"><div class="card p-3 h-100"><img src="${f.photo}" class="img-fluid mb-2"><h5>${f.name}</h5><p><b>Phone:</b> ${f.phone}</p><p>${f.reason}</p><p><small>Reported by ${f.reporter}</small></p><p><small>${f.time}</small></p></div></div>`

})

}

showFraud(data)

document.getElementById("search").addEventListener("keyup",e=>{

let value = e.target.value.toLowerCase()

let filtered = data.filter(f =>

(f.name && f.name.toLowerCase().includes(value)) ||

(f.phone && f.phone.includes(value))

)

showFraud(filtered)

})

})