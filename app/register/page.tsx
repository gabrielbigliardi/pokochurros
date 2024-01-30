'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function RegisterPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [creatingUser, setCreatingUser] = useState(false)
    const [userCreated, setUserCreated] = useState(false)
    const [error, setError] = useState(false)

    async function handleFormSubmit(ev: any) {
        // { preventDefault: () => void }
        ev.preventDefault()
        setCreatingUser(true)
        setError(false)
        setUserCreated(false)
        const res = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        })
        console.log(res);


        if (!res.ok) {
            setError(true)
        }

        if (res.ok) {
            setUserCreated(true)

        }
        setCreatingUser(false)
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary  text-4xl">
                Cadastro
            </h1>

            {userCreated && (
                <div className="my-4 text-center">
                    Usuario criado.<br />Voce ja pode <Link className="underline" href={'/login'}>logar &raquo;</Link>
                </div>
            )}

            {error && (
                <div className="my-4 text-center">
                    Ocorreu um erro.<br />Tente novamente mais tarde
                </div>
            )}

            <form
                className="block max-w-xs mx-auto"
                onSubmit={handleFormSubmit}
            >
                <input
                    type="email"
                    placeholder="email@mail.com"
                    value={email}
                    disabled={creatingUser}
                    onChange={ev => setEmail(ev.target.value)}
                />
                <input
                    type="password"
                    placeholder="sua senha"
                    value={password}
                    disabled={creatingUser}
                    onChange={ev => setPassword(ev.target.value)}
                />
                <button
                    type="submit"
                    disabled={creatingUser}
                >
                    Registrar
                </button>
                <div className="my-4 text-center text-gray-500">
                    ou logue com um provedor
                </div>
                <button
                    type="button"
                    className="flex gap-4 justify-center"
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                >
                    <Image src={'/google.png'} alt={'google'} width={24} height={24} />
                    Login com Google
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Ja tem uma conta?{' '}
                    <Link className="underline" href={'/login'}>Logue aqui &raquo;</Link>
                </div>
            </form>
        </section>
    )
}
