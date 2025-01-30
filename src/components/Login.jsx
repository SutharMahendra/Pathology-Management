import { useEffect } from 'react'
import authService from '../Appwrite/auth'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../Feature/AuthSlice'
import { Form, Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Input, Select } from '../components'
import { error } from 'console'

function Login() {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginSubmit = async (data) => {
        try {
            const userLogin = await authService.login(data)
                .then((data) => {
                    if (userLogin) {
                        dispatch(authLogin(data))
                        navigate('/')
                    }
                }).catch(
                    console.log('error:', error)
                )

        } catch (error) {
            console.log('error at login page', error)
        }
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-50'>
            <div className='w-full max-w-md bg-white rounded-lg shadow p-8'>
                <div className="mb-6 flex justify-center">
                    <span className="inline-block max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2>Sign in to yur account ?</h2>
                <p>
                    Dont have account ?
                    <Link
                        to='/signup'
                        className='font-medium text-primary hover:underline hover:text-2xl'
                    >
                        Sign-Up
                    </Link>
                </p>

                {error && <p className='text-red-500 mt-4 text-center'></p>}

                {/* form section  */}
                <Form onSubmit={handleSubmit(loginSubmit)}>
                    {/* name input section */}
                    <div>


                        <Input
                            label='Email'
                            placeholder='enter your email'
                            className='px-4 py-2 mt-3 rounded-md'
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
                            className='px-4 py-2 mt-3 rounded-md'
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
                            className='w-full p-3 bg-amber-300'
                        >
                            Sign In
                        </button>
                    </div>


                </Form>
            </div>

        </div>
    )
}

export default Login
