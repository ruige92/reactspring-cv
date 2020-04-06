import ReactDOM from 'react-dom'
import React, { useRef, useState, useCallback, useMemo } from 'react'
import { Canvas, useFrame, useThree, useLoader } from 'react-three-fiber'
import * as THREE from "three";
import img from "../profile2.JPG";
import img2 from "../profile2-removebg.png";
import {NoiseShader} from "../shaders/NoiseShader";
import { motion, useAnimation } from "framer-motion"

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Test = (props) => {
    const mesh = useRef()
    const material = useRef()
    const [hovered, setHover] = useState(false)

    // Rotate mesh every frame, this is outside of React without overhead
    // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
    // useFrame(state => {
    //     mesh.current.rotation.x = props.mouse.current[0] * 0.02;
    //     mesh.current.rotation.y = props.mouse.current[1] * 0.02;
    // })
    var clock = new THREE.Clock();

    useFrame(()=> {
        // material.args.uniforms.time.value = clock.getElapsedTime();
        // console.log( clock.getElapsedTime() )
        // mesh.current.rotation.x = props.mouse.current[0] * 0.0003;
        // mesh.current.rotation.y = props.mouse.current[1] * 0.0001;
        if (hovered) {
          material.current.uniforms.uTime.value = clock.getElapsedTime()
        }
    })
    const texture = useMemo(() => {
      const loader = new THREE.TextureLoader()
      return loader.load(img)
    },[img])

    const onHover = useCallback(
      (e, value) => {
        e.stopPropagation();
        setHover(value);
      },
      [setHover]
    );
  

    return (
        <mesh 
            {...props} 
            ref={mesh}
            onPointerOver={e => onHover(e, true)}
            onPointerOut={e => onHover(e, false)}
            >
            <planeGeometry attach="geometry" args={[0.6, 0.3, 32, 32]} />
            <shaderMaterial ref={material} attach="material"
              args={[NoiseShader]}
              uniforms-uTexture-value={texture}
            ></shaderMaterial>
        </mesh>
    )
}
const camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 3;


const Test3 = () => {
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

  return (
    <motion.div 
      initial={{x:10, opacity:0}}
      animate={{x:0, opacity:1}}
      className="absolute z-20"
      style={{ width: '100%', height: '100%' }} 
      onMouseMove={onMouseMove}>
        <Canvas
          camera={camera}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          {/* <Box position={[-1.2, 0, 0]} /> */}
          {/* <Box position={[1.2, 0, 0]} /> */}
          <Test mouse={mouse}/>
        </Canvas>
    </motion.div>
  )
}

export default Test3;