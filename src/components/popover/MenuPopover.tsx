import {
  Box,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { PopOverProps } from './types';

const MenuPopover = ({ children, triggerComponent }: PopOverProps) => {
  return (
    <Popover placement="bottom" closeOnBlur={true}>
      <PopoverTrigger>{triggerComponent}</PopoverTrigger>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverArrow bg="blue.800" paddingBottom={2} />
        <Box padding={2} width={'100%'}>
          {children}
        </Box>
      </PopoverContent>
    </Popover>
  );
};

export default MenuPopover;
