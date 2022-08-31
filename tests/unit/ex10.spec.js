import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MyComponent from '@/components/Ex10';
import Ex10Module from '@/store/modules/Ex10';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('MyComponent.vue', () => {
  let actions;
  let state;
  let store;
  let getters;

  beforeEach(() => {
    state = {
      clicks: 2,
    };

    actions = {
      'Ex10/moduleActionClick': jest.fn(),
    };

    getters = {
      'Ex10/moduleClicks': Ex10Module.getters.moduleClicks,
    };

    console.log(Ex10Module);

    store = new Vuex.Store({
      modules: {
        Ex10Module: {
          state,
          actions,
          getters,
          namespaced: true,
        },
      },
    });
  });

  it('calls store action "moduleActionClick" when button is clicked', () => {
    const wrapper = shallowMount(MyComponent, { store, localVue });
    const button = wrapper.find('button');
    button.trigger('click');
    expect(actions['Ex10/moduleActionClick']).toHaveBeenCalled();
  });

  it('renders "state.clicks" in first p tag', () => {
    const wrapper = shallowMount(MyComponent, { store, localVue });
    const p = wrapper.find('p');
    expect(p.text()).toBe(state.clicks.toString());
  });
});
