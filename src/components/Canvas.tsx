import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { Suspense } from 'react'
import { Car } from './Car'

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
            <Car />
        </Suspense>
        <Preload all />
    </Canvas>
}

