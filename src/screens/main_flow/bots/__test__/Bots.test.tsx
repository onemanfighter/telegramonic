import { render } from '@testing-library/react';
import Bots from '../Bots';

describe('Bots screen', () => {
  it('should render correctly', () => {
    const { container } = render(<Bots />);

    expect(container).toMatchSnapshot();
  });
});
