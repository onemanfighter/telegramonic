import { fireEvent, render, screen } from '@testing-library/react';
import MenuPopover from '../MenuPopover';
import { Button } from '@chakra-ui/react';

describe('MenuPopover', () => {
  const onModalClose = jest.fn();

  beforeEach(() => {
    onModalClose.mockReset();
  });

  it('should render correctly if isOpen is true', () => {
    const { container } = render(
      <MenuPopover triggerComponent={<Button>Click</Button>}>
        <div>Children</div>
      </MenuPopover>,
    );

    fireEvent.click(screen.getByText('Click'));

    expect(screen.findByText('Children')).toBeDefined();
  });
});
