<template>
  <footer class="footer">
    <div class="container">
      <h2><strong>&copy; {{copyright}}</strong></h2>
    </div>
  </footer>

</template>

<script>
  export default{
    name: 'Footer',
    data() {
      return {
        copyright: 'Coinage 2017',
      };
    },

  };
</script>

<!-- Adding scoped attribute limits the CSS to this component only -->
<style scoped>
  .footer{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    text-align: center;
  }
  h2{
    font-weight: normal;
  }
</style>
