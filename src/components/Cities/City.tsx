import { Flex, Text, Image, Box } from '@chakra-ui/react';

interface CityProps {
  city: string;
  country: string;
}

export function City({ city, country }: CityProps) {
  return (
    <>
      <Box px={['4', '8']} borderRadius='4px' overflow='hidden'>
        <Image src={`/${city}.png`} alt={city} w='100%' h='170px' />
        <Flex
          py={['4', '8']}
          align='center'
          justify='space-around'
          bg='white'
          border='1px'
          borderColor='yellow.400'
          borderTop='0'
        >
          <Flex direction='column'>
            <Text color='gray.400' fontWeight='600' fontSize='lg'>
              {city}
            </Text>
            <Text
              mt='2'
              color='gray.400'
              fontWeight='400'
              fontSize='md'
              textTransform='uppercase'
            >
              {country}
            </Text>
          </Flex>
          <Image
            src={`/${country}-flag.png`}
            alt='Flag'
            w='30px'
            h='30px'
            borderRadius='50%'
            objectFit='cover'
          />
        </Flex>
      </Box>
    </>
  );
}
