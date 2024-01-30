import Image from "next/image";

export default function About() {
    return (
        <section className="who-we-are">
            <div className="our-history">
                <div className="our-history-text ">
                    <h2>Quem Somos Nós</h2>
                    <h4>Nossa História</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, sed? Doloribus, est! Doloremque aperiam vitae mollitia in debitis velit deserunt quas. Tempora maxime mollitia architecto quasi, quod iusto deleniti illo!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestias praesentium a cumque asperiores consequuntur maiores, nostrum vel delectus ut accusantium magni inventore ea, sint fugiat dignissimos aliquam dolore repellat.</p>
                </div>
                <div className="relative">
                    <Image src={'/whoWeArePhoto.jpg'} layout="fill" objectFit="contain" alt="xandi" />
                </div>
            </div>
            <div className="our-store">
                <div className="relative">
                    <Image src={'/ourStore.jpg'} layout="fill" objectFit="contain" alt="churros" />
                </div>
                <div className="our-store-text">
                    <h4>Nossa Loja</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, sed? Doloribus, est! Doloremque aperiam vitae mollitia in debitis velit deserunt quas. Tempora maxime mollitia architecto quasi, quod iusto deleniti illo!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestias praesentium a cumque asperiores consequuntur maiores, nostrum vel delectus ut accusantium magni inventore ea, sint fugiat dignissimos aliquam dolore repellat.</p>
                </div>
            </div>

        </section>
    )
}
