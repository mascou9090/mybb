import MouthSRC from "../../../assets/mouth-.png"

export default function Mouth() {
    return (
        <main className="flex h-[70vh] w-3/4 m-auto animate-hidden-img justify-center">
            <div>
                <h3 className="text-center text-4xl font-semibold">Mouth</h3>
                <p className="text-center text-lg">Sua boca.</p>
                <p className="text-center text-lg">E, essa sua boca?</p>
                <p className="text-center text-lg">Me deixa todo bobo, voce falando: A.</p>
                <p className="text-center text-lg">Eu: Que diacho de boca gostosa da gota serena é essa minha colega?.</p>

                <img className="my-10 m-auto max-w-96" src={MouthSRC.src} alt="" />
                <p className="text-center">Ainda estou esperando vc falar aqui no meu ouvido baixinho, que essa boca e so minha. xD</p>
            </div>
        </main>
    );
}

