import Vue from 'vue';
import DisplayPanel from '@/components/DisplayPanel';

describe('DisplayPanel.vue', () => {
  /* Check for created hook */
  it('has a created hook', () => {
    expect(typeof DisplayPanel.created).to.equal('function');
  });

  it('should calculate the right coins for integer 4', () => {
    const Constructor = Vue.extend(DisplayPanel);
    const dataValues = DisplayPanel.data();
    const vm = new Constructor({
      propsData: {
        amount: 4,
      },
    }).$mount();
    vm.convert();
    console.log(dataValues);
    expect(dataValues.twoPenny).to.equal(2);
  });
});
