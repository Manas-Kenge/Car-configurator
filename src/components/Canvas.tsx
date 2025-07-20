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
            <Suspense fallback={null}>
                <OrbitControls
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 6}
                    enablePan={false}
                    enableRotate={true}
                    rotateSpeed={1.0}
                    minAzimuthAngle={-Infinity}
                    maxAzimuthAngle={Infinity}
                    enableDamping={true}
                    dampingFactor={0.05}
                    target={[0, 0, 0]}
                />
                <CameraRig>
                    <Center>
                        <Car />
                    </Center>
                </CameraRig>
            </Suspense>
        </Canvas>
    );
};

const CameraRig: FC<{ children: React.ReactNode }> = ({ children }) => {
    const group = useRef<any>();
    const snap = useSnapshot(state);
    const prevIntroRef = useRef(snap.intro);
    const isTransitioning = useRef(false);
    
    useFrame((state, delta) => {
        if (prevIntroRef.current !== snap.intro) {
            isTransitioning.current = true;
            prevIntroRef.current = snap.intro;
        }
        
        if (snap.intro || isTransitioning.current) {
            const targetPosition = snap.intro ? [-state.viewport.width / 4, 0, 5] : [10, 0, 5];
            const currentDistance = state.camera.position.distanceTo({ x: targetPosition[0], y: targetPosition[1], z: targetPosition[2] } as any);
            
            easing.damp3(state.camera.position, targetPosition, 0.25, delta);
            
            if (!snap.intro && currentDistance < 0.1) {
                isTransitioning.current = false;
            }
        }
    });
    
    return <group ref={group}>{children}</group>;
};