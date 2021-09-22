import { Flex, useBreakpointValue, Image, Text } from '@chakra-ui/react';

interface TravelTypeProps {
  icon: string;
  text: string;
}

export function TravelType({ icon, text }: TravelTypeProps) {
  const isMobile = useBreakpointValue({ base: false, sm: true });

  return (
    <Flex align='center' justify='center' direction={['row', 'row', 'column']}>
      {isMobile ? (
        <Image src={`/icons/${icon}.svg`} w='80px' h='80px' mb='6' alt={text} />
      ) : (
        <Text color='yellow.400' fontSize='4xl'>
          •
        </Text>
      )}
      <Text
        fontWeight='600'
        color='gray.700'
        fontSize={['md', 'xl']}
        ml={['2', '0']}
      >
        {text}
      </Text>
    </Flex>
  );
}
