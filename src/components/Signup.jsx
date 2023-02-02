import { Button, Container, Heading, Input, Text, VStack,Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <Container maxW={"container.xl"} h="100vh" p="16">
    <form action="">
      <VStack alignItems={"stretch"} spacing="8" w={["full",96]} m="auto" my={"16"}>
          <Heading textAlign={"center"}>Video Hub</Heading>
          <Avatar alignSelf={"center"} boxSize="24"/>
          <Input placeholder='Name' type={"text"} required focusBorderColor={'purple.500'} />
        
        <Input placeholder='Email' type={"email"} required focusBorderColor={'purple.500'} />

        <Input placeholder='Password' type={"password"} required focusBorderColor={'purple.500'} />

        <Button colorScheme={"purple"} type="submit" >Sign Up</Button>

        <Text textAlign={"end"}>
          Already Have an Account {""} 
        <Button variant={"link"} alignSelf="flex-end">
          <Link to={"/login"}>Log In</Link>
        </Button></Text>
        
      </VStack>
    </form>
  </Container>
  )
}

export default Signup;