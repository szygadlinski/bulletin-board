import React from 'react';
import { shallow } from 'enzyme';
import { AddingPostComponent } from 'AddingPost';

describe('Component AddingPost', () => {
  it('should render without crashing', () => {
    const component = shallow(<AddingPostComponent />);
    expect(component).toBeTruthy();
  });
});
