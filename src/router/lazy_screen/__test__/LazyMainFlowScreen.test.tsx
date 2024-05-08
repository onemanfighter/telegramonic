import { render, screen } from '@testing-library/react';
import { LazySearchScreen } from '../LazyMainFlowScreen';

describe('LazyMainFlowScreen', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('should render', async () => {
    const { container } = render(<LazySearchScreen />);

    jest.restoreAllMocks();

    expect(container).toMatchSnapshot();
  });
});
