import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../../../src/components/designsystem/Button';

describe('Button', () => {
  it('renders correctly', () => {
    const component = (
      <Button />
    );
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
