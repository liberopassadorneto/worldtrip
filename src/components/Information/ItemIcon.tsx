import { Flex, HStack } from '@chakra-ui/react';
import { Item } from './Item';
import { PopoverStyled } from '../Popover';

export function ItemIcon() {
  return (
    <Flex
      direction='column'
      justify='flex-end'
      align={['flex-start', 'flex-start', 'flex-end']}
    >
      <HStack>
        <Item amount={100} text='cidades +100'>
          <PopoverStyled bodyText='Roma, Paris, Londres e Chile' />
        </Item>
      </HStack>
    </Flex>
  );
}
