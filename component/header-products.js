let headerProducts=document.querySelector(".header-products");

headerProducts.innerHTML=`<div class="d-flex align-items-center logo-labs position-relative m">
        <div class="landing rounded-4 d-flex align-items-center justify-content-center text-center  ">
                <img src="../../../files/imgs/logo.png" alt="">
            </div>
            <div class="border border-0 border-start ms-2 ps-4">
              <h2  class="text fs-2 fw-semibold border-bottom border-primary text-white "> <span class=" position-absolute "style="
            height: 68px
            top: 4rem;
        " >${headerProducts.classList[0].split("-").join(" ")}  </span> 
        <a href="../${headerProducts.classList[0].split("-").join(" ")} description.html"><br><span class="text2 fs-5 text-white">Back to lab description <small class="fs-6">>>></small> </span>  </a>  </h2>
            </div>
            <div class="position-absolute end-0 w-100" style="background-color: var(--main-color); height: 2px; bottom:-13px"></div>
      </div>`;