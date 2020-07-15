import React,{useEffect,useState}from 'react';
import Axios from 'axios';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import DotIsLoading from './LoadingDotIcon';

function ProfilePost (){

    const [isLoading, setIsLoading] = useState(true)

    const {username} = useParams()
    
    const [post,setPost] = useState([])



     useEffect(() =>{


         async function fetchPosts(){

           try{

            const response = await Axios.get(`/profile/${username}/posts`)

 
            setPost(response.data)
            setIsLoading(false)
           }

            catch(e){

            }

         }
         
     fetchPosts()
     },[]
    )

    if(isLoading) return <DotIsLoading />


    return(
       
        <div className="list-group-item list-group-item-action">
        {
         post.map((p,i) =>{

            const date = new Date(p.createdDate)
            
         
            const dateformat = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}}`



         
       return (< Link to ={`/post/${p._id}`} key={p._id}
>   
    <img className ='avatar-tiny' src={p.author.avatar} />
    <strong>{p.title}</strong> {" "}
         <span className = "text-muted small"> on {dateformat}</span>

    <br />
     </Link>
          ) })


        }
      </div>
    )



}



export default ProfilePost