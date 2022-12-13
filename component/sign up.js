// create sign up section
function signUpSection(){
    let signUpText=`
    <div class="layout w-100 h-100 top-0 position-fixed"></div>
        <div class="card w-50 mx-auto position-fixed top-50 start-50 translate-middle">
            <div class="card-body position-relative">
                <img class="rounded-circle img-fluid position-absolute start-50 translate-middle-x" src="../files/imgs/logo.png" alt="">
                <div class="exit position-absolute fs-3 fw-bold" role="button">X</div>
                <h5 class="card-title text-uppercase fw-semibold mt-5">Create your account :</h5>
                <form action="">
                    <input class="w-100 p-2 border-top-0 border-end-0 my-3" type="text" name="name" id="username-signup" placeholder="User Name" required>
                    <input class="w-100 p-2 border-top-0 border-end-0 my-3" type="email" name="email" id="mail-signup" placeholder="E-mail" required>
                    <div class="position-relative">
                        <input class="p-2 pe-5 w-100 border-top-0 border-end-0 mt-3" type="password" name="password" id="pass-signup" placeholder="Password" required>
                        <div class="eye-slash position-absolute top-50 translate-middle-y" role="button"><i class="fa-solid fa-eye-slash"></i></div>
                        <div class="eye d-none position-absolute top-50 translate-middle-y" role="button"><i class="fa-solid fa-eye"></i></div>
                    </div>
                    <div id="passwordHelpBlock" class="form-text mb-3">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
                    <div class="position-relative">
                        <input class="p-2 pe-5 w-100 border-top-0 border-end-0 mt-2" type="password" name="re-password" id="re-pass" placeholder="Repeat Password" required>
                        <div class="eye-slash position-absolute top-50 translate-middle-y" role="button"><i class="fa-solid fa-eye-slash"></i></div>
                        <div class="eye d-none position-absolute top-50 translate-middle-y" role="button"><i class="fa-solid fa-eye"></i></div>
                    </div>
                    <div class="pass-miss text-danger mb-3 mt-1">
                        * password mismatch
                    </div>
                    <div class="d-flex justify-content-between align-items-center mt-2 mb-4">
                        <div class="terms-of-use d-flex justify-content-between align-items-center gap-1">
                            <input type="checkbox" name="terms" id="accept">
                            <label for="accept">I accept the <a href="#">terms of use</a></label>
                        </div>
                        <span role="button" class="have-acc text-black-50">already have an account?</span>
                    </div>
                    <button class="reg btn text-white w-100 py-2 fs-5 mt-3 mb-5 fw-semibold" type="submit">Sign Up</button>
                </form>
            </div>
        </div>`
    let signUpElement=document.createElement("div");
    signUpElement.classList=("signUp position-relative d-none");
    signUpElement.innerHTML=signUpText;
    document.querySelector("header").appendChild(signUpElement);
};
signUpSection();

// sign up popup
function signUp(){
    document.querySelector("nav .sign-up-btn").addEventListener("click",()=>{
        document.querySelector(".signUp").classList.remove("d-none");
    });
    document.querySelector(".signUp .layout").addEventListener("click",()=>{
        document.querySelector(".signUp").classList.add("d-none");
    });
    document.querySelector(".signUp .card .exit").addEventListener("click",()=>{
        document.querySelector(".signUp").classList.add("d-none");
    });
    // already have an account
    document.querySelector(".signUp .card .card-body form .have-acc").addEventListener("click",()=>{
        document.querySelector(".signUp").classList.add("d-none");
        document.querySelector(".signIn").classList.remove("d-none");
    })
};
signUp();

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

// repeat password
function repeatPassword(){
    let confirmMsg=document.querySelector(".signUp .card .card-body form .pass-miss");
    let confirmPass=document.getElementById("re-pass");
    let pass=document.getElementById("pass-signup");
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
repeatPassword();

// show sign up button after accepted terms of use
function showSignUpButton(){
    document.querySelector(".signUp .card .card-body form #accept").onclick=()=>{
        if(document.querySelector(".signUp .card .card-body form #accept").checked){
            document.querySelector(".signUp .card .card-body form .reg").style.opacity=1;
            document.querySelector(".signUp .card .card-body form .reg").style.cursor="pointer";
        }else{
            document.querySelector(".signUp .card .card-body form .reg").style.opacity=0.5;
            document.querySelector(".signUp .card .card-body form .reg").style.cursor="default";
        }
    }
};
showSignUpButton();