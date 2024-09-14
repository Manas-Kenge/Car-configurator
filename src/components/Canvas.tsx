import { useRef, FC, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { state } from '../utils/store';
import { Car } from './Car';

interface CarCanvasProps {
    position?: [number, number, number];
    fov?: number;
}

export const CarCanvas: FC<CarCanvasProps> = ({ position = [20, 20, -20], fov = 25 }) => {
    return (
        <Canvas shadows camera={{ position, fov }} gl={{ preserveDrawingBuffer: true }} eventSource={document.getElementById('root') ?? undefined} eventPrefix="client">
            <ambientLight intensity={0.5} />

            <CameraRig>

                <Suspense fallback={null}>
                    <OrbitControls
                        enableZoom={true}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={0}
                        enablePan={false}

                    />
                    <Center>
                        <Car />
                    </Center>
                </Suspense>
            </CameraRig>
        </Canvas>
    );
};



const CameraRig: FC<{ children: React.ReactNode }> = ({ children }) => {
    const group = useRef<any>();
    const snap = useSnapshot(state);
    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [snap.intro ? -state.viewport.width / 4 : 10, 0, 5], 0.25, delta);
        easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta);
    });
    return <group ref={group}>{children}</group>;
};