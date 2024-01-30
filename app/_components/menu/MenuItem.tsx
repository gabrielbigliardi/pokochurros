
export default function MenuItem() {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
            <div className="text-center">
                <img src="/churros_hero.png" alt="churros" className="max-h-24 mx-auto" />
            </div>
            <h4 className="font-semibold text-xl my-3">Churros KitKat</h4>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae vel quo eos molestias at minus
            </p>
            <button className="bg-primary text-white rounded-full mt-4 px-8 py-2">Adicionar ao carrinho</button>
        </div>
    )
}
