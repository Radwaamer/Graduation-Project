// show password
function eyeIcon(){
    document.querySelectorAll(".eye-slash").forEach(eye=>{
        eye.addEventListener("click",()=>{
            eye.nextElementSibling.classList.remove("d-none");
            eye.classList.add("d-none");
            eye.previousElementSibling.type="text"
        });
    });
    document.querySelectorAll(".eye").forEach(eye=>{
        eye.addEventListener("click",()=>{
            eye.previousElementSibling.classList.remove("d-none");
            eye.classList.add("d-none");
            eye.previousElementSibling.previousElementSibling.type="password"
        });
    });
};
eyeIcon();

// password length
function passLength(){
    let inputProgress=document.querySelector(".progress input");
    let progress=document.querySelector(".progress span");
    let progressNumber=document.querySelector(".progress p");
    inputProgress.oninput=()=>{
        progressNumber.innerHTML=35-inputProgress.value.length;
        progress.style.width=(inputProgress.value.length/35)*100+"%";
    }
}

// repeat password
function repeatPass(){
    let confirmMsg=document.querySelector(".resetPass .card .card-body form .pass-miss");
    let confirmPass=document.getElementById("re-pass-reset");
    let pass=document.getElementById("pass-reset");
    confirmPass.onblur=()=>{
        if (confirmPass.value!=pass.value){
            confirmMsg.style.opacity="1";
        }else{
            confirmMsg.style.opacity="0";
        };
    };
    confirmPass.oninput=()=>{
        if(confirmPass.value==pass.value){
            confirmMsg.style.opacity="0";
        }else{
            confirmMsg.style.opacity="1";
        }
    };
    pass.oninput=()=>{
        if(confirmPass.value!=pass.value && confirmPass.value!=""){
            confirmMsg.style.opacity="1";
        }else{
            confirmMsg.style.opacity="0";
        }
    };
};
repeatPass();