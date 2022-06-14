import React, { useContext, useEffect, useState } from 'react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
  // const {loginWithRedirect,logout,user} = useAuth0()

  const [myUser, setMyUser] = useState()

  // useEffect(()=> {
  //   setMyUser(user)
    
    
  // },[user])

  return (
    <UserContext.Provider value={{myUser}}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}