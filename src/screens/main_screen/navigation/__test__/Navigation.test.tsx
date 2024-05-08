import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';
import { MemoryRouter } from 'react-router-dom';

describe.skip('Navigation', () => {
  it('should render correctly', async () => {
    const { container } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with search icon button', async () => {
    const { container } = render(<Navigation />);

    expect(container).toMatchSnapshot();
    expect(screen.getByText('search-icon-button')).toBeInTheDocument();
  });
});
