import { render } from '@testing-library/react';
import AboutUs from '../AboutUs';

describe('AboutUs screen', () => {
  it('should render correctly', () => {
    const { container } = render(<AboutUs />);

    expect(container).toMatchSnapshot();
  });
});
