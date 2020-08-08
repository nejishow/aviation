<template>
    <div>
       <div class="row">
           <div class="col-12">
                {{currentRoute}}
                Test
           </div>
       </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      currentRoute: window.location.pathname,
    };
  },
  mounted() {
    //
  },
};
</script>