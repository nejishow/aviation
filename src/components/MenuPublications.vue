<template>
    <div class="card">
                <ul class="list-group text-right">
                    <li class="list-group-item">
                        <router-link to="/Arretes">
                        Arretés</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/Decrets">
                        Decrets</router-link>
                    </li>
                    <li class="list-group-item">
                        <router-link to="/Lois">
                        Lois</router-link>
                    </li>
                </ul>
    </div>
</template>
<style lang="css" scoped>
.list-group .list-group-item {
  border: none;
}
.card {
  height: 100%;
}
</style>