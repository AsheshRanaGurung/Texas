import React from 'react'
import { Box, Flex, Text, Input, Button, HStack } from '@chakra-ui/react'
const Login = () => {
    const defaultValues = {
        email: "",
        password: ""
    }
    return (
        <Box
            height={'100vh'}
            display="flex"
            justifyContent={'center'}
            alignItems="center"
        >
            <Flex w={'100rem'} flexDirection={{ base: 'column-reverse', md: 'row' }}>
                <form>
                    <Flex flexDirection={"column"}>
                        {/* <Flex flexDirection={"row"} my={2} alignItems={"center"}> */}
                        <HStack my={2} alignItems={"center"}>

                            <Text>Email:</Text>
                            <Input />
                        </HStack>
                        <HStack my={2} alignItems={"center"}>
                            <Text>Password:</Text>
                            <Input />
                        </HStack>
                        <Button>Submit</Button>
                    </Flex>
                </form>
            </Flex >
        </Box >
    )
}

export default Login