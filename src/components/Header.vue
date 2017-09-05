<template>
  <header class="title">
    <h1>{{appName}}</h1>
  </header>

</template>

<script>
  export default{
    name: 'Header',
    data() {
      return {
        appName: 'Coinage',
      };
    },

  };
</script>

<!-- Adding scoped attribute limits the CSS to this component only -->
<style scoped>
 h1{
   font-weight: normal;
 }
</style>
