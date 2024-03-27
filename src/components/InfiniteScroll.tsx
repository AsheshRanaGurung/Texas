import React, { useState, useEffect, useRef, useCallback } from "react";
import { Text ,Image} from "@chakra-ui/react";

const InfiniteScroll = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=5`);
      const data = await response.json();
  
      setItems(prevItems => [...prevItems, ...data]);
      setPage(prev=>prev+1)
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    fetchData();
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  const observerTarget = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         if (entries[0].isIntersecting) {

//           fetchData();
//       setPage(prevPage => prevPage + 1);

//         }
//       },
//       { threshold: 1 }
//     );
  
//     if (observerTarget.current) {
//       observer.observe(observerTarget.current);
//     }
  
//     return () => {
//       if (observerTarget.current) {
//         observer.unobserve(observerTarget.current);
//       }
//     };
//   }, [ page]);

    useEffect(() => {
    fetchData()
    }, []);

  return (
    <div>
    
      {items.map(item => (
   <>
    <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Kbs4Cq0-D-Z9p94FcNxTx9LuoU5HSGtTvg&usqp=CAU"} alt="img"/>
      <Text key={item.id} mb={8}>
        {item.title}
      </Text>
   </>
      ))}

    {isLoading && <p>Loading...</p>}
    {error && <p>Error: {error.message}</p>}
    {/* <div ref={observerTarget} ></div> */}
  </div>
  );
};

export default InfiniteScroll;