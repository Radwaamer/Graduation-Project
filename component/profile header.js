//view profile icon
document.querySelector("header nav .profile").addEventListener("click",()=>{
    document.querySelector("header .info").classList.toggle("active");
});

//request login info
function req(){
    let xmlReq=new XMLHttpRequest();
    xmlReq.open("GET","../json/login.json");
    xmlReq.send();
    return xmlReq;
}
//get login info for profile
function getInfo(){
    let xmlReq=req();
    xmlReq.onreadystatechange=function(){
        if(this.status==200 && this.readyState==4){
            let login= JSON.parse(this.responseText);
            let info=document.querySelector("header .info");
            info.innerHTML=
            `<img class="rounded-circle position-absolute start-50 translate-middle-x" src="${login.img}" alt="${login.username}">
            <p class="user fw-bold black-color mt-3 mb-4">${login.username}</p>
            <button class="btn border-0 main-btn w-100 text-white py-2 d-flex align-items-center justify-content-center gap-2">
                <i class="fs-5 fa-regular fa-circle-user"></i>
                <p>View Profile</p>
            </button>
            <button class="btn border-0 main-btn w-100 text-white py-2 mt-3 d-flex align-items-center justify-content-center gap-2">
                <i class="fs-5 fa-solid fa-arrow-right-from-bracket"></i>
                <p>Log Out</p>
            </button>`
        }
    }
}
getInfo();