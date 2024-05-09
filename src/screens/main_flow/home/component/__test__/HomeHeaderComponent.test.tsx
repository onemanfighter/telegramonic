import { render } from '@testing-library/react';
import HomeHeaderComponent from '../HomeHeaderComponent';

describe('HomeHeaderComponent', () => {
  it('should render correctly', () => {
    const { container } = render(<HomeHeaderComponent />);

    expect(container).toMatchSnapshot();
  });
});
