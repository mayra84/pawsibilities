import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/reducers/userReducer';
import { Link as RouterLink, useNavigate } from 'react-router-dom'
// import SmoothList from 'react-smooth-list';
import React from 'react';

export default function WithSubnavigation(props) {

    const currentUser = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout)
        navigate("/")
    }

    const { isOpen, onToggle } = useDisclosure();
    const navigate = useNavigate();

    return (
        <Box>
            <Flex

                boxShadow={'lg'}
                bgColor={'rgba(255 255 255 /70%)'}
                backdropFilter={'blur(2px)'}
                // bg={useColorModeValue('white', 'gray.800')}
                // color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                // borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex

                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Image
                    cursor={'pointer'}
                        boxShadow={'lg'}
                        onClick={e => { navigate('/') }}
                        // isActive={'true'}
                        alignSelf={'left'}
                        borderRadius={'75'}
                        boxSize='125'
                        objectFit='fill'
                        src='../Pawsibilities_Logo_3.png'
                        alt='Pawsibilities' />

                    {/* <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}>
                        Logo
                    </Text> */}

                    <Flex display={{ base: 'none', md: 'flex' }} m={'0 auto'}>
                        <DesktopNav />
                    </Flex>
                </Flex>


                {/* ADD LINKS TO BUTTONS */}


                {currentUser ? (
                    <>
                        <Stack
                            flex={{ base: 1, md: 0 }}
                            justify={'flex-end'}
                            direction={'row'}
                            spacing={6}>
                            <Button colorScheme={'teal'}
                                onClick={handleLogout}
                                as={'a'}
                                fontSize={'sm'}
                                fontWeight={400}
                                variant={'outline'}
                                href={'#'}>
                                Logout
                            </Button>
                        </Stack>
                    </>
                ) : (
                    <>
                        <Stack
                            flex={{ base: 1, md: 0 }}
                            justify={'flex-end'}
                            direction={'row'}
                            spacing={6}>
                            {/* <Button
                                as={'a'}
                                fontSize={'sm'}
                                fontWeight={400}
                                variant={'link'}
                                href={'#'}>
                                Sign In
                            </Button> */}
                            <Link as={RouterLink} to={"/login"}>
                                <Button
                                    // linkHoverColor={'none'}
                                    shadow={'lg'}
                                    display={{ base: 'none', md: 'inline-flex' }}
                                    fontSize={'sm'}
                                    fontWeight={600}
                                    color={'white'}
                                    bg={'brand.200'}
                                    href={'#'}
                                    _hover={{
                                        bg: 'teal.200',
                                    }}>
                                    Sign in
                                </Button>
                            </Link>
                        </Stack>
                    </>
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        // <SmoothList transitionDuration={1200} delay={200}>
        <Stack justify={'center'}
            align={'center'} direction={'row'} spacing={28}>
            <Link as={RouterLink} to="/">Home</Link>
            <Link as={RouterLink} to="/healthcalendar">Calendar</Link>
            <Link as={RouterLink} to="/discover">Discover</Link>
            <Link as={RouterLink} to="/dogprofile">Dog Profile</Link>
            <Link as={RouterLink} to="/aboutus">About M&amp;Z</Link>
            {/* {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))} */}
        </Stack>
        // </SmoothList>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'pink.400' }}
                        fontWeight={500}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};



const NAV_ITEMS = [
    {
        label: 'Calendar',
        children: [
            {
                label: 'Explore Design Work',
                subLabel: 'Trending Design to inspire you',
                href: '#',
            },
            {
                label: 'New & Noteworthy',
                subLabel: 'Up-and-coming Designers',
                href: '#',
            },
        ],
    },
    {
        label: 'Dog Profile',
        children: [
            //maybe have several dog options?
            {
                label: 'Dog 1',
                subLabel: 'Find your dream design job',
                href: '/dogprofile',
                // href: <Link as={RouterLink} to="/dogprofile"></Link>,
            },
            {
                label: 'Dog 2',
                subLabel: 'An exclusive list for contract work',
                href: '#',
            },
        ],
    },
    {
        label: 'Discover',
        children: [
            //maybe have several dog options?
            {
                label: 'Dog Parks',
                subLabel: 'Find your dream design job',
                href: '#',
            },
            {
                label: 'Adoption',
                subLabel: 'Find your dream design job',
                href: '#',
            },
        ],
    },
    {
        label: 'About M&Z',
        href: '#',
    },
];