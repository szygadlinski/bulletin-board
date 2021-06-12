import React from 'react';
import { shallow } from 'enzyme';
import { EditingPostComponent } from 'EditingPost';

describe('Component EditingPost', () => {
  it('should render without crashing', () => {
    const component = shallow(<EditingPostComponent />);
    expect(component).toBeTruthy();
  });
});
