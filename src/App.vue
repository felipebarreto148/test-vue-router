<template>
  <div id="app">
    <nav class="navbar navbar-toggleable-md">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Sobre mim</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projetos" class="nav-link">Projetos</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contatos</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  min-height: 100vh;
  background: linear-gradient(45deg, #000000, #062f4f, #813772, #b82601);
  background-size: 300% 300%;
  animation: animateBackground 10s ease infinite;
}

@keyframes animateBackground {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

div#navbarNav {
  display: flex;
  justify-content: center;
}

ul.navbar-nav {
  display: flex;
  width: 50vw;
  justify-content: space-between;
}

.nav-link{
  color: white;
  padding: 0px;
  font-size: 20px;
  transition: ease 100ms;
}

.router-link-active{
  font-size: 25px;
  border: none;
  border-bottom: 1px solid white;
}
</style>
