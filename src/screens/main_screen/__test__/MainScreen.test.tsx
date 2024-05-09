import { render } from '@testing-library/react';
import MainScreen from '../MainScreen';
import { AppRouterProvider } from '@providers';
import { BrowserRouter } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/home/example/path',
  }),
}));

describe.skip('MainScreen', () => {
  it('should render correctly', () => {
    const { container } = render(<MainScreen />, {
      wrapper: BrowserRouter,
    });

    expect(container).toMatchSnapshot();
    const breadcrumb = container.querySelector('BreadcrumbComponent');
    expect(breadcrumb).not.toBeNull();
  });
});
