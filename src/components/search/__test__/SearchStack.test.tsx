import { render, screen } from '@testing-library/react';
import SearchStack from '../SearchStack';

describe('SearchStack', () => {
  const onSearchClick = jest.fn();
  beforeEach(() => {
    onSearchClick.mockReset();
  });
  it('should render correctly', () => {
    const { container } = render(<SearchStack onSearchClick={onSearchClick} />);

    expect(container).toMatchSnapshot();
  });

  it('should call onSearchClick when search button is clicked', () => {
    render(<SearchStack onSearchClick={onSearchClick} />);
    const searchButton = screen.getByText('Search');
    searchButton.click();

    expect(onSearchClick).toHaveBeenCalled();
  });
});
