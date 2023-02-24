// create header section
function createHeader(){
    let headerText=`<nav class="navbar navbar-expand-lg py-0">
    <div class="container">
        <a class="navbar-brand overflow-hidden py-3" href="../home/home.html"><img src="../files/imgs/logo.png" alt="Secure Labs"></a>
        <div class="sign d-flex d-lg-none gap-2 me-4 ms-auto justify-content-end">
            <button class="btn sign-in-btn bg-white px-4 fw-semibold">Sign In</button>
            <button class="btn sign-up-btn bg-white px-4 fw-semibold">Sign Up</button>
        </div>
        <button class="navbar-toggler border-white px-3 py-2" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
            <i class="fa-solid fa-bars text-white fs-5"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto me-auto mb-1 mb-lg-0 fw-bold border-bottom gap-lg-5 py-lg-2">
                <li class="nav-item">
                    <a class="nav-link text-white rounded-2" href="../home/home.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white rounded-2" href="../labs/labs.html">Labs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white rounded-2" href="../contact us/contact.html">Contact Us</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-white rounded-2" href="cmklmlkd" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        About Us
                    </a>
                    <ul class="dropdown-menu text-capitalize bg-white">
                        <li class="mb-1"><a class="dropdown-item nav-link black-color" href="../about us/about.html">Who we are</a></li>
                        <li class="mb-1"><a class="dropdown-item nav-link black-color" href="../about us/mission.html">our mission</a></li>
                        <li class="mb-1"><a class="dropdown-item nav-link black-color" href="../about us/team.html">team</a></li>
                        <li class="mb-1"><a class="dropdown-item nav-link black-color" href="../about us/privacy.html">privacy</a></li>
                        <li class="mb-1"><a class="dropdown-item nav-link black-color" href="../about us/terms.html">terms</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white rounded-2" href="../faq/faq.html">FAQ</a>
                </li>
            </ul>
        </div>
        <div class="sign d-none d-lg-flex gap-2 ms-4 justify-content-end">
            <button class="btn sign-in-btn bg-white px-4 fw-semibold">Sign In</button>
            <button class="btn sign-up-btn bg-white px-4 fw-semibold">Sign Up</button>
        </div>
        <div class="profile ms-3" role="button">
            <img class="rounded-circle" src="../files/imgs/profile.png" alt="name">
            <div class="info position-absolute text-center rounded-4 text-capitalize p-4 white-color"></div>
        </div>
    </div>
</nav>`
    let header=document.createElement("header");
    header.innerHTML=headerText;
    document.body.prepend(header);
};
createHeader();

// active page style
document.querySelectorAll("nav .nav-item .nav-link").forEach((a)=>{
    if(a.href.includes(window.location.pathname)){
        a.classList.add("active");
    }
})