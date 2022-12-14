// create footer
function createFooter(){
    let footerText=`
    <div class="layout position-absolute top-0"></div>
    <div class="container pt-5 position-relative">
        <div class="row">
            <div class="col-md-6">
                <ul class="links text-white">
                    <li class="mb-3"><a class="text-white fw-bold support" href="mailto:rororado44@gmail.com"><span class="fs-5">Support</span> @ secure labs .com</a></li>
                    <li class="mb-1"><a class="text-white d-block w-75" href="#">Privacy</a></li>
                    <li class="mb-1"><a class="text-white d-block w-75" href="#">Terms</a></li>
                    <li class="mb-1"><a class="text-white d-block w-75" href="#">Team</a></li>
                    <li class="mb-1"><a class="text-white d-block w-75" href="../about us/about.html">About</a></li>
                    <li class="mb-1"><a class="text-white d-block w-75" href="../contact us/contact.html">Contact</a></li>
                </ul>
            </div>
            <div class="col-md-6 d-flex justify-content-center align-items-center flex-column">
                <div class="icons mb-3 mt-4">
                    <a href="#"><i class="fa-brands fa-twitter text-white fs-4 me-3"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin-in text-white fs-4"></i></a>
                </div>
                <p class="text-white-50">© 2022 secure labs </p>
            </div>
        </div>
    </div>`;
    let footer=document.createElement("footer");
    footer.className="py-5 position-relative overflow-hidden"
    footer.innerHTML=footerText;
    document.body.appendChild(footer);
}
createFooter();