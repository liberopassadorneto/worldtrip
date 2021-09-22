import { Flex, Image, Grid } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { ChevronLeftIcon } from '@chakra-ui/icons';

export function Header() {
  const { asPath } = useRouter();
  const isHomePage = asPath === '/';

  return (
    <Flex
      as='header'
      w='100%'
      h={['50px', '100px']}
      align='center'
      justify='center'
      bg='white'
    >
      <Grid
        w='100%'
        h='100%'
        maxW='1160px'
        alignItems='center'
        justifyContent='center'
        templateColumns='repeat(3, 1fr)'
      >
        {!isHomePage && (
          <Link href='/' passHref>
            <ChevronLeftIcon
              w={[4, 8]}
              h={[4, 8]}
              color='gray.900'
              justifySelf='center'
            />
          </Link>
        )}

        <Image
          w={['81px', '184px']}
          src='/logo.svg'
          alt='worldtrip'
          gridColumn='2'
          justifySelf='center'
        />
      </Grid>
    </Flex>
  );
}
