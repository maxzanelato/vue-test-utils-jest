import { shallowMount, mount } from '@vue/test-utils';
import FooApp from '@/components/Ex4.vue';

test('should render Foo, then hide it', async () => {
  const wrapper = shallowMount(FooApp);
  expect(wrapper.text()).toMatch(/Foo/);

  await wrapper.setData({
    show: false,
  });

  expect(wrapper.text()).not.toMatch(/Foo/);
});

const transitionStub = () => ({
  render: function () {
    return this.$options._renderChildren;
  },
});

test('should render Foo, then hide it', async () => {
  const wrapper = mount(FooApp, {
    stubs: {
      transition: transitionStub(),
    },
  });
  expect(wrapper.text()).toMatch(/Foo/);

  await wrapper.setData({
    show: false,
  });

  expect(wrapper.text()).not.toMatch(/Foo/);
});
