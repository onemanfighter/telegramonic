import { render } from '@testing-library/react';
import BrowseOurCategories from '../BrowseOurCategories';

describe('BrowseOurCategories', () => {
  it('should render correctly', () => {
    const { container } = render(<BrowseOurCategories />);

    expect(container).toMatchSnapshot();
  });
});
