// create sign in section
function signInSection(){
    let signInText=`
    <div class="layout w-100 h-100 top-0 position-fixed"></div>
    <div class="card w-50 mx-auto position-fixed top-50 start-50 translate-middle border-0">
        <div class="card-body position-relative">
            <div class="card-layout w-100 h-100 top-0 start-0 position-absolute"></div>
            <div class="exit position-absolute fs-3 fw-bold text-white" role="button">X</div>
            <h5 class="card-title text-uppercase fw-semibold mt-5">Account login :</h5>
            <form action="">
                <input class="w-100 p-2 border-top-0 border-end-0 my-3" type="email" name="email" id="mail-login" placeholder="Enter Your E-mail Or User name" required>
                <div class="position-relative">
                    <input class="p-2 pe-5 w-100 border-top-0 border-end-0 mt-3" type="password" name="password" id="pass-login" placeholder="Enter Your Password" required maxlength="20" minlength="8">
                    <div class="eye-slash position-absolute top-50 translate-middle-y text-white" role="button"><i class="fa-solid fa-eye-slash"></i></div>
                    <div class="eye d-none position-absolute top-50 translate-middle-y text-white" role="button"><i class="fa-solid fa-eye"></i></div>
                </div>
                <div id="passwordHelpBlock" class="form-text mb-4 text-white-50">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
                <div class="d-flex justify-content-between mt-2 mb-4">
                    <div class="remember-me d-flex justify-content-between align-items-center gap-1">
                        <input type="checkbox" name="remeber" id="remeber">
                        <label for="remeber">Remember me for a month</label>
                    </div>
                    <button class="forget btn border-0 text-white-50">forgot password?</button>
                </div>
                <button class="login btn text-white w-100 py-2 fs-5 mt-3 mb-5 fw-semibold" type="submit">Sign In</button>
            </form>
        </div>
    </div>`
    let signInElement=document.createElement("div");
    signInElement.classList=("signIn position-relative d-none");
    signInElement.innerHTML=signInText;
    document.querySelector("header").appendChild(signInElement);
};
signInSection();

// sign in popup
function signIn(){
    document.querySelectorAll("nav .sign-in-btn").forEach(sign=>{
        sign.addEventListener("click",()=>{
            document.querySelector(".signIn").classList.remove("d-none");
        });
    });
    document.querySelector(".signIn .layout").addEventListener("click",()=>{
        document.querySelector(".signIn").classList.add("d-none");
    });
    document.querySelector(".signIn .card .exit").addEventListener("click",()=>{
        document.querySelector(".signIn").classList.add("d-none");
    })
};
signIn();

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