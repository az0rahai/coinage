import Vue from 'vue';
import Footer from '@/components/Footer';

describe('Landing.vue', () => {
  it('should render correct Footer', () => {
    const Constructor = Vue.extend(Footer);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.container h2').textContent)
      .to.equal('© Coinage 2017');
  });
});
