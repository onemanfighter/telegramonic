import { render } from '@testing-library/react';
import Themes from '../Themes';

describe('Themes screen', () => {
  it('should render correctly', () => {
    const { container } = render(<Themes />);

    expect(container).toMatchSnapshot();
  });
});
