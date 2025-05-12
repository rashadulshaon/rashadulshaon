<template>
  <header class="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top">
    <div class="container">
      <a class="navbar-brand text-uppercase" href="#"><span class="text-primary fw-bold">Vue App</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link px-3" :class="{ active: $route.name === 'home' }" to="/">Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link px-3" :class="{ active: $route.name === 'about' }" to="/about">About
            </RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle px-3" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              User
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.nav-item {
  .nav-link {
    text-transform: uppercase;
    padding-left: 2rem;
    padding-right: 2rem;

    &.active {
      color: #3fb984;
    }
  }
}
</style>
