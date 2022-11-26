// create landing section
function landing(){
    fetch("../../json/pwnedItems.json")
    .then(res=>res.json())
    .then(data=>{
        for(let i=0;i<4;i++){
            document.querySelector(".landing .row").innerHTML+=`
            <div class="col-sm-12 col-md-6 col-lg-3">
            <span class="text-white d-block fw-bold fs-4">${data[i]["number"].toLocaleString()}</span>
            <i class="fs-3 my-2 fa-solid fa-file"></i>
            <p>${data[i]["item"]}</p>
            </div>`
        };
    });
};
landing();