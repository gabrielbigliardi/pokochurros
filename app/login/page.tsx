'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

export default function LoginPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginInProgress, setLoginInProgress] = useState(false)

    async function handleFormSubmit(ev: any) {
        ev.preventDefault()
        setLoginInProgress(true)

        await signIn('credentials', { email, password, callbackUrl: '/' })

        setLoginInProgress(false)
    }

    return (
        <section className='mt-8'>
            <h1 className="text-center text-primary  text-4xl">
                Cadastro
            </h1>
            <form className='max-w-xs mx-auto' onSubmit={handleFormSubmit} >
                <input
                    type="email"
                    placeholder="email@mail.com"
                    name='email'
                    value={email}
                    disabled={loginInProgress}
                    onChange={ev => setEmail(ev.target.value)}
                />
                <input
                    type="password"
                    placeholder="sua senha"
                    name='password'
                    value={password}
                    disabled={loginInProgress}
                    onChange={ev => setPassword(ev.target.value)}
                />
                <button
                    type="submit"
                    disabled={loginInProgress}
                >
                    Login
                </button>
                <div className="my-4 text-center text-gray-500">
                    ou logue com um provedor
                </div>
                <button
                    type='button'
                    className="flex gap-4 justify-center"
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                >
                    <Image src={'/google.png'} alt={'google'} width={24} height={24} />
                    Login com Google
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Nao tem uma conta?{' '}
                    <Link className="underline" href={'/register'}>crie aqui &raquo;</Link>
                </div>
            </form>
        </section>
    )
}
