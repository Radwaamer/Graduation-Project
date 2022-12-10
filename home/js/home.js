// create landing section
function landing(){
    fetch("../json/pwnedItems.json")
    .then(res=>res.json())
    .then(data=>{
        for(let i=0;i<4;i++){
            document.querySelector(".landing .row").innerHTML+=`
            <div class="col-sm-12 col-md-6 col-lg-3 mb-4">
            <span class="text-white d-block fw-bold fs-4">${data["pwnedItems"][i]["number"].toLocaleString()}</span>
            <i class="fs-3 my-2 fa-solid fa-file"></i>
            <p>${data["pwnedItems"][i]["item"]}</p>
            </div>`
        };
    });
};
landing();

// show solution in questions
function solution(){
    document.querySelectorAll(".questions .arrow").forEach(arrow=>{
        arrow.onclick=()=>{
            arrow.parentElement.parentElement.querySelector(".solution").classList.toggle("d-none");
            if(!(arrow.parentElement.parentElement.querySelector(".solution").classList.contains("d-none"))){
                let inv=setInterval(()=>{
                    arrow.parentElement.parentElement.querySelector(".solution").style.opacity=1;
                    arrow.parentElement.parentElement.querySelector(".solution").style.bottom=0;
                    clearInterval(inv);
                },100);
            }else{
                arrow.parentElement.parentElement.querySelector(".solution.d-none").style.opacity=0;
                arrow.parentElement.parentElement.querySelector(".solution.d-none").style.bottom="-177px";
            }
        };
        
    });
};
solution();