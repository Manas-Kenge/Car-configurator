import * as THREE from 'three'
import { useRef, useState, useEffect, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
// import { useSnapshot } from "valtio" 
// import { state } from './State'
import { useControls } from 'leva'

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
    // animations: GLTFAction[]
}

export function Car(props: JSX.IntrinsicElements['group']) {

    const { nodes, materials } = useGLTF('./1975_porsche_911_930_turbo/scene-transformed.glb') as GLTFResult
    const ref = useRef<THREE.Mesh>(null!)
    // const snap = useSnapshot(state)
    // const [hovered, setHovered] = useState(null)
    // const [hovered, hover] = useState(false)
    // const [clicked, click] = useState(false)

    const options = useMemo(() => {
        return {
            //   x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
            //   y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
            //   z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
            //   visible: true,
            color: { value: 'lime' }
        }
    }, [])

    const model = useControls('Car', options)

    // useEffect(() => {
    //     const cursor: string = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="#fff-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    //     const auto: string = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    //     if (hovered) {
    //         document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`;
    //         return () => { (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`); }
    //     }
    // }, [hovered]);

    return (
        <group {...props} dispose={null}
            ref={ref}
        // onPointerOver={(e) => (e.stopPropagation(), setHovered((e.object.material.name)))}
        // onPointerOut={(e) => e.intersections.length === 0 && setHovered(null)}
        // onPointerMissed={() => (state.current = null)}
        // onClick={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        // onClick={(event) => click(!clicked)}
        // onPointerOver={(event) => hover(true)}
        // onPointerOut={(event) => hover(false)}
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