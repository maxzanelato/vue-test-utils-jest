import YesNoComponent from '@/components/Ex5';
import { mount } from '@vue/test-utils';

it('Click on yes button calls our method with argument "yes"', async () => {
  const spy = jest.fn();
  const wrapper = mount(YesNoComponent, {
    propsData: {
      callMe: spy,
    },
  });

  await wrapper.find('button.yes').trigger('click');

  expect(spy).toHaveBeenCalledWith('yes');
});
