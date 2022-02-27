import {
    CheckboxGroup,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Textarea,
    flexbox,
} from '@chakra-ui/react';
import React from 'react'

function HealthLog() {
    return (
        <div>

            <Stack spacing={8} mx={'auto'} py={12} px={6}>
                <Stack align={'center'}>


                    <Box
                        boxShadow={'lg'}
                        bgColor={'rgba(255 255 255 /90%)'}
                        backdropFilter={'blur(2px)'}
                        borderRadius={'10'} border={'2px'} color={'brand.201'}
                        rounded={'lg'}
                        //   bg={useColorModeValue('white', 'gray.700')}
                        p={12}>
                        <Stack spacing={4}>
                            <Heading mb={'10'} fontSize={'4xl'} color={'black'}>Log your dog's health for today</Heading>
                            <FormControl id="mood">
                                <FormLabel fontSize={'2xl'} color={'black'}>Mood</FormLabel>
                                <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                    <Stack mx={'8'} mt={'8'} mb={'10'} spacing={[1, 5]} direction={['column', 'row']}>
                                        <Checkbox value='happy'>Happy</Checkbox>
                                        <Checkbox value='calm'>Calm</Checkbox>
                                        <Checkbox value='energetic'>Energetic</Checkbox>
                                        <Checkbox value='sad'>Sad</Checkbox>
                                        <Checkbox value='anxious'>Anxious</Checkbox>
                                        <Checkbox value='apathetic'>Apathetic</Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                            </FormControl>
                            <FormControl id="physicalObservations">
                                <FormLabel fontSize={'2xl'} color={'black'}>Physical Observations</FormLabel>
                                <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                    <Stack mx={'8'} mt={'8'} mb={'10'} spacing={[1, 5]} direction={['column', 'row']}>
                                        <Checkbox value='limping'>Limping</Checkbox>
                                        <Checkbox value='abnormalAppetite'>Abnormal Appetite</Checkbox>
                                        <Checkbox value='nausea'>Nausea</Checkbox>
                                        <Checkbox value='constipation'>Constipation</Checkbox>
                                        <Checkbox value='irregular bowel movement'>Irregular Bowel Movement</Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                            </FormControl>
                            <FormControl id="activity">
                                <FormLabel fontSize={'2xl'} color={'black'}>Activity</FormLabel>
                                <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
                                    <Stack mx={'8'} mt={'8'} mb={'10'} spacing={[1, 5]} direction={['column', 'row']}>
                                        {/* when option clicked, ask to input distance/time */}
                                        <Checkbox value='walk'>Walk</Checkbox>
                                        <Checkbox value='park'>Park</Checkbox>
                                        <Checkbox value='run'>Run</Checkbox>
                                        <Checkbox value='fetch'>Played Fetch</Checkbox>
                                    </Stack>
                                </CheckboxGroup>
                            </FormControl>



                            {/* TODO:
ADD PICTURES FOR THAT DAY */}



                            <FormControl id="other">
                                <FormLabel fontSize={'2xl'} color={'black'} mb={'5'}>Other Observations</FormLabel>
                                <Textarea placeholder='Enter observations here' />
                            </FormControl>

                            <Box alignSelf={'flex-end'} spacing={10}>
                                <Button
                                    marginTop={'10'}
                                    colorScheme={'teal'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'teal.200',
                                    }}>
                                    Submit
                                </Button>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
            {/* </Flex> */}
        </div>
    )
}

export default HealthLog