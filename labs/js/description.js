
const listEl = document.getElementById("card1");


fetch("https://jsonplaceholder.typicode.com/users")

.then( res => res.json())

.then(data => {
  data.forEach ( post => {
    listEl.insertAdjacentHTML("beforeend",  `  <div class="card card-body" id="card">
                   
    ${post.id}-${post.name}  </div>  `)
  });

});


const listE = document.getElementById("card2");

fetch("https://jsonplaceholder.typicode.com/users")
.then( res => res.json())

.then(data => {
  data.forEach ( post => {
    listE.insertAdjacentHTML("beforeend",  `  <div class="card card-body" id="card">
                   
          ${post.id}-${post.name}  </div> `)
  });

});


const list = document.getElementById("card3");

fetch("https://jsonplaceholder.typicode.com/users")
.then( res => res.json())

.then(data => {
  data.forEach ( post => {
    list.insertAdjacentHTML("beforeend",  `  <div class="card card-body" id="card">
                   
          ${post.id}-${post.name}  </div> `)
  });

});


