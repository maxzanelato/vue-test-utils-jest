// Import the `mount()` method from Vue Test Utils
import { mount } from '@vue/test-utils';

const Counter = {
  props: {
    count: {
      type: Number,
      default: 1,
    },
  },
  template: `
    <div>
      <button @click="count++">Add up</button>
      <p>Total clicks: {{ count }}</p>
    </div>
  `,
};

test('pass value by propsData', async () => {
  const wrapper = mount(Counter, {
    propsData: {
      count: 2,
    },
  });

  const text = wrapper.find('p');

  expect(text.text()).toContain('Total clicks: 2');
});
