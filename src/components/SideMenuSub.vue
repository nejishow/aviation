<template>
<div class="">

    <ul class="list-group text-left">
        <li class="list-group-item" v-for="(item, index) in menu" :key="index">
            <router-link :to="{path:'/'+item.name, query: {id:item._id},}">
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
