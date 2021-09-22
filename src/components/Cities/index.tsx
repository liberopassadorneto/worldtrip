import { Grid, Heading } from '@chakra-ui/react';
import { City } from './City';

export function Cities() {
  return (
    <>
      <Heading
        fontWeight='500'
        color='gray.500'
        fontSize={['xl', '3xl']}
        mb='10'
        mt='5'
      >
        Cidades +100
      </Heading>
      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3,1fr)']}
        gap={['20px', '45px']}
        alignItems='center'
        justifyContent='center'
        px={['30px', '0']}
      >
        <City city='london' country='uk' />
        <City city='paris' country='fr' />
        <City city='rome' country='it' />
      </Grid>
    </>
  );
}
