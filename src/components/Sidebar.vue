<template>
  <div class="sidebar-wrapper">
    <ul class="nav" id="nav">
      <li>
        <router-link to="/table">
          <i class="nc-icon nc-tile-56"></i>
          <p>Adicionar Utilizador</p>
        </router-link>
      </li>
      <li>
        <router-link to="/user">
          <i class="nc-icon nc-simple-add"></i>
          <p>Inserir Valores</p>
        </router-link>
      </li>
      <li>
        <router-link to="/typo">
          <i class="nc-icon nc-tile-56"></i>
          <p>Listar Utilizadores</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
#nav a.router-link-exact-active {
  color:#42b983;
  opacity: 1;
}

#nav a {
  font-size: 9px;
}
</style>