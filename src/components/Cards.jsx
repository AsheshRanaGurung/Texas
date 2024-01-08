import React from "react";
import { Text, useDisclosure, VStack, Flex, Button, Card as ChakraCard, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup, Modal, ModalBody, ModalContent, ModalHeader, ModalCloseButton, ModalOverlay, } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BaseURL } from "../App";
import toast from "react-hot-toast"
const PostCard = ({ id, title, desc }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const navigate = useNavigate()
    const deletePost = () => {
        axios.delete(`${BaseURL}/posts/${id}`,
            // {
            //     header:{
            //         Authorization:`Bearer ${token}`
            //     }
            // }
        ).then(
            () => {
                toast.success("Delete successfully")
                onClose()
            }
        ).catch(() => {
            toast.error("Delete failed")

        })
    }
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
                <ButtonGroup w={"100%"}>
                    <Flex
                        sx={{
                            w: "inherit",
                            justifyContent: "space-between"
                        }}
                    >

                        <Button variant='solid' colorScheme='blue'
                            onClick={() => navigate(`/post/${id}`)}
                        >
                            View Details
                        </Button>
                        <Button variant='outline' colorScheme="red"
                            onClick={onOpen}
                        >
                            Delete
                        </Button>
                    </Flex>
                    {/* Follow DRY */}
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent py={2} >
                            <ModalHeader>Modal Title</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                {/* <Flex flexDirection={"columns"}>

                             </Flex> */}
                                <VStack>
                                    <Text py={3}>  Are you sure you want to delete <b>{title.slice(0, 20)}</b>?</Text>
                                    <Flex w="100%" justifyContent={"space-around"}>
                                        <Button variant={"solid"} colorScheme="red"

                                            onClick={deletePost}>Delete</Button>
                                        <Button variant={"outline"} colorScheme="teal"
                                            onClick={onClose}
                                        >Cancel</Button>
                                    </Flex>

                                </VStack>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </ButtonGroup>
            </CardFooter>
        </ChakraCard >
    )
};

export default PostCard;
