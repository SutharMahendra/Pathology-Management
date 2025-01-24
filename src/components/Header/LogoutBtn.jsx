import React from 'react'
import authService from '../../Appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../Feature/AuthSlice';


function LogoutBtn() {

    const dispatch = useDispatch();

    const handleLogout = () => {
        try {

            authService.logout()
                .then(() => {
                    dispatch(logout())
                })

        } catch (error) {
            console.log('error in logout button', error)
        }
    }


    return (
        <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={handleLogout}>
            logout
        </button>
    )
}

export default LogoutBtn
