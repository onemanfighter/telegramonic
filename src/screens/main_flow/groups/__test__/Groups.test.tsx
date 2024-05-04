import { render } from '@testing-library/react';
import Groups from '../Groups';

describe('Groups screen', () => {
  it('should render correctly', () => {
    const { container } = render(<Groups />);

    expect(container).toMatchSnapshot();
  });
});
