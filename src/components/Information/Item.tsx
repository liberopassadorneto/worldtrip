import { Flex, Text, Box } from '@chakra-ui/react';
import { children } from 'dom7';
import React, { ReactNode } from 'react';

interface ItemProps {
  amount: number;
  text: string;
  children?: ReactNode;
}

export function Item({ amount, text, children }: ItemProps) {
  return (
    <>
      <Flex direction='row' justify='center' align='flex-start'>
        <Box>
          <Text color='yellow.400' fontWeight='600' fontSize={['xl', '3xl']}>
            {amount}
          </Text>
          <Box>
            <Text color='gray.400' fontWeight='600'>
              {text} {children}
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
