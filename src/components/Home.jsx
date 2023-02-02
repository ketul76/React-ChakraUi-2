import { Box, Container, Heading, Image, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"


const headingOptions = {
  pos: "absolute",
  left: "50%",
  top:"50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p:"4",
  size:"2xl"
}

function Home() {
  return (
    <>
      <Box>
        <MyCarousel /> 
        <Container maxWidth='container.xl' minH={"100vh"} p="16">
          <Heading textTransform={"uppercase"} py="2" w="fit-content" borderBottom={"2px solid"} m="auto">Services</Heading>
          <Stack h={"full"} p="4" alignItems={"center"} direction={["column","row"]}> 
            <Image h={["40","400"]} src={img5} filter={'hue-rotate(-130deg)'} />

            <Text letterSpacing={"widest"} textAlign="center" lineHeight="190%" p={["4","16"]}>
              Cloud gaming is a technology that allows users to play video games on a device by streaming them over the internet from a remote server rather than running them locally on the device.
              Cloud gaming services typically offer a wide range of games that can be played on various devices, including TVs, laptops, smartphones, and tablets. Cloud gaming brings numerous benefits to gamers.Access to a wide range of games: Cloud gaming services often offer a large library of games that can be played on demand without the need to purchase or download them individually.Compatibility with a wide range of devices: Cloud gaming services can be accessed on many devices, including those that may not have the hardware or software capabilities to run certain games natively.
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  )
};



const MyCarousel = () => (
  <Carousel 
  autoPlay
  infiniteLoop
  interval={1000}
  showStatus={false}
  showThumbs={false}
  showArrows={false}
  >
    <Box w={"full"} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={"blackAlpha.600"} color="white" {...headingOptions}>Watch The Future</Heading >
    </Box>

    <Box w={"full"} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={"blackAlpha.600"} color="white" {...headingOptions}>Future Is Game</Heading>
    </Box>

    <Box w={"full"} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={"blackAlpha.600"} color="white" {...headingOptions}>Gaming Future is Boom now</Heading>
    </Box>

    <Box w={"full"} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={"blackAlpha.600"} color="white" {...headingOptions}>NightLife Is Cool</Heading>
    </Box>



  </Carousel>
)

export default Home