import React from 'react';
import renderer from 'react-test-renderer';

import TextField from '../../../src/components/designsystem/TextField';

describe('TextField', () => {
  it('renders correctly', () => {
    const component = (
      <TextField />
    );
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
