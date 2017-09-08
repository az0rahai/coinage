<template>
  <div class="container">
      <table class="table is-responsive is-bordered is-striped is-narrow is-fullwidth is-center is-mobile">
        <thead>
        <tr>
          <th>Coin</th>
          <th>Amount</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>&pound;2</td>
          <td>{{twoPound}}</td>
        </tr>
        <tr>
          <td>&pound;1</td>
          <td>{{onePound}}</td>
        </tr>
        <tr>
          <td>50p</td>
          <td>{{fiftyPence}}</td>
        </tr>
        <tr>
          <td>2p</td>
          <td>{{twoPenny}}</td>
        </tr>
        <tr>
          <td>1p</td>
          <td>{{onePenny}}</td>
        </tr>
        </tbody>
      </table>

  <!--  <div class="div-table">
      <div class="columns no-margin">
        <div class="column" >
          <p class="notification is-primary">Coin</p>
        </div>
        <div class="column">
          <p class="notification is-primary">Amount</p>
        </div>
      </div>
      <div class="columns no-margin">
        <div class="column">
          <p class="notification is-dark">&pound;2</p>
        </div>
        <div class="column">
          <p class="notification is-light">{{twoPound}}</p>
        </div>
      </div>
      <div class="columns no-margin">
        <div class="column">
          <p class="notification is-dark">&pound;1</p>
        </div>
        <div class="column">
          <p class="notification is-light">{{onePound}}</p>
        </div>
      </div>
      <div class="columns no-margin">
        <div class="column">
          <p class="notification is-dark">50p</p>
        </div>
        <div class="column">
          <p class="notification is-list">{{fiftyPence}}</p>
        </div>
      </div>
      <div class="columns no-margin">
        <div class="column">
          <p class="notification is-dark">2p</p>
        </div>
        <div class="column">
          <p class="notification is-light">{{twoPenny}}</p>
        </div>
      </div>
      <div class="columns no-margin">
        <div class="column">
          <p class="notification is-dark">1p</p>
        </div>
        <div class="column">
          <p class="notification is-light">{{onePenny}}</p>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
  export default {
    name: 'displayGrid',
    props: {
      /* Validation on amount */
      amount: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        twoPound: '',
        onePound: '',
        fiftyPence: '',
        twoPenny: '',
        onePenny: '',
      };
    },
    watch: {
      amount() {
        this.convert();
      },
    },
    created() {
      this.convert();
    },
    methods: {
      convert() {
        /* Convert to pennies and to the nearest rounded decimal */
        let total = Math.round(Number(this.amount * 100).toFixed(2));

        /* Check from higher to lower denominations */
        if (total / 200 > 0) {
          this.$data.twoPound = parseInt(total / 200, 10);
          total %= 200;
        }
        if (total / 200 > 0) {
          this.$data.onePound = parseInt(total / 100, 10);
          total %= 100;
        }
        if (total / 50 > 0) {
          this.$data.fiftyPence = parseInt(total / 50, 10);
          total %= 50;
        }
        if (total / 2 > 0) {
          this.$data.twoPenny = parseInt(total / 2, 10);
          total %= 2;
        }
        if (total / 1 > 0) {
          this.$data.onePenny = parseInt(total / 1, 10);
          total %= 1;
        }
      },
    },
  };
</script>

<!-- Adding scoped attribute limits the CSS to this component only -->
<style scoped>
  .no-margin{
    margin: 0px;
  }
  h1{
    font-weight: normal;
  }
</style>
