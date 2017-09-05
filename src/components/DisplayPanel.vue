<template>
  <div class="container">
    <table class="table is-bordered is-striped is-narrow is-fullwidth is-center">
      <thead>
      <tr>
        <th>Coin</th>
        <th>Amount</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>&pound;2</td>
        <td></td>
      </tr>
      <tr>
        <td>&pound;1</td>
        <td></td>
      </tr>
      <tr>
        <td>50p</td>
        <td></td>
      </tr>
      <tr>
        <td>2p</td>
        <td></td>
      </tr>
      <tr>
        <td>1p</td>
        <td></td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  export default {
    name: 'displayGrid',
    data() {
      return {
        amount: '',
        amountLabel: 'Enter monetary value for coin conversion',
      };
    },
    methods: {
      convert() {

      },
    },

  };
</script>

<!-- Adding scoped attribute limits the CSS to this component only -->
<style scoped>
  h1{
    font-weight: normal;
  }
</style>
