import { render } from '@testing-library/react';
import BreadcrumbComponent from '../BreadcrumbComponent';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    pathname: '/home/first/second/third',
  }),
}));

describe('BreadcrumbComponent', () => {
  it('should render correctly', () => {
    const { container } = render(<BreadcrumbComponent />);

    expect(container).toMatchSnapshot();
  });
});
