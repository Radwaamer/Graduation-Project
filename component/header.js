// create header section
function createHeader(){
    let headerText=`<nav class="navbar navbar-expand-lg border-bottom border-secondary">
    <div class="container">
        <a class="navbar-brand overflow-hidden" href="../home/home.html"><img src="../files/imgs/logo.png" alt="Secure Labs"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
                <li class="nav-item">
                    <a class="nav-link" href="../home/home.html">Home</a>
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
                <button class="btn sign-in-btn bg-white px-4 fw-semibold">Sign In</button>
                <button class="btn sign-up-btn bg-white px-4 fw-semibold">Sign Up</button>
            </div>
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