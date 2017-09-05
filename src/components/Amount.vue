<template>
  <div class="container">
    <form>
      <div class="field has-addons has-addons-centered">
        <p class="control is-expanded">
          <input class="input col-is-4" type="text" v-model="amount" :placeholder="amountLabel"/>
        </p>
        <p class="control">
          <a class="button is-success" @click.prevent="convert">Convert</a>
        </p>
      </div>
      <!--<div class="columns is-mobile">
      <div class="column is-three-quarters field ">
        <div class="control">
          <input class="input col-is-4" type="text" v-model="amount" :placeholder="amountLabel"/>
        </div>
      </div>
      <div class="column field">
        <div class="control">
          <button class="button is-success" @click.prevent="convert">Convert</button>
        </div>
      </div>
      </div>-->
    </form>
    <div class="">Converting {{amount*100}} to pennies</div>
    <display-panel v-if="amount"></display-panel>
  </div>
</template>

<script>
  import DisplayPanel from '../components/DisplayPanel';

  export default {
    name: 'amount',
    data() {
      return {
        amount: '',
        amountLabel: 'Enter monetary value for coin conversion',
      };
    },
    components: {
      'display-panel': DisplayPanel,
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
