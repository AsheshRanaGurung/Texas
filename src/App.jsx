import { useEffect, useState } from 'react'
import axios from "axios"
import { Text, Button, Spinner, Center, Grid, GridItem, Card, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup } from '@chakra-ui/react'
import './App.css'
import PostCard from './components/Cards'

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
                            <PostCard title={post.title} desc={post.body} />
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

