import { render } from '@testing-library/react';
import Blogs from '../Blogs';

describe('Blogs screen', () => {
  it('should render correctly', () => {
    const { container } = render(<Blogs />);

    expect(container).toMatchSnapshot();
  });
});
