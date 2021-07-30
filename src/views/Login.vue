<template>
  <div class="geral">
    <section id="webkit">
      <div class="form-geral">
        <img class="logo" src="../assets/LogoMain.png" alt="Glicheck">
        <h1>Glicheck</h1>
        <div class="formulario">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input type="text" class="form-control" v-model="username" placeholder="Nome de utilizador" required/>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" v-model="password" placeholder="Palavra-passe" required/>
            </div>
            <button class="btn btn-primary btn-block">Inicar sessão</button>
            <router-link to="/register" style="color: #000">Não tem conta? Registe-se</router-link>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('login', {
        username: this.username,
        password: this.password,
      });
      console.log(response);
      //atribui o token
      localStorage.setItem("token", response.data.token);
      this.$router.push("/table");

      
      /*if (response.data.role == "Administrador") {
      }
      else if (response.data.role == "Utilizador") {
        this.$router.push("/admin");
      }*/
      /*else {
        alert("O nome de utilizador e/ou a palavra-passe estão incorretos");
        //this.$router.push("/");
      }*/
    }
  }
};
</script>

<style scoped>
#webkit {
  background: linear-gradient(173deg, #e47c35, #eee8d6, #e47c35);
  background-size: 600% 600%;
  -webkit-animation: AnimationName 8s ease infinite;
  -moz-animation: AnimationName 8s ease infinite;
  -o-animation: AnimationName 8s ease infinite;
  animation: AnimationName 8s ease infinite;
  min-height: 100vh;
  display: flex;
}

@-webkit-keyframes AnimationName {
  0% {background-position: 42% 0%;}
  50% {background-position: 59% 100%;}
  100% {background-position: 42% 0%;}
}
@-moz-keyframes AnimationName {
  0% {background-position: 42% 0%;}
  50% {background-position: 59% 100%;}
  100% {background-position: 42% 0%;}
}
@-o-keyframes AnimationName {
  0% {background-position: 42% 0%;}
  50% {background-position: 59% 100%;}
  100% {background-position: 42% 0%;}
}
@keyframes AnimationName {
  0% {background-position: 42% 0%;}
  50% {background-position: 59% 100%;}
  100% {background-position: 42% 0%;}
}

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