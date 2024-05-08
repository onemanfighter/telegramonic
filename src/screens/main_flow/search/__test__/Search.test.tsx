import { render } from '@testing-library/react';
import Search from '../Search';

describe('Search screen', () => {
  it('should render Search screen', () => {
    const { container } = render(<Search />);

    expect(container).toMatchSnapshot();
  });
});
