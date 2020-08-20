<template>
    <div class="card">

                <ul class="list-group text-right">
                    <li class="list-group-item" v-for="(item, index) in menu" :key="index">
                        <router-link :to="{name:item.name, params: {id:item._id},}">
                        {{item.name}}</router-link>
                    </li>               
                </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["menu"],
};
</script>
<style lang="css" scoped>
.list-group .list-group-item {
  border: none;
}
.card {
  height: 100%;
}
</style>