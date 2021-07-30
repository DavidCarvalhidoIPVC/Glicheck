<template>
  <div class="content">
    <h1 class="well col-lg-8 well">Atualizar utilizador</h1>
    <div class="col-lg-8 well">
      <div class="row">
        <form @submit.prevent="handleSubmit">
          <div class="formulario col-lg-30">
            <div class="row">
              <div class="col-lg-6 form-group">
                <label>Primeiro Nome</label>
                <input type="text" class="form-control" v-model="firstName" placeholder="Primeiro Nome" required/>
              </div>
              <div class="col-lg-6 form-group">
                <label>Apelido</label>
                <input type="text" class="form-control" v-model="lastName" placeholder="Apelido" required/>
              </div>
            </div>
            <div class="form-group">
              <label>Morada</label>
              <input placeholder="Morada" rows="1" v-model="address" class="form-control" required/>
            </div>
            <div class="form-group">
              <label>Número de telefone</label>
              <input type="tel" class="form-control" v-model="numberPhone" placeholder="Número de telefone" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" required/>
            </div>
            <div class="form-group">
              <label>Taxa de glicemia</label>
              <input type="number" class="form-control" v-model="bloodGlucose" placeholder="Taxa de glicemia" required/>
            </div>
            <div class="form-group">
              <label>Calorias</label>
              <input type="number" class="form-control" v-model="calories" placeholder="Calorias" required/>
            </div>
            <div class="form-group">
              <label>Percentagem de hidratos de carbono</label>
              <input type="number" class="form-control" v-model="carbohydrates" placeholder="Percentagem de hidratos de carbono" required/>
            </div>
            <button class="btn btn-primary btn-block">Atualizar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table'
}
</script>