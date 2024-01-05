import { useEffect, useState } from 'react'
import axios from "axios"
import { Text, Button, Spinner, Center, Grid, GridItem, Card, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup } from '@chakra-ui/react'
import './App.css'

const BaseURL = "https://jsonplaceholder.typicode.com"
function App() {
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get(`${BaseURL}/posts`).then(
            (res) => {
                // console.log(res.data)
                setPosts(res.data)
                setIsLoading(false)
            }
        ).catch(
            (err) => {
                console.log(err)
                setIsLoading(false)
            }
        )
    }, [])
    return (
        <>{isLoading ?
            <Center h='100dvh' color='white'>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </Center>
            :
            <Grid templateColumns="repeat(3,1fr)" gap={2}>
                {posts.map((post) => {
                    return (
                        <GridItem m={1} key={post.id}>
                            <Card maxW='sm' height={"34.5rem"}>
                                <CardBody>
                                    <Image
                                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                    />
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md'>{post.title.slice(0, 30)}</Heading>
                                        <Text>
                                            {post.body.slice(0, 100)}
                                        </Text>
                                        <Text color='blue.600' fontSize='2xl'>
                                            $450
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='solid' colorScheme='blue'>
                                            Buy now
                                        </Button>
                                        <Button variant='ghost' colorScheme='blue'>
                                            Add to cart
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </GridItem>

                    )
                    // console.log(post.title)

                })}
            </Grid>
        }

        </>
    )
}

export default App

