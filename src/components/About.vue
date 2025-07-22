<template>
  <section id="about" class="container my-5 py-5">
    <div class="col-lg-10 col-xl-7 mx-auto text-center mb-4">
      <h3 class="display mb-3">I love to take
        challenges and solve
        complex problems with the power of programming.
      </h3>
      <p class="mb-5">Over the last 5 years in the industry, I have been working
        as
        a software
        architect.
        When I
        build an application, I
        always like to make it resource efficient, secure and scalable as well.</p>
    </div>

    <!-- Carousel -->
    <div id="carousel" class="carousel slide mb-5" data-bs-ride="carousel">
      <div class="carousel-inner rounded">
        <div class="carousel-item active">
          <img src="@/assets/images/Rashadul_Shaon_cover_1.jpg" class="d-block w-100 object-fit-cover rounded"
            height="550px" style="object-position: right;">
        </div>
        <div class="carousel-item">
          <img src="@/assets/images/Rashadul_Shaon_cover_2.jpg" class="d-block w-100 object-fit-cover rounded"
            height="550px" style="object-position: center;">
        </div>
        <div class="carousel-item">
          <img src="@/assets/images/Rashadul_Shaon_cover_3.jpg" class="d-block w-100 object-fit-cover rounded"
            height="550px" style="object-position: center;">
        </div>
        <div class="carousel-item">
          <img src="@/assets/images/Rashadul_Shaon_cover_4.jpg" class="d-block w-100 object-fit-cover rounded"
            height="550px" style="object-position: center;">
        </div>
        <div class="carousel-item">
          <img src="@/assets/images/Rashadul_Shaon_cover_5.jpg" class="d-block w-100 object-fit-cover rounded"
            height="550px" style="object-position: center; ">
        </div>
      </div>

      <!-- Next/Prev Controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

      <!-- Indicators -->
      <div class="carousel-indicators position-relative py-4 text-center">
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="h-100 border rounded me-2 active"
          aria-current="true" aria-label="Slide 1">01</button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" class="h-100 border rounded me-2"
          aria-label="Slide 2">02</button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" class="h-100 border rounded me-2"
          aria-label="Slide 3">03</button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" class="h-100 border rounded me-2"
          aria-label="Slide 3">04</button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="4" class="h-100 border rounded"
          aria-label="Slide 3">05</button>
      </div>
    </div>


    <div class="row">
      <!-- Tech Stack -->
      <div class="col-lg-6 pe-lg-5 text-center text-lg-end">
        <div class="mb-5">
          <h5 class="fs-6 mb-4">Server-Side</h5>
          <span class="d-inline-block mb-2">PHP</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">Symfony</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">Doctrine ORM</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">API Platform</span><br>
          <span class="d-inline-block mb-2">Laravel</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">Eloquent ORM</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">MySQL</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">PHPUnit</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">Phalcon</span><br>
          <span class="d-inline-block mb-2">Python</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">Django</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">Tornado</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">GoLang</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">Bash</span><br>
          <span class="d-inline-block mb-2">Nginx</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">AWS</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">Docker</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">GraphQL</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">RabbitMQ
          </span>
        </div>

        <div class="mb-5">
          <h5 class="fs-6 mb-4">Front-End</h5>
          <span class="d-inline-block mb-2">HTML</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">CSS</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">Sass</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">Bootstrap</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">JavaScript</span><br>
          <span class="d-inline-block mb-2">Vue.js</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">Nuxt.js</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">Electron.js</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">TypeScript</span><br>
          <span class="d-inline-block mb-2">Stimulus</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">Twig</span><span class="fw-bold px-3 separator">/</span>
          <span class="d-inline-block mb-2">Blade
          </span>
        </div>
      </div>

      <!-- Core Competencies -->
      <div class="col-lg-6 ps-lg-5">
        <h5 class="fs-6 text-center text-lg-start mb-4">Core Competencies
        </h5>
        <ul class="list-unstyled">
          <li class="mb-2"><i class="ri-check-fill text-primary fs-4 me-3"></i>Building PHP /
            Python
            based backend</li>
          <li class="d-flex align-items-center mb-2"><i class="ri-check-fill text-primary fs-4 me-3"></i>Building ORM
            based
            complex database relationship schema</li>
          <li class="d-flex align-items-center mb-2"><i class="ri-check-fill text-primary fs-4 me-3"></i>Developing
            high-performant REST / GraphQL / Socket APIs</li>
          <li class="d-flex align-items-center mb-2"><i class="ri-check-fill text-primary fs-4 me-3"></i>Familiarity
            with
            software architecture patterns (MVC, DDD, TDD, CQRS)</li>
          <li class="d-flex align-items-center mb-2"><i class="ri-check-fill text-primary fs-4 me-3"></i>Experience in
            modular
            monolithic, service oriented, event driven and
            microservice architecture</li>
          <li class="d-flex align-items-center mb-2"><i class="ri-check-fill text-primary fs-4 me-3"></i>Familiarity
            with
            diagonal scaling, load balancing (master-slave), database tenancy and shards, containers
            and state
            clusters</li>
          <li class="d-flex align-items-center mb-2"><i class="ri-check-fill text-primary fs-4 me-3"></i>Experience in
            SDLC
            frameworks (Agile, Waterfall)</li>
        </ul>
      </div>
    </div>

    <!-- Github Profile -->
    <div class="text-center py-3">
      <a target="_blank" href="https://github.com/rashadulshaon" class="mt-3">
        <button class="theme-btn btn3">
          <i class="ri-github-line me-2"></i>Github
          Profile<i class="ri-arrow-right-up-line ms-2"></i>
        </button>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.carousel-indicators [data-bs-target] {
  text-indent: 0;
  padding: 7px 5px;
}

.carousel-indicators [data-bs-target].active {
  background-color: #f6f6f6;
}
</style>
