<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {     metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        bodyAttrs: {
            class: ['dark-mode', 'mobile']
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                'http-equiv': "Content-Type",
                content: "text/html; charset=utf-8"
            },

        ]
    },
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
