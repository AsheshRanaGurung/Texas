import { useEffect, useState } from 'react'
import { Spinner, Center, Grid, GridItem, Button, Flex } from '@chakra-ui/react'
import axios from "axios"
import { BaseURL } from '../App'
import PostCard from './Cards'
import { useNavigate } from "react-router-dom"
const CardList = () => {
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
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
        <>
            {
                isLoading ?
                    (
                        <Center h='100dvh' color='white' >
                            < Spinner
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                            />
                        </Center >
                    )
                    : (
                        <>
                            <Flex justifyContent={"flex-end"}>
                                <Button onClick={(e) => {
                                    e.preventDefault()
                                    localStorage.removeItem("TexasToken");
                                    navigate("/login")
                                }}>Log out</Button>
                            </Flex>
                            <Grid templateColumns="repeat(3,1fr)" gap={2}>
                                {posts.map((post) => {
                                    return (
                                        <GridItem m={1} key={post.id}>
                                            <PostCard id={post.id} title={post.title} desc={post.body} />
                                        </GridItem>

                                    )
                                })}

                            </Grid>
                        </>)

            }
        </>
    )
}

export default CardList
