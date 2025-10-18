<template>
  <section id="projects" class="container py-5">
    <div class="col-lg-10 col-xl-7 mx-auto text-center mb-4">
      <h3 class="display mb-3">Recent projects</h3>
      <p class="mb-5">I turn ideas into robust, maintainable systems that grow with your needs. From data models to
        deployment, I treat every layer with care and clarity.
      </p>
    </div>
    <div class="row">
      <div class="col-lg-6 mb-4 mb-lg-0">
        <div class="card project-card">
          <img src="@/assets/images/onceinsurance.png" class="card-img-top p-4" alt="...">
          <div class="card-body p-4 pt-0">
            <h5 class="card-title">Once Insurance</h5>
            <p class="card-text small">Some quick example text to build on the card title and make up the bulk of the
              card's
              content. Some quick example text to build on the card title and make up the bulk of the card's content</p>
            <a href="http://onceinsurance.com/instant-quote" target="_blank"><button class="theme-btn btn3 small py-2 px-3 me-2"><i class="ri-arrow-right-up-line me-2"></i>View
                Project</button></a>
            <a href="#"><button class="theme-btn btn2 small py-2 px-3"><i class="ri-article-line me-2"></i>Case
                Study</button></a>
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-lg-0">
        <div class="card project-card">
          <img src="@/assets/images/readylms.png" class="card-img-top p-4" alt="...">
          <div class="card-body p-4 pt-0">
            <h5 class="card-title">Ready LMS</h5>
            <p class="card-text small">Some quick example text to build on the card title and make up the bulk of the
              card's
              content. Some quick example text to build on the card title and make up the bulk of the card's content</p>
            <a href="http://demo.readylms.app" target="_blank"><button class="theme-btn btn3 small py-2 px-3 me-2"><i class="ri-arrow-right-up-line me-2"></i>View
                Project</button></a>
            <a href="#"><button class="theme-btn btn2 small py-2 px-3"><i class="ri-article-line me-2"></i>Case
                Study</button></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  &:hover {
    transform: scale(1.02);
    transition: all 150ms ease;
    border-color: #1883fd;
  }
  .card-img-top {
    height: 280px;
    object-fit: cover;
  }
}
</style>
