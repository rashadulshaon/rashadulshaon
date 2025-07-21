<template>
  <header id="main-nav" class="navbar navbar-expand-lg sticky-top main-header">
    <div class="container">
      <div class="row w-100">
        <div class="col-md-6 col-lg-4 d-none d-md-block">
          <a href="mailto:codershaon@gmail.com" class="btn border-0 ps-0"><i
              class="ri-mail-line me-2 rounded-circle p-2 border bg-white"></i>contact@rashadul.com</a>
        </div>
        <div class="col-lg-4 d-none d-lg-block text-center">
          <div class="nav-menu">
            <a href="#home" class="btn btn-sm active border-0 px-0 mx-2">Home</a>
            <a href="#projects" class="btn btn-sm border-0 px-0 mx-2">Projects</a>
            <a href="#career" class="btn btn-sm border-0 px-0 mx-2">Career</a>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 text-center text-md-end">
          <a download href="/Rashadul_Shaon_CV.pdf" class="btn border-0 pe-0"><i
              class="ri-download-2-line me-2 rounded-circle p-2 border bg-white"></i>Download CV</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.navbar {
  background-color: #ffffffbd;
  backdrop-filter: blur(20px);
}

.nav-menu {
  .active {
    border-bottom: 2px solid #0070f3 !important;
  }
}
</style>
