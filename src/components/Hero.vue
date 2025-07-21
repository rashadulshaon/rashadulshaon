<template>
  <section class="mx-4 rounded-4 bg-secondary theme-border">
    <section class="container">
      <div class="hero row align-items-center">
        <div class="col-md-6">
          <h4 class="fw-normal text-muted">Hi, this is <span class="text-primary">Rashadul Shaon</span> 👋</h4>
          <p class="display-6">Expert in Process Automation <br> & SaaS Development</p>
          <p class="text-muted mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita aperiam odit
            nemo,
            aspernatur ab harum ipsa recusandae officiis.</p>

          <!-- Stats -->
          <div class="row col-lg-10 mb-5">
            <div class="col-4">
              <strong class="d-block fs-5">20+</strong>
              <small class="d-block">Completed Projects</small>
            </div>

            <div class="col-4">
              <strong class="d-block fs-5">10+</strong>
              <small class="d-block">Happy Clients</small>
            </div>

            <div class="col-4">
              <strong class="d-block fs-5">5+</strong>
              <small class="d-block">Years of Experience</small>
            </div>
          </div>

          <a href="#contact" class="btn btn-dark rounded me-2">Hire Me<i class="ri-arrow-right-line ms-2"></i></a>
          <a href="#projects" class="btn border rounded bg-white"><i class="ri-article-line me-2"></i>My
            Projects</a>

          <!-- Social Icons -->
          <div class="mt-5">
            <a target="_blank" href="https://facebook.com/rashadulshaonbd"
              class="social-icon text-decoration-none rounded text-dark border bg-white me-3">
              <i class="ri-facebook-line fs-5"></i>
            </a>
            <a target="_blank" href="https://instagram.com/rashadulshaon"
              class="social-icon text-decoration-none rounded text-dark border bg-white me-3">
              <i class="ri-instagram-line fs-5"></i>
            </a>
            <a target="_blank" href="https://discordapp.com/users/939733532085985312"
              class="social-icon text-decoration-none rounded text-dark border bg-white me-3">
              <i class="ri-discord-line fs-5"></i>
            </a>
            <a target="_blank" href="https://linkedin.com/in/rashadulshaon"
              class="social-icon text-decoration-none rounded text-dark border bg-white me-3">
              <i class="ri-linkedin-line fs-5"></i>
            </a>
            <a target="_blank" href="https://github.com/rashadulshaon"
              class="social-icon text-decoration-none rounded text-dark border bg-white">
              <i class="ri-github-line fs-5"></i>
            </a>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-md-5">
          <img src="@/assets/images/hero_img.jpg" alt="Rashadul Shaon" class="img-fluid rounded-3 p-2 border">
        </div>
      </div>
      <div class="mx-auto scroll-downs mb-4">
        <a href="#about" class="d-block mousey">
          <div class="scroller"></div>
        </a>
      </div>
    </section>
  </section>
</template>


<style lang="scss" scoped>
.hero {
  height: 80vh;
}

.social-icon {
  padding: 10px 8px 9px 9px;
}

.scroll-downs {
  right: 0;
  left: 0;
  width: 34px;
  height: 55px;
}

.mousey {
  width: 3px;
  padding: 5px 10px;
  height: 25px;
  border: 2px solid #0070f3;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}

.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #0070f3;
  animation-name: scroll;
  animation-duration: 1.5s;
  animation-timing-function: cubic-bezier(.15, .41, .69, .94);
  animation-iteration-count: infinite;
}

@keyframes scroll {
  0% {
    opacity: 0;
  }

  10% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(15px);
    opacity: 0;
  }
}
</style>
