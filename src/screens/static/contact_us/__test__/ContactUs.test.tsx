import { render } from '@testing-library/react';
import ContactUs from '../ContactUs';

describe('ContactUs screen', () => {
  it('should render correctly', () => {
    const { container } = render(<ContactUs />);

    expect(container).toMatchSnapshot();
  });
});
