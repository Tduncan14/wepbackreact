import React, {useEffect,useState,useContext} from 'react';
import Axios from 'axios';
// import ExampleContext from '../ExampleContext';
import dispatchContext from '../DispatchContext';

function HeaderLoggout (props) {

  //  const {setLoggedIn} = useContext(ExampleContext)

  const appDispatch = useContext(dispatchContext);

   const [username,setUsername]  = useState()

   const [password,setPassword] = useState()

   async function handleSubmit(e){

    e.preventDefault()

     console.log('clcicked')

     try{

       const response = await Axios.post('/login',{
            username,
            password
        })


        if(response.data){

            console.log(response.data)

            localStorage.setItem("token",response.data.token)

            localStorage.setItem('avatar',response.data.avatar)


            localStorage.setItem('username', response.data.username)

       

              appDispatch({type:login})
      
        }

        else{
            console.log('error')
        }

        console.log(response.data,'this is just the respinse', response)

     }



     catch(e){

        console.log(e.response.error)

     }


   }

    return(
 
        <form onSubmit={handleSubmit} className="mb-0 pt-2 pt-md-0">
        <div className="row align-items-center">
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input name="username" className="form-control form-control-sm input-dark" type="text" 
            onChange ={e => (
               
                setUsername(e.target.value)
            )}
            placeholder="Username" autoComplete="off" />
          </div>
          <div className="col-md mr-0 pr-md-0 mb-3 mb-md-0">
            <input name="password" className="form-control 
            form-control-sm input-dark"
            onChange = {e => ( setPassword(e.target.value))} 
            type="password" placeholder="Password" />
          </div>
          <div className="col-md-auto">
            <button className="btn btn-success btn-sm">Sign In</button>
          </div>
        </div>
      </form>


    )
}


export default HeaderLoggout
