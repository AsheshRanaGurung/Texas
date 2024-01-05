import { useEffect, useState } from 'react'
import axios from "axios"
import { Text, Button, Input, Flex, Box, Grid, GridItem } from '@chakra-ui/react'
import './App.css'

const BaseURL = "https://jsonplaceholder.typicode.com"
function App() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`${BaseURL}/posts`).then(
            (res) => {
                // console.log(res.data)
                setPosts(res.data)
            }
        ).catch(
            (err) => console.log(err)
        )
    }, [])
    return (
        <>
            <Grid templateColumns="repeat(3,1fr)">
                {posts.map((post) => {
                    return (
                        <GridItem m={1} key={post.id}>
                            <Box p={2} sx={{ border: "1px solid black" }}>
                                <Text >
                                    Title: {post.title}
                                </Text>
                                <Text>
                                    Desc: {post.body}
                                </Text>
                            </Box>
                        </GridItem>

                    )
                    // console.log(post.title)

                })}
            </Grid>
        </>
    )
}

export default App
