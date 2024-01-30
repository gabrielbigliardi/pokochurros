'use client'
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProfilePage() {

    const session = useSession()
    const [userName, setUserName] = useState('')
    const [saved, setSaved] = useState(false)
    const [isSaving, setIsSaving] = useState(false)
    // console.log(session);
    const userImage = session?.data?.user?.image
    const { status } = session
    // console.log(userName);

    useEffect(() => {
        if (status === 'authenticated') {
            setUserName(session?.data?.user?.name as string)
        }
    }, [session, status])


    async function handleProfileInfoUpdate(ev: any) {
        ev.preventDefault()
        setSaved(false)
        setIsSaving(true)
        const res = await fetch('/api/profile', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: userName })
        })
        setIsSaving(false)

        if (res.ok) {
            setSaved(true)
        }

    }

    async function handleFileChange(ev: any) {
        const files = ev.target.files
        if (files?.length === 1) {
            const data = new FormData
            data.set('file', files[0])
            await fetch('/api/upload', {
                method: "POST",
                body: data
            })
        }
    }

    if (status === "loading") {
        return 'Loading...'
    }

    if (status === "unauthenticated") {
        return redirect('/login')
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Perfil
            </h1>
            <div className="max-w-md mx-auto">
                {saved && (
                    <h2 className="text-center bg-green-200 p-4 rounded-lg border border-green-300">Perfil salvo!</h2>
                )}
                {isSaving && (
                    <h2 className="text-center bg-blue-200 p-4 rounded-lg border border-blue-300">Salvando...</h2>

                )}
                <div className="flex gap-4 items-center">
                    <div>
                        <div className=" p-2 rounded-lg relative">
                            <Image className="rounded-lg w-full h-full mb-1" src={userImage as string} width={100} height={100} alt={'usuario'} />
                            <label>
                                <input type="file" className="hidden" onChange={handleFileChange} />
                                <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">Editar</span>
                            </label>
                        </div>
                    </div>
                    <form onSubmit={handleProfileInfoUpdate} className="grow">
                        <input
                            type="text"
                            placeholder="Joe Doe"
                            value={userName as string}
                            onChange={ev => setUserName(ev.target.value)}
                        ></input>
                        <input
                            type="email"
                            disabled={true}
                            value={session?.data?.user?.email as string}
                        ></input>
                        <button type="submit">Salvar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
