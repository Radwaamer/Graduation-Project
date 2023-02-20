// create landing section
function landing(){
    fetch("../json/pwnedItems.json")
    .then(res=>res.json())
    .then(data=>{
        for(let i=0;i<4;i++){
            document.querySelector(".landing .row").innerHTML+=`
            <div class="col-6 col-md-3 mb-4">
            <span class="text-white d-block fw-bold fs-4">${data["pwnedItems"][i]["number"].toLocaleString()}</span>
            <i class="fs-3 my-2 fa-solid fa-file"></i>
            <p>${data["pwnedItems"][i]["item"]}</p>
            </div>`
        };
    });
};
landing();