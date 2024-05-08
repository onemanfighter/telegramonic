import { render } from '@testing-library/react';
import Channel from '../Channel';

describe('Channel screen', () => {
  it('should render correctly', () => {
    const { container } = render(<Channel />);

    expect(container).toMatchSnapshot();
  });
});
