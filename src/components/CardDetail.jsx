import React, { useEffect, useState } from 'react'
import { Text, Flex, Textarea, Button, Card, CardBody, Image, Stack, Heading, CardFooter, Modal, ModalBody, ModalContent, ModalHeader, ModalCloseButton, Spinner, ModalOverlay, useDisclosure, Input } from '@chakra-ui/react'
import axios from 'axios'
import { BaseURL } from '../App'
import { useParams } from "react-router-dom"
import toast from 'react-hot-toast';
const CardDetail = () => {

    const { id } = useParams()
    const [postDetail, setPostDetail] = useState({})
    const [loading, setLoading] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const formSubmit = async(e) => {
    const formSubmit = (e) => {
        e.preventDefault()
        // const response =await axios.put(`${BaseURL}/post/${id}`, postDetail)
        setLoading(true)
        axios.put(`${BaseURL}/posts/${id}`, postDetail).then(
            () => {
                setLoading(false)
                toast.success("Successfully edited data")
                onClose()
            }
        ).catch(() => {
            setLoading(false)
            toast.error("Edit failed")
        })
    }
    useEffect(() => {
        axios.get(`${BaseURL}/posts/${id}`).then(
            (res) => {
                setPostDetail(res.data)
                toast.success('Details fetched Successfully');
            }
        ).catch(
            (err) => {
                toast.error("API failed")

            }
        )
    }, [])
    return (
        <>

            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{postDetail?.title}</Heading>

                        <Text py='2'>
                            {postDetail?.body}
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='blue' onClick={onOpen}>
                            Edit
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent py={2}>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form>
                            <Flex gap={2} flexDirection={"column"}>
                                <Text>Title:</Text>
                                <Input
                                    value={postDetail.title}
                                    onChange={(e) => {
                                        setPostDetail({ ...postDetail, title: e.target.value })
                                    }}
                                    placeholder={"Enter new title"} />
                                <Text>Descrption:</Text>
                                <Textarea
                                    value={postDetail.body}
                                    onChange={(e) => {
                                        setPostDetail({ ...postDetail, body: e.target.value })
                                    }}
                                    placeholder={"Enter new desc"} />
                                <Button type="submit" onClick={(e) => formSubmit(e)}>{loading ? < Spinner
                                    thickness='1px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    size='sm'
                                /> : "submit"}</Button>
                            </Flex>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CardDetail