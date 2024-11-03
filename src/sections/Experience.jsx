import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { workExperiences } from '../constants'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from "../components/CanvasLoader";
import Developer from '../components/Developer';

const Experience = () => {
  const [animationName, setAnimationName] = useState('idle')

  return (
    <div className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text"> Minha Experiência </h3>
        <div className="work-container">
          <div className="work-canvas">
          <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3}  animationName={animationName}/>
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(({id, name, pos, duration, title, animation, icon}) => (
                <div key={id} className="work-content_container group" onClick={() => setAnimationName(animation.toLowerCase())} onPointerOver={() => setAnimationName(animation.toLowerCase())} onPointerOut={() => setAnimationName('idle')}>
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img src={icon} alt="logo" className="w-full h-full" />
                    </div>
                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5 ">
                    <p className="font-bold">{name}</p>
                    <p className="text-sm mb-5">{pos} -- {duration}</p>
                    <p className="group-hover:text-white transition duration-500 ease-in-out">{title}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Experience