import React,{useEffect, useState,useContext} from 'react';
import Page from './Page';
import StateContext from '../StateContext';
import Axios from 'axios';
import {useParams} from 'react-router-dom';


function ViewSinglePost(){

  
  const {id} = useParams()



  const [isLoading,setIsLoading] = useState(true)


  const [post, setPost] = useState()


   const appState = useContext(StateContext);

   useEffect(() => {


       async function fetchPost(){

        try{
          const response = await Axios.get(`/post/${id}`);
   
          setPost(response.data)
          setIsLoading(false)

          console.log(post)

        }

        catch(e){
          console.log('this is the rror')
        }


       }

      fetchPost()

   },[])

   if(isLoading) return <Page title ="...">
     <div>Loading</div>
   </Page>

  
  
  const date = new Date(post.createdDate)
  const dateformat = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`

    return(




        <Page title="Post">
        <div className="d-flex justify-content-between">
        <h2>{post.title}</h2>
        <span className="pt-2">
          <a href="#" className="text-primary mr-2" title="Edit"><i className="fas fa-edit"></i></a>
          <a className="delete-post-button text-danger" title="Delete"><i className="fas fa-trash"></i></a>
        </span>
      </div>

      <p className="text-muted small mb-4">
        <a href="#">
          <img className="avatar-tiny" src={post.author.avatar}/>
        </a>
        Posted by <a href="#">{post.author.username}</a> on {dateformat}
      </p>

      <div className="body-content">
        {post.body}
      </div>

    </Page>

    )


}



export default ViewSinglePost