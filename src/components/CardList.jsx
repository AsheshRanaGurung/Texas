import { useEffect, useState } from 'react'
import { Spinner, Center, Grid, GridItem } from '@chakra-ui/react'
import axios from "axios"
import { BaseURL } from '../App'
import PostCard from './Cards'

const CardList = () => {
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
                        <Grid templateColumns="repeat(3,1fr)" gap={2}>
                            {posts.map((post) => {
                                return (
                                    <GridItem m={1} key={post.id}>
                                        <PostCard id={post.id} title={post.title} desc={post.body} />
                                    </GridItem>

                                )
                            })}
                            )
                        </Grid>)

            }
        </>
    )
}

export default CardList
