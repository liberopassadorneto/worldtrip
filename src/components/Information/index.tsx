import { Flex } from '@chakra-ui/react';
import React from 'react';
import { Item } from './Item';
import { ItemIcon } from './ItemIcon';

export function Information() {
  return (
    <Flex direction='row' align='center' justify='space-around'>
      <Item amount={50} text='países' />
      <Item amount={60} text='línguas' />
      <Item amount={50} text='países' />
      <ItemIcon />
    </Flex>
  );
}
