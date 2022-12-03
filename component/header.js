// create header section
function createHeader(){
    let headerText=`<nav class="navbar navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand" href="../home/home.html"><img src="../files/imgs/cyber-security-logo.webp" alt="Secure Labs"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
                <li class="nav-item">
                    <a class="nav-link active" href="../home/home.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../labs/labs.html">Labs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../contact us/contact.html">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../about us/about.html">About Us</a>
                </li>
            </ul>
            <div class="d-flex gap-2 ms-4">
                <button class="btn sign-in-btn bg-white px-4">Sign In</button>
                <button class="btn sign-up-btn bg-white px-4">Sign Up</button>
            </div>
        </div>
    </div>
</nav>`
    let header=document.createElement("header");
    header.innerHTML=headerText;
    document.body.prepend(header);
};
createHeader();

// create sign in section
function signInSection(){
    let signInText=`
    <div class="layout w-100 h-100 top-0 position-fixed"></div>
    <div class="card w-50 mx-auto position-fixed top-50 start-50 translate-middle">
        <div class="card-body position-relative">
            <img class="rounded-circle img-fluid position-absolute start-50 translate-middle-x" src="../files/imgs/cyber-security-logo.webp" alt="">
            <div class="exit position-absolute rounded-circle text-white p-2 px-3 fs-5 fw-bold" role="button">X</div>
            <h5 class="card-title text-uppercase fw-semibold mt-5">Account login :</h5>
            <form action="">
                <input class="w-100 p-2 border-top-0 border-end-0 my-3" type="text" name="email" id="mail-login" placeholder="Enter Your E-mail Or User name">
                <div class="position-relative">
                    <input class="p-2 pe-5 w-100 border-top-0 border-end-0 my-3" type="password" name="password" id="pass-login" placeholder="Enter Your Password">
                    <div class="eye-slash position-absolute top-50 translate-middle-y" role="button"><i class="fa-solid fa-eye-slash"></i></div>
                    <div class="eye d-none position-absolute top-50 translate-middle-y" role="button"><i class="fa-solid fa-eye"></i></div>
                </div>
                <div class="d-flex justify-content-between mt-2 mb-4">
                    <div class="remember-me d-flex justify-content-between align-items-center gap-1">
                        <input type="checkbox" name="remeber" id="remeber">
                        <label for="remeber">Remember me for a month</label>
                    </div>
                    <a href="#" class="forget text-black-50">forgot password?</a>
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

// create sign up section
function signUpSection(){
    let signUpText=`
    <div class="layout w-100 h-100 top-0 position-fixed"></div>
        <div class="card w-50 mx-auto position-fixed top-50 start-50 translate-middle">
            <div class="card-body position-relative">
                <img class="rounded-circle img-fluid position-absolute start-50 translate-middle-x" src="../files/imgs/cyber-security-logo.webp" alt="">
                <div class="exit position-absolute rounded-circle text-white p-2 px-3 fs-5 fw-bold" role="button">X</div>
                <h5 class="card-title text-uppercase fw-semibold mt-5">Create your account :</h5>
                <form action="">
                    <input class="w-100 p-2 border-top-0 border-end-0 my-3" type="text" name="name" id="usename-signup" placeholder="User Name">
                    <input class="w-100 p-2 border-top-0 border-end-0 my-3" type="text" name="email" id="mail-signup" placeholder="E-mail">
                    <div class="position-relative">
                        <input class="p-2 pe-5 w-100 border-top-0 border-end-0 my-3" type="password" name="password" id="pass-signup" placeholder="Password">
                        <div class="eye-slash position-absolute top-50 translate-middle-y" role="button"><i class="fa-solid fa-eye-slash"></i></div>
                        <div class="eye d-none position-absolute top-50 translate-middle-y" role="button"><i class="fa-solid fa-eye"></i></div>
                    </div>
                    <div class="position-relative">
                        <input class="p-2 pe-5 w-100 border-top-0 border-end-0 my-3" type="password" name="re-password" id="re-pass" placeholder="Repeat Password">
                        <div class="eye-slash position-absolute top-50 translate-middle-y" role="button"><i class="fa-solid fa-eye-slash"></i></div>
                        <div class="eye d-none position-absolute top-50 translate-middle-y" role="button"><i class="fa-solid fa-eye"></i></div>
                    </div>
                    <div class="d-flex justify-content-between mt-2 mb-4">
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

// sign in popup
function signIn(){
    document.querySelector("nav .sign-in-btn").addEventListener("click",()=>{
        document.querySelector(".signIn").classList.remove("d-none");
    });
    document.querySelector(".signIn .card .exit").addEventListener("click",()=>{
        document.querySelector(".signIn").classList.add("d-none");
    })
};
signIn();

// sign up popup
function signUp(){
    document.querySelector("nav .sign-up-btn").addEventListener("click",()=>{
        document.querySelector(".signUp").classList.remove("d-none");
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
        });
    });
    document.querySelectorAll(".eye").forEach(eye=>{
        eye.addEventListener("click",()=>{
            eye.previousElementSibling.classList.remove("d-none");
            eye.classList.add("d-none");
        });
    });
};
eyeIcon();