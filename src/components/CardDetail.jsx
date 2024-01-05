import React, { useEffect, useState } from 'react'
import { Text, Button, Card, CardBody, Image, Stack, Heading, CardFooter, Modal, ModalBody, ModalContent, ModalHeader, ModalCloseButton, ModalFooter, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import { BaseURL } from '../App'
import { useParams } from "react-router-dom"
import { toast } from 'react-toastify';
const CardDetail = () => {
    const { id } = useParams()
    const [postDetail, setPostDetail] = useState({})
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {

        axios.get(`${BaseURL}/posts/${id}`).then(
            (res) => {
                // toast.success('Details fetched Successfully');
                setPostDetail(res.data)
            }
        ).catch(
            (err) => {

            }
        )
    }, [])
    console.log(postDetail)
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
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        this is modal
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CardDetail