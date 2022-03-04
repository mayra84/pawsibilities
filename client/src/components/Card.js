import {
    Avatar,
    Text,
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    Link,
    chakra,
    Tooltip,
    Stack,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import CardCarousel from './CardCarousel';

//   const data = {
//     isNew: true,
//     imageURL:
//       'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
//     name: 'Wayfarer Classic',
//     price: 4.5,
//     rating: 4.2,
//     numReviews: 34,
//   };

//   interface RatingProps {
//     rating: number;
//     numReviews: number;
//   }

//   function Rating({ rating, numReviews }) {
//     return (
//       <Box d="flex" alignItems="center">
//         {Array(5)
//           .fill('')
//           .map((_, i) => {
//             const roundedRating = Math.round(rating * 2) / 2;
//             if (roundedRating - i >= 1) {
//               return (
//                 <BsStarFill
//                   key={i}
//                   style={{ marginLeft: '1' }}
//                   color={i < rating ? 'teal.500' : 'gray.300'}
//                 />
//               );
//             }
//             if (roundedRating - i === 0.5) {
//               return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
//             }
//             return <BsStar key={i} style={{ marginLeft: '1' }} />;
//           })}
//         <Box as="span" ml="2" color="gray.600" fontSize="sm">
//           {numReviews} review{numReviews > 1 && 's'}
//         </Box>
//       </Box>
//     );
//   }

const TestimonialAvatar = ({
    src,
    name,
    title,

}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>
            <Avatar src={src} alt={name} mb={2} />
            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};


const TestimonialAvatarAltered = ({

    name,
    title,

}) => {
    return (
        <Flex align={'center'} mt={8} direction={'column'}>

            <Stack spacing={-1} align={'center'}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};

function Card() {
    return (
        <Flex p={50} alignItems="center" justifyContent="flex-start">
            <Box
                borderRadius={'10'} border={'2px'} borderColor={'brand.201'}
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                // borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                {/* {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )} */}

                {/* <Stack direction={'row'}> */}
                <CardCarousel />
                {/* <Image objectFit={'fill'}
            src={'https://pbs.twimg.com/media/FM4eMpZUYAYWLfN?format=jpg&name=large'}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />
          <Image src={'https://pbs.twimg.com/media/FM4eMpSVQAA3cYM?format=jpg&name=large'} /> */}
                {/* </Stack> */}
                <Box p="3" >

                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Stack direction={'column'}>
                            <Box
                                fontSize="lg"
                                fontWeight="light"
                                as="h4"
                                lineHeight="tight"
                                isTruncated>
                                Dog of the Week
                            </Box>
                            <Box

                                pb={'1'}
                                fontSize="2xl"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                isTruncated>
                                The Banana Bandit

                            </Box>
                            <Text pb={'2'}>
                                This is Vixen. He really likes bananas. Steals them when he thinks nobody's watching. 13/10 opportunistic as h*ck
                            </Text>
                            <TestimonialAvatar
                                src={
                                    'https://pbs.twimg.com/profile_images/1478141668159148033/IOD8SZvx_400x400.jpg'
                                }
                            //   name={'WeRateDogs'}

                            />
                            <Link fontWeight={'bold'} href="https://twitter.com/dog_rates/status/1499168931671511045?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet">WeRateDogs</Link>
                            <TestimonialAvatarAltered title={'@dog_rates'} />
                        </Stack>
                    </Flex>


                    <Flex justifyContent="space-between" alignContent="center">
                        {/* <Rating rating={'13/10'} /> */}


                    </Flex>
                </Box>
            </Box>
        </Flex>
    );
}

export default Card;





// import React from 'react'
// import { Image } from '@chakra-ui/react'

// function Card() {
//   return (
//     <div>
//         <Image src={}
//         />
//     </div>
//   )
// }

// export default Card