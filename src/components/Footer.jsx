import { Box, Button, Heading, HStack, Input, Stack, VStack,Text } from "@chakra-ui/react";
import {AiOutlineSend} from "react-icons/ai"

function Footer(){
  return(
    <>
      <Box bgColor={"blackAlpha.900"} minH="40" p="16" color={"white"}>
          <Stack direction={["column","row"]}>
            <VStack alignItems={"stretch"} w="full" px="4">
              <Heading size="md" textTransform={"uppercase"} textAlign={["center","left"]}>Subscibe To Get Updates</Heading>
              <HStack borderBottom={"2px solid white"} py="2">
                <Input placeholder="Enter Email Here" border={"none"} borderRadius="none" outline={"none"}  />
                <Button padding={"0"} colorScheme="purple" variant={"ghost"}
                borderRadius="0 20px 20px 0">
                    <AiOutlineSend size={"20"} />
                </Button>
              </HStack>
            </VStack>

            <VStack w="full" borderLeft={["none","1px solid white"]}
            borderRight={["none","1px solid white"]} >
              <Heading size={"md"} textTransform="uppercase" textAlign={"center"}>Video Hub</Heading>
              <Text>All rights Reserved</Text>
            </VStack>

            <VStack w="full">
              <Heading  size={"md"} textTransform="uppercase" >
                Social Media
              </Heading>
              <Button variant={"link"} colorScheme="white">
                <a href="https://www.youtube.com" target="blank">
                  Youtube
                </a>
              </Button>
              <Button variant={"link"} colorScheme="white">
                <a href="https://www.instagram.com" target="blank">
                  Instagram
                </a>
              </Button>
              <Button variant={"link"} colorScheme="white">
                <a href="https://www.linkdin.com" target="blank">
                  Linkdin
                </a>
              </Button>
            </VStack>
          </Stack>
      </Box>
    </>
  )
}

export default Footer;