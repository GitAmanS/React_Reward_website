import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,  Stack,
  useColorModeValue, ButtonGroup,Icon} from '@chakra-ui/react';
import { Image, Text, Divider, Box , CardBody, Card, Heading,CardFooter, FormControl, FormLabel} from '@chakra-ui/react';
const challengesData = {
    physicalWorkout: [
      { id: 1, name: 'Push-ups', difficulty: 'Medium',fees:"400", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s',description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat." },
      { id: 2, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s',description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat." },
      { id: 3, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s',description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat." },
      { id: 4, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
      { id: 5, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
      { id: 6, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
      { id: 7, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
      { id: 8, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
      { id: 9, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
      { id: 10, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
      { id: 11, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
      { id: 12, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
      { id: 13, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
      { id: 14, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
      { id: 15, name: 'Running', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},

      // Add more physical workout challenges as needed
    ],
    gamingChallenges: [
      { id: 101, name: 'Complete Level 1', difficulty: 'Easy',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
      { id: 102, name: 'Score 100 points', difficulty: 'Medium',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
      { id: 103, name: 'Score 100 points', difficulty: 'Medium',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
      { id: 104, name: 'Score 100 points', difficulty: 'Medium', fees:"400", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat."},
      { id: 105, name: 'Score 100 points', difficulty: 'Medium',fees:"400",  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUz1yopHwGWCl1DKL-OrND3LQBTTRII6UlzraHoO2_g&s', description:"How to do push-up for beginners To do a standard push up, start by lying face down on the floor with hands slightly wider than shoulder-width. Raise your body off the floor by extending your arms. Make sure to keep your upper body and lower body in a straight line. Bring the body closer to the floor by bending your arms and repeat." },

      // Add more gaming challenges as needed
    ],
  };

  const Challenge = () => {
    const { challengeId } = useParams();
    const category = challengeId <= 100 ? 'physicalWorkout' : 'gamingChallenges';
  
    const selectedChallenge = challengesData[category]?.find(challenge => challenge.id.toString() === challengeId);
  
    const [isExpanded, setIsExpanded] = useState(false);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  
    const toggleDescription = () => {
      setIsExpanded(!isExpanded);
    };
  
    const toggleRegistrationForm = () => {
      setIsRegistrationOpen(!isRegistrationOpen);
    };
  
    const bgColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.600', 'white');
  
    return (
      <Box >
        {selectedChallenge ? (
          // <Box bg={bgColor}  borderRadius="15px">
          //   {/* Challenge details */}
          //   <Stack direction={['column', 'row']} spacing={4}>
          //     <Image
          //       src={selectedChallenge.image}
          //       alt={selectedChallenge.name}
          //       rounded="15px"
          //       objectFit="cover"
          //       w="1/2" // Set image width to half the container
          //       h={['auto', 250]} // Adjust height for different screen sizes
          //     />
          //     <Box pl={4} > {/* Add padding for content next to image */}
          //       <Stack spacing={2}>
          //         <Text fontSize="2xl" fontWeight="semibold" mb={2}>
          //           {selectedChallenge.name}
          //         </Text>
          //         <Text fontSize="md" color={textColor}>
          //           Description:
          //         </Text>
          //         <Text fontSize="md" color={textColor} mb={isExpanded ? 2 : 4}>
          //           {isExpanded
          //             ? selectedChallenge.description
          //             : `${selectedChallenge.description.slice(0, 150)}...`}
          //         </Text>
          //         <Button variant="outline" colorScheme="teal" size="sm" onClick={toggleDescription}>
          //           {isExpanded ? 'Read Less' : 'Read More'}
          //         </Button>
                  
          //       </Stack>
          //     </Box>
          //   </Stack>
  
          //   {/* Description and Registration */}
          //   <Divider my={4} />
          //   <Stack spacing={4} pt={4} pb={4}>
          //   <Stack direction="row" justifyContent="space-between" alignItems="center">
          //           <Text fontSize="md" color={textColor}>
          //             {`Difficulty: ${selectedChallenge.difficulty}`}
          //           </Text>
          //           {selectedChallenge.fees && (
          //             <Text fontSize="md" color={textColor}>
          //               {`Fees: ₹${selectedChallenge.fees}`}
          //             </Text>
          //           )}
          //         </Stack>
          //     <Button colorScheme="teal" size="lg" rounded="md" onClick={toggleRegistrationForm}>
          //       Register
          //     </Button>
          //   </Stack>
          // </Box>
          <Card maxW="3xl" mx={{base:4, md:"auto"}}  borderRadius="10px" bg={bgColor} mt={"10px"}> 
            <CardBody>
            <Image
                src={selectedChallenge.image}
                alt={selectedChallenge.name}
                rounded="15px"
                objectFit="cover"
                w="full" // Set image width to half the container
                h={['auto', 250]} // Adjust height for different screen sizes
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>{selectedChallenge.name}</Heading>
                
                   <Text fontSize="md" color={textColor} mb={isExpanded ? 2 : 4}>

                   <Text fontSize="md" color={textColor}>
                     Description:
                   </Text>
                  {selectedChallenge.description}
                     {/* {isExpanded
                       ? selectedChallenge.description
                       : `${selectedChallenge.description.slice(0, 150)}...`} */}
                   </Text>
                
              </Stack>
            </CardBody>
            
            <CardFooter display="flex" justifyContent="space-between">
            <Text color='blue.600' fontSize='2xl'>
                  {`Fees: ₹${selectedChallenge.fees}`}
                </Text>
              <ButtonGroup spacing='2'>

                <Button variant='solid' colorScheme='blue' onClick={toggleRegistrationForm}>
                  Register
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ) : (
          <Text fontSize="xl" textAlign="center">
            Challenge not found
          </Text>
        )}
  
  <Modal isOpen={isRegistrationOpen} onClose={toggleRegistrationForm} size="md" isCentered>
        <ModalOverlay />
        <ModalContent  m="2"  bg="white" borderRadius="xl" >
          <ModalHeader>
            Registration for {selectedChallenge.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              {/* Full Name Input */}
              <Stack direction="row" alignItems="center" spacing={2}>
                
                <FormControl>
                  
                  <FormLabel><Icon name="user" color="teal.500" /> Full Name:</FormLabel>
                  <Input type="text" rounded="md" placeholder="Enter your full name" />
                </FormControl>
              </Stack>
              
              {/* Email Input */}
              <Stack direction="row" alignItems="center" spacing={2}>
                
                <FormControl>
                  <FormLabel><Icon name="email" color="teal.500" /> Email ID:</FormLabel>
                  <Input type="email" rounded="md" placeholder="Enter your email address" />
                </FormControl>
              </Stack>

              {/* Fees (if applicable) */}
              {selectedChallenge.fees && (
                <Stack direction="row" alignItems="center" spacing={2}>
                  
                  <Text fontSize="md">
                     Fees: ₹ {selectedChallenge.fees}
                  </Text>
                </Stack>
              )}
            </Stack>
          </ModalBody>
          <ModalFooter display={"flex"} alignItems="center" justifyContent="center">
            <Button colorScheme="teal" onClick={toggleRegistrationForm}>
              Register Now
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>



      </Box>
    );
  };

  

export default Challenge;
