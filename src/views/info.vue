<template>

</template>

<script lang="ts">
// import {useStore} from "../store/index.ts"
export default {
  name: "info",

  setup(){
    // const store = useStore()
    let a = []
  },
  data(){
    return{

    }
  },
  created() {
    const res =  (this as any).$http.get('get_history/',{"code":"000001"})
    console.log(res)
  }
}
</script>

<style scoped>

</style>