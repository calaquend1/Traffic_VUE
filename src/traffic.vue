<template>
  <div>
      <router-link to="/Red">Red</router-link>
      <router-link to="/Yellow">Yellow</router-link>
      <router-link to="/Green">Green</router-link>
      <router-link to="/">traffic</router-link>
      <router-view></router-view>
  </div>
</template>


<script>

export default {
  name: 'traffic',
  data () {
      return {
          current: 'red'
      }
    },
}
</script>

