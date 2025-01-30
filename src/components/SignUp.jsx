import React from 'react'
import { useForm } from 'react-hook-form'
import { Form, Link, useNavigate } from 'react-router-dom'
import authService from '../Appwrite/auth'
import { Input } from '../components'
import { error } from 'console'

function SignUp() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const signUp = async (data) => {
        try {
            const user = await authService.createAccount({ ...data })
                .then((data) => {
                    if (user) {
                        navigate('/')
                    }
                })

        } catch (error) {
            console.log('error at sign up page', error)
        }
    }

    return (
        <div className='flex items-center m-5 justify-center '>
            <div className='w-full m-5 px-2 py2 '>
                <div className="mb-6 flex justify-center">
                    <span className="inline-block max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>

                <h2>
                    create your account
                </h2>
                <p>
                    Already have account?
                    <Link
                        to='/signup'
                        className='hover:text-2xl hover:text-blue-400'
                    >
                        SignUp
                    </Link>
                </p>
                <Form onSubmit={handleSubmit(signUp)} >
                    <div className='px-4 py-2 mt-2'>
                        {/* full name section */}
                        <Input
                            label='Name'
                            placeholder='enter your name'
                            className='px-4 py-2 '
                            {...register('name', {
                                required: true,
                                validate: {
                                    mathcPattern: (value) =>
                                        /^[A-Za-z]+$/i.test(value) ||
                                        'enter valid name'
                                },
                                minLength: {
                                    value: 4,
                                    message: 'minimum 3 characters are required'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'your name should be less than 50 character'
                                }
                            })}
                        />
                        {error.name && <p className='text-red-500 mt-1 text-sm'>{error.name}</p>}
                    </div>

                    {/* email section */}
                    <div>
                        <Input
                            label='Email:'
                            placeholder='enter email'
                            {...register('email', {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        'Invalid email address',

                                }
                            })}
                        />
                        {error.email && <p className='text-red-500 text-sm mt-1'>{error.email}</p>}
                    </div>

                    {/* password section */}
                    <div>
                        <Input
                            label='Password'
                            type='password'
                            placeholder='enter password'
                            {...register('password'), {
                                required: true,
                                validate: {
                                    minLength: 8,
                                    matchPattern: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) ||
                                        "Password must include uppercase, lowercase, number, and special character"
                                }
                            }
                            }
                        />
                        {error.password && <p className='text-red-500 mt-1 text-sm'>{error.password}</p>}

                    </div>
                    <div>
                        <button
                            type='submit'
                            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
                        >
                            Sign Up
                        </button>
                    </div>

                </Form>

            </div>

        </div>
    )
}

export default SignUp
