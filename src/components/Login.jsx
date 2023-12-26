import React from 'react'
import { Box, Flex, Text, Input, Button, HStack } from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
const Login = () => {
    const LoginDefaultValues = {
        email: "",
        password: ""
    }
    const schema = yup.object().shape({
        email: yup.string().required('Email is required'),
        password: yup.string().required('Password is required'),
    });
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: LoginDefaultValues,
        resolver: yupResolver(schema)
    })
    const loginSubmit = async (data) => {

        const response = await axios.post(" https://api.escuelajs.co/api/v1/auth/login", data)
        console.log(response.status)
        if (response?.data) {
            const token = response.data.access_token
            localStorage.setItem("TexasToken", token)
            toast.success("User validated successfully")
            navigate("/")

        } else {
            toast.error("Something went wrong")
        }

    }
    return (
        <Box
            height={'100vh'}
            display="flex"
            justifyContent={'center'}
            alignItems="center"
        >
            <Flex w={'100rem'} flexDirection={{ base: 'column-reverse', md: 'row' }}>
                <form onSubmit={handleSubmit(loginSubmit)}>
                    <Flex flexDirection={"column"}>
                        <HStack my={2} alignItems={"center"}>

                            <Text>Email:</Text>
                            <Flex flexDirection={"column"}>
                                <Input {...register("email")} />
                                {errors?.email && <Text color="red">{errors.email.message}</Text>}
                            </Flex>
                        </HStack>
                        <HStack my={2} alignItems={"center"}>
                            <Text>Password:</Text>
                            <Flex flexDirection={"column"}>
                                <Input type="password" {...register("password")} />
                                {errors?.password && <Text color="red">{errors.password.message}</Text>}
                            </Flex>
                        </HStack>
                        <Button type="submit">Submit</Button>
                    </Flex>
                </form>
            </Flex >
        </Box >
    )
}

export default Login