import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/03/31/19/21/corgi-4988987_1280.jpg',
    'https://live.staticflickr.com/65535/51352284590_c37d8d1c8d_b.jpg',
    'https://live.staticflickr.com/65535/51243662812_cd24858a12_b.jpg',
    'https://cdn.pixabay.com/photo/2018/08/24/11/14/boxer-3627739_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/10/15/08/58/dog-5656369_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/02/13/11/26/dog-3994180_1280.jpg',
    'https://www.maxpixel.net/static/photo/1x/Welsh-Corgi-Pembroke-Corgi-Dog-Pet-Cute-Animal-4237619.jpg',
    'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/px657141-image-kwvxm781.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=2969861f941b5584a930089413667d4a',
    'https://www.maxpixel.net/static/photo/1x/Flower-Portrait-Dog-Rottweiler-Nature-Dogshooting-5290550.jpg',
    'https://cdn.pixabay.com/photo/2018/08/12/08/04/dog-3600325_1280.jpg',
    'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pu2352634-image-kwvy8lx7.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=1a8cabb8058fff8ea7a09e10645eaab0',
    'https://cdn.pixabay.com/photo/2020/06/21/14/04/border-collie-5324985_1280.jpg',
    'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/bs6704-image-kwvx3ahp.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=5244f1013dea25ef1c6b85e17e60b920',
    'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/bs1293-image-kwvyl7zx.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=04d2d99b6ca36d55250407e6c86f8df4',
    'https://www.maxpixel.net/static/photo/1x/Dog-Bulldog-Mammals-English-Portrait-Adorable-5349598.jpg',
    'https://media.istockphoto.com/photos/dalmatian-picture-id175453491?b=1&k=20&m=175453491&s=170667a&w=0&h=seboc-Fix0qXa4niZVgurxc7knEFTmYXrU2Xg1-R8ZM=',
    'https://cdn.pixabay.com/photo/2018/03/14/18/45/dog-3225999_1280.jpg',
    'https://www.maxpixel.net/static/photo/1x/Hunting-Dog-Pack-Dog-Portrait-Summer-Beagle-4168817.jpg',
    'https://www.maxpixel.net/static/photo/1x/Dog-Animal-Meadow-Corgi-Pet-Pembroke-Welsh-Corgi-5767407.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pu5U-pX2vFx3gvX2KQmS-YMOLVvLbCWIhA&usqp=CAU',
    'https://upload.wikimedia.org/wikipedia/commons/9/98/JMSDF_Military_working_dog_%E3%80%8CKouki%E3%80%8D.jpg',
    'https://www.maxpixel.net/static/photo/1x/Beagle-Dog-Animal-Race-Mammal-Hunting-Dog-Pet-4500928.jpg',
    'https://c0.wallpaperflare.com/preview/822/584/854/sheep-dog-german-german-shepherd-dog.jpg',
    'https://live.staticflickr.com/7066/27253432403_1e8977cd8b_b.jpg',
    'https://cdn3.eyeem.com/thumb/e43e0eece0dedaa3cd3dc8e4410d9cf6370e6c1e-1494109291723/w/800',
    'https://c1.wallpaperflare.com/preview/370/173/76/puppy-pet-dog-animal.jpg',
    'https://www.maxpixel.net/static/photo/1x/Cute-Animal-Cavalier-King-Charles-Spaniel-Dog-Pet-1844929.jpg',
  ];

  return (
    <Box
      position={'relative'}
      height={'100vh'}
      width={'full'}
      // objectFit={'cover'}
      // boxSize={'100%'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'100vh'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}