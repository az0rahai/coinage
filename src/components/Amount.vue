<template>
  <div class="container">
    <form>
      <div class="field">
        <p class="control is-expanded">
          <input class="input col-is-4"
                 type="text"
                 v-model="amount"
                 v-bind:class="{'is-danger' : (firstSubmit && emptyAmount)}"
                 :placeholder="amountLabel"
                 v-on:keyup.enter="validateAmount"
          />
        </p>
        <p class="help is-danger" v-if="(firstSubmit && emptyAmount)">This input is invalid</p>
        <!--<p class="help is-danger" v-if="(firstSubmit && emptyAmount) || (firstSubmit && faultyPattern)">This input is invalid</p>-->
      </div>
    </form>
    <div class="">Converting {{pennies}} pennies to coins</div>
    <display-panel :amount="amount"></display-panel>
  </div>
</template>

<script>
  import DisplayPanel from '../components/DisplayPanel';

  export default {
    name: 'amount',
    data() {
      return {
        pennies: '',
        amount: '',
        firstSubmit: false,
        amountLabel: 'Enter monetary value for coin conversion',
      };
    },
    computed: {
      /* Check for empty string */
      emptyAmount() {
        return this.amount === '';
      },
      /* Check for £decimalp format */
      faultyPattern() {
        const pattern = '^[£]?[1-9]\d*(\.?\d+)?[p]?'; //eslint-disable-line
        const expression = new RegExp(pattern);
        return (expression.test(this.amount));
      },
    },
    components: {
      'display-panel': DisplayPanel,
    },
    methods: {
      validateAmount() {
        this.$data.firstSubmit = true;

        if (this.emptyAmount || this.faultyPattern) {
         /* event.preventDefault(); */
        }
        /* /!* Look for £ sign and remove it *!/
        if (this.$data.amount.indexOf('£') !== -1) {
          this.$data.amount = this.$data.amount.replace('/£', '');
        }
        /!* Look for p sign and remove it *!/
        if (this.$data.amount.indexOf('p') !== -1) {
          this.$data.amount = this.$data.amount.replace('/p', '');
        } */
        /* Replace all non numeric and . values */
        this.$data.amount = this.$data.amount.replace(/[^0-9-.]/g, '');
        this.$data.pennies = Math.round(Number(this.$data.amount * 100).toFixed(2));
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
