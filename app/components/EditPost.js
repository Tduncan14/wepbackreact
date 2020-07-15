import React,{useEffect, useState,useContext} from 'react';
import Page from './Page';
import StateContext from '../StateContext';
import Axios from 'axios';
import {useParams,Link} from 'react-router-dom';
import LoadingDotIcon from './LoadingDotIcon';
import ReactMarkdown from 'react-markdown';
import ReactTooltip from 'react-tooltip';

function EditPost(){

  
//   const {id} = useParams()



//   const [isLoading,setIsLoading] = useState(true)


 const [post, setPost] = useState()


const appState = useContext(StateContext);


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

       ourRequest.cancel();

     
    }

 },[])

 if(isLoading) return <Page title ="...">
   <LoadingDotIcon />
 </Page>



const date = new Date(post.createdDate)
const dateformat = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`

    return(
<Page title="Edit">
    <form> 
    <div className="form-group">
      <label htmlFor
      ="post-title" className="text-muted mb-1">
        <small>Title</small>
      </label>
      <input  autoFocus name="title" id="post-title" value={post.title} className="form-control form-control-lg form-control-title" type="text" placeholder="" autoComplete="off" />
    </div>

    <div className="form-group">
      <label htmlFor
      ="post-body" className="text-muted mb-1 d-block">
        <small>Body Content</small>
      </label>
      <textarea  name="body" id="post-body" className="body-content tall-textarea form-control" type="text" value ={post.body}/>
    </div>

    <button className="btn btn-primary">Save New Post</button>
  </form>

  </Page>
    )


}



export default EditPost