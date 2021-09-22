// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

export function Slider() {
  return (
    <Flex w='100%' maxW='1240px' mx='auto' mb='5' h='250px'>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <Flex
            direction='column'
            w='100%'
            h='100%'
            align='center'
            justify='center'
            bgImage='url(/europe.png)'
            bgRepeat='no-repeat'
            bgSize='cover'
            textAlign='center'
            bgPosition='center'
          >
            <Link href='/continent/europe'>
              <a>
                <Text fontWeight='700' fontSize={['xl', '5xl']} color='gray.50'>
                  Europa
                </Text>
                <Text
                  fontWeight='700'
                  fontSize={['md', '2xl']}
                  color='gray.50'
                  mt='3'
                >
                  O continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Flex
            direction='column'
            w='100%'
            h='100%'
            align='center'
            justify='center'
            bgImage='url(/europe.png)'
            bgRepeat='no-repeat'
            bgSize='cover'
            textAlign='center'
            bgPosition='center'
          >
            <Link href='/continent/europe'>
              <a>
                <Text fontWeight='700' fontSize={['xl', '5xl']} color='gray.50'>
                  Europa
                </Text>
                <Text
                  fontWeight='700'
                  fontSize={['md', '2xl']}
                  color='gray.50'
                  mt='3'
                >
                  O continente mais antigo
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
