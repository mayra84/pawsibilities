import SmoothList from 'react-smooth-list';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Divider,
    StackItem,
} from '@chakra-ui/react';
import React from 'react';

export default function CreatorProfiles() {
    
    return (
            <SmoothList transitionDuration={1200} delay={200}>
        {/* <Center p={'10'} height='50vh'> */}
            {/* <Center py={6}> */}
            <Stack direction={{base: 'column', lg: 'row'}} justify={{base: 'center', md: 'space-around'}} alignItems={{base: 'center', lg: 'flex-start'}}>
                {/* <StackItem> */}
                <Box
                direction={{base: 'row', lg: 'column'}}
                w={'320px'}
                    maxW={'95%'}
                    // w={'full'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={{base: 5, lg: 10}}
                    textAlign={'center'}>
                    <Avatar
                        size={'xl'}
                        src={
                            'https://cdn.pixabay.com/photo/2020/06/21/14/04/border-collie-5324985_1280.jpg'
                        }
                        alt={'Avatar Alt'}
                        mb={4}
                        pos={'relative'}
                    />
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        Mayra Estrella
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} mb={4}>

                    </Text>
                    <Text
                        textAlign={'center'}
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={2}>
                        I'm the "M" in M&amp;Z!
                        <br></br>
                        My inspiration for Pawsibilities is born from my love for my three dogs: Dalton, Emma, and Cooper. I wanted to make sure to always be the most responsible version of myself for them. I hope it helps other pet owners in proving their love and care for their Pawesome Pals.
                        {/* came from taking my eldest dog, Dalton, to the vet. We needed to give very precise information about Dalton's timeline and I realized.. I couldn't exactly remember. I was profoundly disappointed in my lack of responsibility. This was the exact moment I thought of Pawsibilities.  */}
                    </Text>

                    
                </Box>

                <Divider lineHeight={'20'} orientation='vertical' borderColor={'gray'} mx={'20%'} />

                <Box
                direction={{base: 'row', lg: 'column'}}
                w={'320px'}
                maxW={'95%'}
                    bg={useColorModeValue('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    p={{base: 5, lg: 10}}
                    textAlign={'center'}>
                    <Avatar
                        size={'xl'}
                        src={
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9pu5U-pX2vFx3gvX2KQmS-YMOLVvLbCWIhA&usqp=CAU'
                        }
                        alt={'Avatar Alt'}
                        mb={4}
                        pos={'relative'}
                    />
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
                        Zaria Mcburrows
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} mb={4}>

                    </Text>
                    <Text
                        textAlign={'center'}
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}>
                            My inspiration came from 
                            seeing adoption centers overflow with dogs people returned once they had to go back to work in person. By incorporating certain technologies, Pawsibilities makes it easier to find adoption centers near you, among other things.
                            {/* some projects that used Google Maps API and a Weather API, and we got the idea to incorporate those into our application to help users find local dog parks, veterinarians, and adoption centers */}
                    </Text>
                </Box>
                {/* </StackItem> */}
            {/* </Center> */}
        {/* </Center> */}
        </Stack>
                </SmoothList>
    );
}