import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';

import Foo from '@/components/Ex7';

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: jest.fn(() => Promise.resolve({ data: 'value' })),
  },
}));

it('fetches async when a button is clicked', async () => {
  const wrapper = shallowMount(Foo);

  wrapper.find('button').trigger('click');

  await flushPromises();

  expect(wrapper.text()).toBe('value');
});
