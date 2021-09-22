import {
  Flex,
  SimpleGrid,
  Box,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export function Banner() {
  const isMobile = useBreakpointValue({ base: false, sm: true });

  return (
    <Flex
      w='100%'
      maxW={1480}
      h={['163px', '250px', '250px', '335px']}
      mx='auto'
      px='4'
      bgImage="url('/banner.png')"
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      <SimpleGrid flex='1' gap='4' minChildWidth='320px'>
        <Box py={['7', '20']} px={['0', '32']}>
          <Text fontSize={['xl', '4xl']} fontWeight='500' maxW={[240, 426]}>
            5 Continentes, infinitas possibilidades.
          </Text>
          <Text fontSize={['sm', 'xl']} mt={['2', '4']}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        {isMobile && (
          <Box>
            <Image
              src='/airplane.svg'
              alt='airplane'
              w={['300px', '417px']}
              transform='translateY(78px)'
            />
          </Box>
        )}
      </SimpleGrid>
    </Flex>
  );
}
