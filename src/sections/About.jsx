import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react"

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('lucasfreirel.dev@gmail.com')

    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3"> 
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Olá, Eu sou o Lucas Freire.</p>
              <p className="grid-subtext">
                Desenvolvedor Full Stack apaixonado por criar experiências digitais intuitivas. Domino React e PHP para construir aplicações web escaláveis e performáticas. Trabalhei em diversos projetos, otimizando a processos e aumentando a performance.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <img src="assets/gridstack.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p> 
              <p className="grid-subtext"> Sou especializado em diversas linguagens, frameworks e ferramentas que me permitem construir soluções robustas e escaláveis.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">

            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe 
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat:  -3.71839, lng: -38.5434, text: 'Estou aqui', color: 'white', size: 24 }]}
              />
            </div>

            <div>
              <p className="grid-headtext">
                Trabalho remotamente na maioria dos fusos horários.
              </p>

              <p className="grid-subtext">
                Sou de Fortaleza, com disponibilidade de trabalho remoto.
              </p>
              <Button name="Entre em contato" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3 ">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid3" className="w-full sm:h-[266px] h-fit object-contain"/>

            <div>
              <p className="grid-headtext">
                Minha paixão por codificação.
              </p>

              <p className="grid-subtext">
                Adoro resolver problemas e construir coisas através de código. Codificar não é apenas minha profissão – é minha paixão.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="mx-auto md:w-[60%] sm:w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Entre em contato</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">lucasfreirel.dev@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About