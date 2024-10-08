import { useGLTF } from '@react-three/drei'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react'

const Elephant = (props) => {
  const { nodes, materials } = useGLTF('/models/php-elephant.glb')

  const elephantRef = useRef();

  useGSAP(() => {
    gsap.to(elephantRef.current.position, {
      y: elephantRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })
  })

  return (
    <group {...props} dispose={null} ref={elephantRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.Textured}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.8}
        
      />
    </group>
  )
}

useGLTF.preload('/models/php-elephant.glb')

export default Elephant