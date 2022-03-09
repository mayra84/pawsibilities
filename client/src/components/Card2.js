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
import CardCarousel2 from './CardCarousel2';



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

function Card2() {
    return (
        <Flex 
        // p={50} 
        alignItems="center" justifyContent="flex-start">
            <Box
            // mt={'-200'}
                borderRadius={'10'} 
                // border={'2px'} borderColor={'brand.201'}
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
                <CardCarousel2 />
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
                                Dog in Need
                            </Box>
                            <Box

                                pb={'1'}
                                fontSize="2xl"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                isTruncated>
                                Adorable Adoptee

                            </Box>
                            <Text pb={'2'}>
                            Lyiam is still available for adoption! He is a five year old lab mix. He gets along with other dogs, knows basic commands, and is potty trained. He is doing well with his foster but would love a forever home soon ❤️‍🩹
                            </Text>
                            <TestimonialAvatar
                                src={
                                    'https://pbs.twimg.com/profile_images/1459964963137540097/CNe5hgKB_400x400.jpg'
                                }
                            //   name={'WeRateDogs'}

                            />
                            <Link fontWeight={'bold'} href="https://twitter.com/15outof10/status/1495893143878877190">15/10</Link>
                            <TestimonialAvatarAltered title={'@15outof10'} />
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

export default Card2;
