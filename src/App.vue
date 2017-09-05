<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import Header from './components/Header';
  import Footer from './components/Footer';

  export default{
    name: 'app',
    components: {
      'header-component': Header,
      'footer-component': Footer,
    },

  };
</script>

<style lang="sass" src="bulma"></style>
<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
