// create landing section
function landing(){
    const pwned ={
        "pwnedItems":[
            {
                "id":1,
                "number":632,
                "icon":"<i class='fs-3 my-3 fa-solid fa-window-restore'></i>",
                "item":"pwned websites"
            },
            {
                "id":2,
                "number":11991408974,
                "icon":"<i class='fs-3 my-3 fa-solid fa-file-invoice'></i>",
                "item":"pwned accounts"
            },
            {
                "id":3,
                "number":115522,
                "icon":"<i class='fs-3 my-3 fa-solid fa-paste'></i>",
                "item":"pastes"
            },
            {
                "id":4,
                "number":223531362,
                "icon":"<i class='fs-3 my-3 fa-solid fa-clipboard'></i>",
                "item":"paste accounts"
            }
        ]
    }
    for(let i=0;i<4;i++){
        document.querySelector(".landing .row").innerHTML+=`
        <div class="col-6 col-md-3 mb-4">
        <span class="text-white d-block fw-bold fs-4">${pwned["pwnedItems"][i]["number"].toLocaleString()}</span>
        ${pwned["pwnedItems"][i]["icon"]}
        <p>${pwned["pwnedItems"][i]["item"]}</p>
        </div>`
    };
};
landing();

// increase number of statics
function increase(){
    let i=11936681242;
    setInterval(function(){
        document.querySelectorAll(".landing .row span")[1].innerHTML=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        i++;
    },1500);
    let x=223169978;
    setInterval(function(){
        document.querySelectorAll(".landing .row span")[3].innerHTML=x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        x++;
    },1000)
    if(i=11936681242+999){
        i=11936681242;
    };
    if(x=223169978+999){
        x=223169978;
    };
};
increase();