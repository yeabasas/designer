import { render } from '@testing-library/react';

import Dnd from './dnd';

describe('Dnd', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dnd />);
    expect(baseElement).toBeTruthy();
  });
});
