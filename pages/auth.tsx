
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'
import Input from '@/components/Input'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'

import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'


const Auth = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const [variant, setVariant] = useState('login')
    const [error, setError] = useState('')

    const router = useRouter();

    useEffect(() => {
        // Check if the URL contains an error message
        const errorParam = router.query.error;

        if (errorParam) {
            // Handle the error based on the error message
            if (errorParam === 'OAuthAccountNotLinked') {
                toast.error('This email has already logged in using a different provider method.');
            } else {
                toast.error('An error occurred during authentication.');
            }
        }
    }, [router.query.error]);

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
        setError('') // Clear error message
    }, [])

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                callbackUrl: '/profiles'
            })
        } catch (error) {
            toast.error('Login failed. Please check your credentials.') // Show error message
            console.log(error)
        }
    }, [email, password])

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            })

            login()
        } catch (error) {
            toast.error('Registration failed. Please try again.') // Show error message
            console.log(error)
        }
    }, [email, name, password, login]);

    return (
        <div className="relative h-full w-full bg-[url('/images/netflixbg.jpeg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/filmlogo.png" alt="logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <p className="text-red-600 font-semibold mb-3">
                            Do not use your real Netflix Password
                        </p>
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign In' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input
                                    label='Username'
                                    onChange={(ev: any) => setName(ev.target.value)}
                                    id='name'
                                    type='name'
                                    value={name}
                                />
                            )}
                            <Input
                                label='Email'
                                onChange={(ev: any) => setEmail(ev.target.value)}
                                id='email'
                                type='email'
                                value={email}
                            />
                            <Input
                                label='Password'
                                onChange={(ev: any) => setPassword(ev.target.value)}
                                id='password'
                                type='password'
                                value={password}
                            />
                        </div>
                        <button onClick={variant == 'login' ? login : register} className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                            {variant === 'login' ? 'Login' : 'Sign up'}
                        </button>
                        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                            <div onClick={() => signIn('google', { callbackUrl: '/profiles' })} className=" w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:oopacity-80 transition">
                                <FcGoogle size={30} />
                            </div>
                            <div onClick={() => signIn('github', { callbackUrl: '/profiles' })} className=" w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:oopacity-80 transition">
                                <FaGithub size={30} />
                            </div>
                        </div>
                        <p className='text-neutral-500 mt-12'>
                            {variant === 'login' ? 'First time using FilmFlix?' : 'Already have an account?'}
                            <span onClick={(toggleVariant)} className='text-white ml-1 hover:underline cursor-pointer'>
                                {variant === 'login' ? 'Create an account' : 'Login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth

