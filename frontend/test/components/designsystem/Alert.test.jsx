import React from 'react';
import renderer from 'react-test-renderer';

import Alert from '../../../src/components/designsystem/Alert';

describe('Alert', () => {
  it('renders correctly', () => {
    const component = (
      <Alert />
    );
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
