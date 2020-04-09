import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Posts} from './components/Posts';
import {Pagination} from './components/Pagination';

function App(){

    const [country, setCountry] = useState([]);
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

   useEffect(()=>{
      const fetchUsers = async ()=>{
          setIsLoading(true);
          const res = await axios.get('http://dummy.restapiexample.com/api/v1/employees');
          let data = res.data.data;
          console.log(data[0].employee_name);
          setPosts(data);
          setIsLoading(false);
      };
      fetchUsers();
   }, []);

   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

   const paginate = pageNumber => setCurrentPage(pageNumber);
    
    // const handleChange = (e)=>{
    //     axios.get(`http://localhost:5000/user?q=${e.target.value}`)
    //     .then(res=>{
    //         let newCountries = [...country, ...res.data.data];
    //         let toBeupdated = newCountries.filter((count, i) => newCountries.indexOf(count) === i);
    //         setCountry(toBeupdated);
    //     });
    // };

    return(
        <div className="container mt-5">
            <h1 className="mb-3 text-warning">Hello pagination boy</h1>
            <Posts posts={currentPost} loading={isLoading} />
            <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} paginate={paginate} />
        </div>
    )
}

export default App;