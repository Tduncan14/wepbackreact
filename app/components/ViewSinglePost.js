import React,{useEffect, useState,useContext} from 'react';
import Page from './Page';
import StateContext from '../StateContext';
import Axios from 'axios';
import {useParams,Link} from 'react-router-dom';
import LoadingDotIcon from './LoadingDotIcon';
import ReactMarkdown from 'react-markdown';
import ReactTooltip from 'react-tooltip';

function ViewSinglePost(){

  
  const {id} = useParams()



  const [isLoading,setIsLoading] = useState(true)


  const [post, setPost] = useState()


   const appState = useContext(StateContext);

   useEffect(() => {

      const ourRequest = Axios.CancelToken.source()

       async function fetchPost(){

        try{
          const response = await Axios.get(`/post/${id}`,{CancelToken: ourRequest.token});
   
          setPost(response.data)
          setIsLoading(false)

        
          console.log(post.title, "this is the data")

        }

        catch(e){
          console.log('this is the error or request was canceled')
        }


       }

      fetchPost()


      // clean up function

      return () =>{
        console.log(post)
         ourRequest.cancel();

       
      }

   },[])

   if(isLoading) return <Page title ="...">
     <LoadingDotIcon />
   </Page>

  
  
  const date = new Date(post.createdDate)
  const dateformat = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`

    return(




        <Page title={post.title}>
        <div className="d-flex justify-content-between">
        <h2>{post.title}</h2>
        <span className="pt-2">
          <a href="#" data-tip ="Edit" data-for ="edit" className="text-primary mr-2" title="Edit"><i className="fas fa-edit"></i></a>
          <ReactTooltip  id="edit" className="custom-tooltip"/>
          <a className="delete-post-button text-danger"  data-tip="Delete"  data-for="delete" title="Delete"><i className="fas fa-trash"></i></a>

          <ReactTooltip  id="delete" className="custom-tooltip"/>
        </span>
      </div>

      <p className="text-muted small mb-4">
        <Link to={`/profile/${post.author.username}`}>
          <img className="avatar-tiny" src={post.author.avatar}/>
        </Link>
        Posted by <Link to={`/post/${post.author.username}`}>{post.author.username}</Link> on {dateformat}
      </p>

      <div className="body-content">
        <ReactMarkdown source ={post.body} allowedTypes={["paragraph","strong","text","heading","emphasis","list","listItem"]}/>
      </div>

    </Page>

    )


}



export default ViewSinglePost