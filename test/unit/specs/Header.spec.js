import Vue from 'vue';
import Header from '@/components/Header';

describe('Header.vue', () => {
  it('should render correct header', () => {
    const Constructor = Vue.extend(Header);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.title h1').textContent)
      .to.equal('Coinage');
  });
});
