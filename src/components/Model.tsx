import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

export const Model = () => {
    const cars = useGLTF('./1975_porsche_911_930_turbo/scene.gltf')

    return <mesh>
        <directionalLight position={[5, 2, 5]} intensity={6} />
        <directionalLight position={[-5, 2, 5]} intensity={6} />
        <directionalLight position={[5, 2, -5]} intensity={6} />
        <directionalLight position={[-5, 2, -5]} intensity={6} />
      
        <primitive
            object={cars.scene}
            scale={5}
            position={[0, -4, 1]}
        />
    </mesh>
}

export const CarCanvas = () => {
    return <Canvas
        frameloop='demand'
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
    >
        <Suspense >
            <OrbitControls
                enableZoom={true}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
            />
            <Model />
        </Suspense>
        <Preload all />
    </Canvas>

}

