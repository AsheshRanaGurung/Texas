import React from "react";
import { Text, Button, Card as ChakraCard, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
const PostCard = ({ id, title, desc }) => {
    const navigate = useNavigate()
    return (
        <ChakraCard maxW='sm' height={"34.5rem"}>
            <CardBody>
                <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title.slice(0, 30)}</Heading>
                    <Text>
                        {desc.slice(0, 100)}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        $450
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'
                        onClick={() => navigate(`/post/${id}`)}
                    >
                        View Details
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </ChakraCard>
    )
};

export default PostCard;
