import React from 'react';
import renderer from 'react-test-renderer';

import Checkbox from '../../../src/components/designsystem/Checkbox';

describe('Checkbox', () => {
  it('renders correctly', () => {
    const component = (
      <Checkbox />
    );
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
