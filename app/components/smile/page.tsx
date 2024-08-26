import SmileSRC from "../../../assets/smile--.png"

export default function Smile() {
    return (
        <main className="flex h-[70vh] w-3/4 m-auto justify-center animate-hidden-img">
            <div>
                <h3 className="text-center text-4xl font-semibold">Smile</h3>
                <p className="text-center my-10 text-lg">Aquele belo sorriso, que do nada me encantou sem ao menos eu ter sentido o gosto.</p>

                <img className="m-auto my-20 max-w-96" src={SmileSRC.src} alt="" />
                <p className="text-center">Se vier com queixo dizendo que nao sorri vai levar um ta ligado!!</p>
            </div>
        </main>
    );
}