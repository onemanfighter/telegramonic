import { render } from '@testing-library/react';
import Top from '../Top';

describe('Top screen', () => {
  it('should render correctly', () => {
    const { container } = render(<Top />);

    expect(container).toMatchSnapshot();
  });
});
