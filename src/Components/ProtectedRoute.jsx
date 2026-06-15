import {Navigate} from "react-router-dom";

export default function ProtectedRoute({children,role}){
 //user,token,isAuthenticated
    const loginstate=useSelector(state => state.auth)



    if(!loginstate.isAuthenticated){
       return <Navigate to="/login" />
     }//check any user logged in or not

    if(loginstate.user.role !==role)
        return <Navigate to="/unauthorized" />
        //role of the user

    return children;

}