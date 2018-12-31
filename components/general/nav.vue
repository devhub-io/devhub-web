<template>
  <nav class="main-menu navbar-expand-lg">
    <div class="navbar-header">
      <!-- Toggle Button -->
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar"/>
        <span class="icon-bar"/>
        <span class="icon-bar"/>
      </button>
    </div>
    <div class="navbar-collapse collapse clearfix">
      <ul class="navigation clearfix">
        <li :class="{ current: $route.path === '/', dropdown: false}"><a href="/">首页</a></li>
        <li v-for="one in $store.getters.categories" :key="one.id" :class="{ current: $route.path === one.url, dropdown: `children` in one}">
          <nuxt-link :to="one.url.length > 0 ? one.url : '#'" :target="one.target == 1 ? '_blank' : '_self'">{{ one.name }}</nuxt-link>
          <ul v-if="`children` in one">
            <li v-for="two in one.children" :key="two.id">
              <nuxt-link :href="two.url.length > 0 ? two.url : '#'" :target="two.target == 1 ? '_blank' : '_self'">{{ two.name }}</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>
