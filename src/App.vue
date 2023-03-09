<script setup lang="ts">

</script>

<template>
  <div class="menu">
    <p>
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link to="/home">Go to Home</router-link>
      |
      <router-link to="/page1">Go to page1</router-link>
      |
      <router-link to="/login">login</router-link>
    </p>
  </div>
  <router-view></router-view>
</template>

<style scoped>
.menu {
  position: absolute;
  top: -2px;
  left: 966px;
}
</style>
