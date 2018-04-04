import { createTest, createVue, destroyVM } from '../util';
import Button from '../../../src/components/button';

describe('Button', () => {
    let vm;
    afterEach(() => {
      destroyVM(vm);
    })
  
    it('default', () => {
      vm = createTest(Button, null, true);
      let buttonElm = vm.$el;
      expect(buttonElm.classList.contains('m-button--primary')).to.be.true;
    })

    it('primary', () => {
        vm = createTest(Button, {
          type: 'primary'
        }, true);
        let buttonElm = vm.$el;
        expect(buttonElm.classList.contains('m-button--primary')).to.be.true;
    })

    it('warning', () => {
        vm = createTest(Button, {
          type: 'warning'
        }, true);
        let buttonElm = vm.$el;
        expect(buttonElm.classList.contains('m-button--warning')).to.be.true;
    })
})