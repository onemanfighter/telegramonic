import { render } from '@testing-library/react';
import Games from '../Games';

describe('Games screen', () => {
  it('should render correctly', () => {
    const { container } = render(<Games />);

    expect(container).toMatchSnapshot();
  });
});
