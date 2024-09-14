import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useControls } from 'leva'
import { useSnapshot } from 'valtio'
import { state } from '../utils/store'

type GLTFResult = GLTF & {
    nodes: {
        Object_4: THREE.Mesh
        Object_5: THREE.Mesh
        Object_6: THREE.Mesh
        Object_8: THREE.Mesh
        Object_9: THREE.Mesh
        Object_20: THREE.Mesh
        Object_26: THREE.Mesh
        Object_28: THREE.Mesh
        Object_30: THREE.Mesh
        Object_32: THREE.Mesh
        Object_55: THREE.Mesh
        Object_95: THREE.Mesh
        Object_122: THREE.Mesh
        Object_140: THREE.Mesh
    }
    materials: {
        ['930_plastics']: THREE.MeshStandardMaterial
        ['930_stickers']: THREE.MeshStandardMaterial
        plate: THREE.MeshStandardMaterial
        ['930_rim']: THREE.MeshStandardMaterial
        ['930_tire']: THREE.MeshStandardMaterial
        ['930_lights']: THREE.MeshPhysicalMaterial
        glass: THREE.MeshStandardMaterial
        ['930_chromes']: THREE.MeshStandardMaterial
        paint: THREE.MeshPhysicalMaterial
        coat: THREE.MeshStandardMaterial
        black: THREE.MeshStandardMaterial
        ['930_lights_refraction']: THREE.MeshPhysicalMaterial
        ['930_wunderbaum']: THREE.MeshStandardMaterial
        material_0: THREE.MeshStandardMaterial
    }
}

export function Car(props: JSX.IntrinsicElements['group']) {

    const { nodes, materials } = useGLTF('./1975_porsche_911_930_turbo/scene-transformed.glb') as GLTFResult
    const ref = useRef<THREE.Mesh>(null!)
    const snap = useSnapshot(state);

    const options = useMemo(() => {
        return {
            color: { value: snap.color },
        };
    }, [snap.color]);

    const model = useControls('Car', options);

    return (
        <group {...props} dispose={null}
            //@ts-ignore
            ref={ref}
        >
            <directionalLight position={[5, 2, 5]} intensity={6} />
            <directionalLight position={[-5, 2, 5]} intensity={6} />
            <directionalLight position={[5, 2, -5]} intensity={6} />
            <directionalLight position={[-5, 2, -5]} intensity={6} />
            <mesh geometry={nodes.Object_4.geometry} material={materials['930_plastics']} position={[0, 0.38, 2.536]} rotation={[-2.834, 0, Math.PI]} scale={[0.812, 0.78, 0.812]} />
            <mesh geometry={nodes.Object_5.geometry} material={materials['930_stickers']} position={[0, 0.38, 2.536]} rotation={[-2.834, 0, Math.PI]} scale={[0.812, 0.78, 0.812]} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.plate} position={[0, 0.38, 2.536]} rotation={[-2.834, 0, Math.PI]} scale={[0.812, 0.78, 0.812]} />
            <mesh geometry={nodes.Object_8.geometry} material={materials['930_rim']} position={[-0.944, 0.453, -0.982]} rotation={[0.479, 0, 0]} scale={0.812} />
            <mesh geometry={nodes.Object_9.geometry} material={materials['930_tire']} position={[-0.944, 0.453, -0.982]} rotation={[0.479, 0, 0]} scale={0.812} />
            <mesh geometry={nodes.Object_20.geometry} material={materials['930_lights']} position={[0.57, 0.418, -2.057]} rotation={[0.044, -0.215, 0.01]} scale={0.197} />
            <mesh geometry={nodes.Object_26.geometry} material={materials.glass} scale={0.812} />
            <mesh geometry={nodes.Object_28.geometry} material={materials['930_chromes']} scale={0.812} />
            <mesh geometry={nodes.Object_30.geometry} material={materials.paint} scale={0.812} material-color={model.color} />
            <mesh geometry={nodes.Object_32.geometry} material={materials.coat} scale={0.812} />
            <mesh geometry={nodes.Object_55.geometry} material={materials.black} position={[0.011, 1.355, 0.53]} scale={0.047} />
            <mesh geometry={nodes.Object_95.geometry} material={materials['930_lights_refraction']} scale={0.812} />
            <mesh geometry={nodes.Object_122.geometry} material={materials['930_wunderbaum']} position={[-0.002, 1.285, 0.542]} scale={0.812} />
            <mesh geometry={nodes.Object_140.geometry} material={materials.material_0} position={[0, 0.118, 0.225]} scale={[1.558, 1.558, 3.117]} />
        </group>
    )
}

useGLTF.preload('./1975_porsche_911_930_turbo/scene-transformed.glb')