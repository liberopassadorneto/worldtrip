import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

interface PopoverStyledProps {
  bodyText: string;
}

export function PopoverStyled({ bodyText }: PopoverStyledProps) {
  return (
    <Popover placement='top'>
      <PopoverTrigger>
        <span>
          <InfoOutlineIcon w={3} h={3} color='gray.400' />
        </span>
      </PopoverTrigger>
      <PopoverContent bg='gray.700' color='yellow.400'>
        <PopoverArrow bg='gray.700' />
        <PopoverCloseButton />
        <PopoverBody fontSize={['sm', 'md']}>{bodyText}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
