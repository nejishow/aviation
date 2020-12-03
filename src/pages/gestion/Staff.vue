<template>
  <div class="staff">
    <div class="new">
      <label for="">Pseudo</label>
      <input type="text" class="form-control" />
      <label for="">Mot de passe</label>
      <input type="text" class="form-control" />
      <label for="">Administrateur</label>
      <input type="checkbox" class="form-control" />

      <button class="btn btn-group btn-primary mt-5">Enregistrer</button>
    </div>
    <div class="all">
      Liste des employés
    </div>
  </div>
</template>

<style lang="scss" scoped>
.staff {
  width: 100%;
  display: flex;
  height: 100%;

  .new {
  }
}
</style>
