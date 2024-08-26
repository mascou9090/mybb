import EyesSRC from "../../../assets/Eyes-.png"
export default function Eyes() {
  return (
    <main className="flex h-[70vh] w-3/4 m-auto animate-hidden-img justify-center">
       <div className="flex flex-col justify-center">
                <h3 className="text-center text-4xl font-semibold">Eyes</h3>
                <p className="text-center text-lg">O que falar dos seus olhos?</p>
                <p className="text-center text-lg">Da vontade de beijar mais que a sua boca, mas nao e uma coisa normal de se fazer, ne?</p>
                <p className="text-center text-lg">Perfeitinhos, da maneira certa.</p>
                <p className="text-center text-lg">Me faz sentir poderoso quando eles estao fixados em mim, pode crer.</p>

                <img className="my-10 m-auto max-w-96" src={EyesSRC.src} alt="" />
                <p className="text-center">Me olhe sempre que conseguir, isso vai me ajudar em muitos aspectos.</p>
            </div>
    </main>
  );
}