<template>
    <div class="wrapper">
    <div class="sidebar" data-color="white" data-active-color="danger">
      <div class="logo">
        <a class="simple-text logo-mini">
          <div class="logo-image-small">
            <img src="assets/img/LogoMain.png">
          </div>
        </a>
        <a class="simple-text logo-normal">
          Glicheck
          <!-- <div class="logo-image-big">
            <img src="../assets/img/logo-big.png">
          </div> -->
        </a>
      </div>
      <!-- Sidebar -->
        <Sidebar />
    </div>
    
    <div class="main-panel">
      <!-- Navbar -->
      <Nav />
      <!-- Content -->
      <router-view/>
      <!-- Footer -->
     <Footer />
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Sidebar from '../components/Sidebar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Dashboard',
  components: {
    Nav,
    Sidebar,
    Footer,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
