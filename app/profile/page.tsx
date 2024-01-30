'use client'
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {

  const session = useSession()
  // console.log({ session });

  const [userName, setUserName] = useState('')
  const [image, setImage] = useState('')
  const [phone, setPhone] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const { status } = session

  const [email, setEmail] = useState<any>('')


  useEffect(() => {

    if (status === 'authenticated') {
      setUserName(session?.data?.user?.name as string)
      setImage(session?.data?.user?.image as string)
      setEmail(session?.data?.user?.email)

      fetch('/api/profile').then(response => {
        response.json().then(data => {

          setPhone(data.phone)
          setStreetAddress(data.streetAddress)
          setPostalCode(data.postalCode)
          setCity(data.city)
          setCountry(data.country)

        })
      })
    }
  }, [session, status])


  async function handleProfileInfoUpdate(ev: any) {
    ev.preventDefault()

    const savingPromise = new Promise(async (resolve: any, reject: any) => {
      const res = await fetch('/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: userName,
          image,
          phone,
          streetAddress,
          postalCode,
          city,
          country
        })
      })
      if (res.ok)
        resolve()
      else
        reject()
    })

    toast.promise(savingPromise, {
      loading: 'Salvando...',
      success: 'Perfil salvo!',
      error: 'Erro ao salvar o perfil'
    })
  }



  async function handleImageChange(ev: any) {
    const files = ev.target.files
    if (files?.length === 1) {
      const data = new FormData
      data.set('file', files[0])

      const uploadPromise = fetch('/api/upload', {
        method: "POST",
        body: data
      }).then(res => {
        if (res.ok) {
          return res.json().then(link => {
            setImage(link)
          })
        }

        throw new Error('Algo deu errado')
      })


      await toast.promise(uploadPromise, {
        loading: 'Atualizando imagem...',
        success: 'Imagem atualizada',
        error: 'Erro ao atualizar a imagem'
      })

    }
  }


  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">
        Perfil
      </h1>
      <div className="max-w-md mx-auto">
        <div className="flex gap-4">

          <div>
            <div className=" p-2 rounded-lg relative max-w-[120px]">

              {image && (
                <Image className="rounded-lg w-full h-full mb-1" src={image as string} width={100} height={100} alt={'usuario'} />
              )}

              <label>
                <input type="file" className="hidden" onChange={handleImageChange} />
                <span className="block border border-gray-300 rounded-lg p-2 text-center cursor-pointer">Editar</span>
              </label>

            </div>
          </div>

          <form onSubmit={handleProfileInfoUpdate} className="grow">

            <label>Primeiro e ultimo nome</label>
            <input
              type="text"
              placeholder="Joe Doe"
              value={userName}
              onChange={ev => setUserName(ev.target.value)}
            ></input>

            <label>Email</label>
            <input
              type="email"
              disabled={true}
              value={email as string}
            ></input>

            <label>Telefone</label>
            <input
              type="tel"
              placeholder="telefone"
              value={phone}
              onChange={ev => setPhone(ev.target.value)}
            ></input>

            <label>Endereco</label>
            <input
              type="text"
              placeholder="endereco da rua"
              value={streetAddress}
              onChange={ev => setStreetAddress(ev.target.value)}

            ></input>

            <div className="flex gap-2 p-0">

              <div>
                <label>CEP</label>
                <input
                  type="text"
                  placeholder="CEP"
                  value={postalCode}
                  onChange={ev => setPostalCode(ev.target.value)}

                ></input>
              </div>

              <div>
                <label>Cidade</label>
                <input
                  type="text"
                  placeholder="cidade"
                  value={city}
                  onChange={ev => setCity(ev.target.value)}

                ></input>
              </div>

            </div>

            <label>Pais</label>
            <input
              type="text"
              placeholder="país"
              value={country}
              onChange={ev => setCountry(ev.target.value)}

            ></input>

            <button type="submit">Salvar</button>

          </form>

        </div>
      </div>
    </section>
  )
}
