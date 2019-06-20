<template>
  <div id="Yellow">
  <div class="light red" :class="{active: current=='red'}"></div>
  <div class="light yellow" :class="{active: current=='yellow'}"></div>
  <div class="light green" :class="{active: current=='green'}"></div>
</div>
</template>

<script>
  export default {
    name: 'Yellow',
    data () {
      return {
          current: 'yellow'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: linear-gradient(rgb(52, 166, 255), rgb(71, 124, 255));
  height: 100vh;
}

#Yellow {
  width: 70px;
  height: 240px;
  background: #222;
  border-radius: 8px;
  margin: auto;
  padding: 15px;
}

.light {
  display: inline-block;
  border-radius: 100%;
  width: 70px;
  height: 70px;
  margin-bottom: 8px;
  opacity: 0.2;
  transition: opacity 0.2s
}

.active {
  opacity: 1;
}

.red {
  background: red;
}
.yellow {
  background: yellow;
}
.green {
  background: green;
}
</style>