// create team section
function team(){
    fetch("../json/teams.json")
    .then(res=>res.json())
    .then(data=>{
        for(let i=0;i<Object.keys(data).length;i++){
            document.querySelector(".teams .container").innerHTML+=`
            <div class="team overflow-hidden pb-5">
                <h2 class="main-head mx-auto fw-bold mb-5 position-relative">${Object.keys(data)[i]}</h2>
                <div class="row justify-content-center"></div>
            </div>`;
            for(let x=0;x<data[Object.keys(data)[i]].length;x++){
                document.querySelectorAll(".teams .team .row")[i].innerHTML+=`
                    <div class="col-lg-3 col-md-4 col-sm-5">
                        <div class="card w-100 mb-4 mx-auto" style="width: 18rem;">
                            <img class="m-3 mb-0 rounded-1" src=${data[Object.keys(data)[i]][x]["img"]} class="card-img-top" alt="">
                            <div class="card-body">
                                <h5 class="card-title fw-bold">${data[Object.keys(data)[i]][x]["name"]}</h5>
                                <p class="card-text text-black-50 mb-4">${data[Object.keys(data)[i]][x]["job-title"]}</p>
                                <div class="icons">
                                <a href=${"mailto:"+data[Object.keys(data)[i]][x]["mail"]} target="_blank"><i class="fa-solid fa-envelope rounded-circle p-2 text-light"></i></a>
                                <a href=${data[Object.keys(data)[i]][x]["git"]} target="_blank"><i class="fa-solid fa-code-branch rounded-circle p-2 text-light mx-3"></i></a>
                                <a href=${data[Object.keys(data)[i]][x]["linkedin"]} target="_blank"><i class="fa-brands fa-linkedin-in rounded-circle p-2 text-light"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>`
            }
        };
    });
};
team();

// bullets
function bullets(){
    let bullets = document.querySelectorAll(".bullets div");
    let sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", ()=>{
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = (current.getBoundingClientRect().top + window.pageYOffset) - 50;
            bullets.forEach(bull=>{
                if (
                    scrollY > sectionTop &&
                    scrollY <= sectionTop + sectionHeight 
                ){
                    if(bull.dataset.move=="#"+current.getAttribute("id")){
                        bull.style.backgroundColor="var(--main-color)";
                    }else{
                        bull.style.backgroundColor="transparent";
                    }
                }
            })
            });
    });
    bullets.forEach((bullet)=>{
        bullet.addEventListener("click",(e)=>{
            document.querySelector(e.target.dataset.move).scrollIntoView({behavior:'smooth'});
        });
    });
}
bullets();