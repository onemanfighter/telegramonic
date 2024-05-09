import { fireEvent, render, screen } from '@testing-library/react';
import ModalComponent from '../Modal';

describe('Modal', () => {
  const onModalClose = jest.fn();

  beforeEach(() => {
    onModalClose.mockReset();
  });

  it('should render correctly if isOpen is true', () => {
    const { container } = render(
      <ModalComponent
        title="title"
        isOpen={true}
        onModalClose={onModalClose}
        message={'Message'}
      />,
    );

    expect(screen.findByText('title')).toBeDefined();
    expect(screen.findByText('Message')).toBeDefined();
  });

  it('should not render if isOpen is false', () => {
    const { container } = render(
      <ModalComponent
        title="title"
        isOpen={false}
        onModalClose={onModalClose}
        message={'Message'}
      />,
    );

    expect(screen.queryByText('title')).toBeNull();
    expect(screen.queryByText('Message')).toBeNull();
    expect(container).toMatchSnapshot();
  });

  it('should close modal on click of close button  ', () => {
    const { container } = render(
      <ModalComponent
        title="title"
        isOpen={true}
        onModalClose={onModalClose}
        message={'Message'}
      />,
    );

    fireEvent.click(screen.getByText('Close'));

    expect(onModalClose).toHaveBeenCalledTimes(1);
  });
});
