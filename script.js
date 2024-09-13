fetch("data.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#main");
   let out = "";
   for(let data of products){
      out += `
        <img src="${data.img}" alt="${data.name}">
        <h1>${data.name}</h1>
        <p class="d">${data.date}</p>
        <p class="ds">${data.description}</p>
      `;
   }
 
   placeholder.innerHTML = out;
});