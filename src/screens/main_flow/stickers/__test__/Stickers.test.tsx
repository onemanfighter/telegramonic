import { render } from '@testing-library/react';
import Stickers from '../Stickers';

describe('Stickers screen', () => {
  it('should render correctly', () => {
    const { container } = render(<Stickers />);

    expect(container).toMatchSnapshot();
  });
});
