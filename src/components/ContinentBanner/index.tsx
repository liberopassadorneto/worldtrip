import { Flex, Text } from '@chakra-ui/react';

export function ContinentBanner() {
  return (
    <Flex
      w='100%'
      h={['150px', '300px', '500px']}
      px={['0', '0', '36']}
      pt={['0', '0', '72']}
      bgImage='url(/london-bg.jpg)'
      bgPosition='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      align='center'
      justify={['center', 'center', 'flex-start']}
    >
      <Text
        textAlign={['center', 'left']}
        color='gray.50'
        fontWeight='600'
        fontSize={['lg', 'lg', '4xl']}
      >
        Europa
      </Text>
    </Flex>
  );
}
