<template>
  <form>
    <label>用户名:
      <input type="text" v-model="username">
    </label>
    <label>
      密码:
      <input type="password" v-model="password">
    </label>
    <button type="submit" @click.prevent="login">登录</button>
  </form>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import router from "@/router";

export default defineComponent({
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const response = await (this as any).$http.post('login/', {
        username: this.username,
        password: this.password
      })
      if (response) {
        alert("登录成功!")
        await router.replace("info/")
      }
    }
  }
})
</script>

<style scoped>

</style>