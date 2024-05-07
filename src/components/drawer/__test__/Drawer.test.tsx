import { render, screen } from '@testing-library/react';
import DrawerComponent from '../Drawer';

describe('Drawer', () => {
  const onModalClose = jest.fn();

  beforeEach(() => {
    onModalClose.mockReset();
  });

  it('should render correctly if isOpen is true', () => {
    const { container } = render(
      <DrawerComponent
        title="title"
        isOpen={true}
        onModalClose={onModalClose}
        children={<div>Children</div>}
        footer={<div>Footer</div>}
      />,
    );

    expect(screen.findByText('title')).toBeDefined();
    expect(screen.findByText('Children')).toBeDefined();
    expect(screen.findByText('Footer')).toBeDefined();
  });

  it('should not render if isOpen is false', () => {
    const { container } = render(
      <DrawerComponent
        title="title"
        isOpen={false}
        onModalClose={onModalClose}
        children={<div>Children</div>}
        footer={<div>Footer</div>}
      />,
    );

    expect(screen.queryByText('title')).toBeNull();
    expect(screen.queryByText('Children')).toBeNull();
    expect(screen.queryByText('Footer')).toBeNull();
    expect(container).toMatchSnapshot();
  });
});
