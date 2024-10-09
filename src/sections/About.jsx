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
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3"> 
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Olá, Eu sou o Lucas Freire</p>
              <p className="grid-subtext"> Desenvolvedor Full Stack com foco em React e PHP.</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p> 
              <p className="grid-subtext"> I specialize inJavaScript/Typescript with a focus on React and PHP ecosystem.</p>
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
                I work remotely across most timezones.
              </p>

              <p className="grid-subtext">
                I am based in Fortaleza, with remote work available.
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
                My passion for coding.
              </p>

              <p className="grid-subtext">
                I love solving problems and building things through code. Coding isn't just my profession - it is my passion.
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