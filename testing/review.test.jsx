import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReviewComponent from '../client/src/components/ReviewComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('<ReviewComponent />', () => {
  it('should accept a reviews prop', () => {
    const reviews = [{ test: 'test' }];
    const wrapper = mount(<ReviewComponent reviews={reviews} />);
    expect(wrapper.props().reviews).toEqual(reviews);
  });
});
