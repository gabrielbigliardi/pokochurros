'use client'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Header() {
    const session = useSession()
    // console.log(session);
    const status = session.status
    const userData = session?.data?.user
    let userName = userData?.name || userData?.email
    if (userName?.includes(' ')) {
        userName = userName.split(' ')[0]
    }

    return (
        <header className='flex items-center justify-between'>
            <Link className='text-primary font-semibold text-2xl' href='/'>
                POKOCHURROS
            </Link>
            <nav className='flex items-center gap-4 text-primary font-semibold'>
                <Link href={''}>HOME</Link>
                <Link href={''}>SOBRE NÓS</Link>
                <Link href={''}>CARDÁPIO</Link>
                <Link href={''}>LOJAS</Link>
            </nav>
            <nav className='flex items-center gap-4 text-gray-500 font-semibold'>
                {status === 'authenticated' && (
                    <>
                        <Link className='whitespace-nowrap' href={'/profile'}>Ola, {userName}</Link>
                        <button
                            onClick={() => signOut()}
                            className='bg-primary text-white rounded-full px-6 py-2'
                        >Logout</button>
                    </>

                )}
                {status == 'unauthenticated' && (
                    <>
                        <Link href={'/login'}>Login</Link>
                        <Link href={'/register'} className='bg-primary text-white rounded-full px-6 py-2'>Cadastrar</Link>
                    </>
                )}
            </nav>
        </header>
    )
}
