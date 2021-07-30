<template>
  <div class="content">
    <p v-if="loading">Loading...</p>
    <div v-else>
      <h3 class="heading">Utilizadores</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Primeiro Nome</th>
            <th scope="col">Apelido</th>
            <th scope="col">Taxa de glicemia</th>
            <th scope="col">Calorias</th>
            <th scope="col">Hidratos de carbono</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="patient in patients" v-bind:key="patient">
            <td>{{ patient.idPatient }}</td>
            <td>{{ patient.firstName }}</td>
            <td>{{ patient.lastName }}</td>
            <td>{{ patient.bloodGlucose }}</td>
            <td>{{ patient.calories }}</td>
            <td>{{ patient.carbohydrates }}</td>
            <button class="btn btn-success btn-sm" to="/table">Atualizar</button>
            <button class="btn btn-danger btn-sm" @click="deleteUser(patient.idPatient)">
              Delete
            </button>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Typo",
  data() {
    return {
      loading: false,
      patients: null,
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get("patient")
      .then((response) => (this.patients = response.data.data))
      .catch((error) => console.log(error))
      .finally(() => (this.loading = false));
  },
  methods: {
    updateUser(idPatient) {
      axios
        .patch('patient/' + idPatient)
        .then(function (response) {
          console.log();
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteUser(idPatient) {
      axios
        .delete('patient/' + idPatient)
        .then(function (response) {
          console.log();
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
