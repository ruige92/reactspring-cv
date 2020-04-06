import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { Suspense, useState, useCallback, useEffect, useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import lerp from 'lerp'
import Text from './Text'
import Effects from './Effects'
import Sparks from './Sparks'
import Particles from './Particles'

function Test4() {
  const [hovered, hover] = useState(false)
  const [down, set] = useState(false)
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  return (
    <Canvas
      pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
      camera={{ fov: 100, position: [0, 0, 30] }}
      style={{height: '800px'}}
      onMouseMove={onMouseMove}
      onMouseUp={() => set(false)}
      onMouseDown={() => set(true)}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.Uncharted2ToneMapping
        // gl.setClearColor(new THREE.Color('#001'))
      }}>
      <fog attach="fog" args={['white', 190, 190]} />
      <ambientLight intensity={1} />
      <pointLight distance={60} intensity={2} color="white" />
      <spotLight intensity={2} position={[0, 0, 70]} penumbra={1} color="white" />
      {/* <mesh>
        <planeBufferGeometry attach="geometry" args={[10000, 10000]} />
        <meshStandardMaterial attach="material" color="#00ffff" depthTest={false} />
      </mesh> */}
      {/* <Number mouse={mouse} hover={hover} /> */}
      <Particles count={isMobile ? 200 : 1000} mouse={mouse} />
      {/* <Sparks count={20} mouse={mouse} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} /> */}
      {/* <Effects down={down} /> */}
    </Canvas>
  )
}

export default Test4;