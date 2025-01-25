import React, { useEffect, useState } from 'react'
import authService from '../../Appwrite/auth'
import { NavLink } from 'react-router-dom'

function Header() {

    const [userName, setUserName] = useState('')

    useEffect(() => {
        const handleuserName = async () => {
            try {
                const user = await authService.getCurrentUser()
                if (user && user.name) {
                    setUserName(user.name)
                }

            } catch (error) {
                console.log('error to getting user name', error)
            }
        }
        handleuserName();
    }, [userName, setUserName])



    return (
        <div>
            <Sidebar />
            <div>
                <ul>
                    <li>
                        <NavLink
                            to={'/'}
                            className={({ isActive }) => { `px-4 font-sm duration-300 ${isActive ? 'text-blue-500' : ''}` }}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <h1>{userName || Guest}</h1>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header
