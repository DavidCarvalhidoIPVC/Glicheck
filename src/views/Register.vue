<template>
  <div class="geral">
    <section id="webkit">
      <div class="form-geral">
        <div class="formulario">
          <form @submit.prevent="handleSubmit">
            <h3>Registo</h3>
            <div class="form-group">
              <label>Utilizador</label>
              <input
                type="text"
                class="form-control"
                v-model="username"
                placeholder="Utilizador"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                placeholder="Password"
              />
            </div>
            <div class="form-group">
              <label>Tipo de Utilizador</label>
              <input
                type="text"
                class="form-control"
                v-model="role_ID"
                placeholder="Role"
              />
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-block">Registar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      role_ID: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("", {
        username: this.username,
        password: this.password,
        role_ID: this.role_ID,
      });
      console.log(response);
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.form-geral {
  width: 100%;
  text-align: center;
  color: #dfdfdf;
  padding: 40px;
}

.logo {
  width:50px;
  padding-top:60px;
  padding-bottom:18px;
}

.form-geral h1 {
  font-family: open sans, Arial, Helvetica Neue, sans-serif;
  width: 100%;
  font-size: 50px;
  text-transform: uppercase;
  line-height: 0.8;
  letter-spacing: 3px;
  font-weight: 300;
  color: #3b3b3b;
}

.formulario {
  padding-top: 70px;
  /* padding: 0 500px 0 500px; */
  padding-left: 500px;
  padding-right: 500px;
  color: #3b3b3b;
}

.formulario button {
  margin-top: 30px;
}

.form-group {
  padding: 5px;
}
</style>