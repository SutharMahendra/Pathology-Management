import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../../Feature/AuthSlice'
import { NavLink } from 'react-router-dom'
import { it } from 'node:test'
import LogoutBtn from './LogoutBtn'

function Sidebar() {

    const dispatch = useDispatch()
    const isSidebarOpen = useSelector((state) => state.authslice.toggle)
    const authLogout = useSelector((state) => state.status)

    const menuItems = [
        {
            name: 'overview',
            icon: '📦',
            slug: '/'
        },
        {
            name: 'order',
            icon: '🛒',
            children: [
                {
                    name: 'incoming',
                    icon: '➡️',
                    slug: '/order/incoming'
                },
                {
                    name: 'outgoing',
                    icon: '⬅️',
                    slug: '/order/outgoing'
                }

            ]
        },
        {
            name: 'person',
            icon: '🤝',
            children: [
                {
                    name: 'Suplier',
                    icon: '🙎',
                    slug: '/person/suplier'
                },
                {
                    name: 'Customers',
                    icon: '🙎',
                    slug: '/person/customer'
                }
            ]
        },
        {
            name: 'Category',
            icon: '🏷️',
            children: [
                {
                    name: 'Tablets',
                    icon: '💊',
                    slug: '/category/tablet'
                },
                {
                    name: 'Accessories',
                    icon: '🏪',
                    slug: '/category/accessories'
                }
            ]
        }
    ]


    const handleToggle = () => {
        dispatch(toggleSidebar())
    }

    return (
        <div
            className={`flex ${isSidebarOpen}?'w-64':'w-16' duration-300 bg-gray-800 text-white`}
        >
            <div className='h-screen flex flex-col'>

                <button
                    onClick={handleToggle}
                    className='m-4 p-2 bg-gray-700 rounded hover:bg-gray-600 focus:outline-none'
                >
                    {isSidebarOpen ? 'close' : 'open'}
                </button>

                {/* menu secion  */}

                <nav className='mt-5 px-4'>
                    <ul className='flex flex-col gap-1.5'>

                        {
                            menuItems.map((item) => (
                                <li key={item.name}>
                                    {item.children ?
                                        (<div className='group flex flex-col gap-1'>
                                            <button className='flex items-center justify-between w-full gap-2.5 rounded-sm px-4 py-2 font-medium hover:bg-gray-700'>
                                                <span>
                                                    {item.icon}{' '}{isSidebarOpen && item.name}
                                                </span>
                                            </button>
                                            <ul className={`pl-6 ${!isSidebarOpen && 'hidden'}`}>
                                                {item.children.map((child) => (
                                                    <li key={child.name}>
                                                        <NavLink
                                                            to={child.slug}
                                                            className={(isActive) => `block rounded-sm px-4 py-2 text-sm font-medium duration-300 hover:bg-gray-700 ${isActive ? 'text-red-500' : ''}`}
                                                        >
                                                            <span>
                                                                {child.icon}{' '}{isSidebarOpen && child.name}
                                                            </span>
                                                        </NavLink>
                                                    </li>
                                                ))}

                                            </ul>

                                        </div>)
                                        : (
                                            <NavLink
                                                to={item.slug}
                                                className={(isActive) => `group flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium duration-300 hover:bg-gray-700 ${isActive ? 'text-red-500' : ''}`}
                                            >
                                                <span>
                                                    {item.icon}{" "}{isSidebarOpen && item.name}
                                                </span>

                                            </NavLink>
                                        )}
                                </li>
                            ))
                        }

                    </ul>

                </nav>

                {
                    authLogout &&
                    <div>
                        <LogoutBtn />
                    </div>
                }

            </div>

        </div>
    )
}

export default Sidebar
