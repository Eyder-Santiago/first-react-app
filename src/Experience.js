//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OrbitControls, Center, useTexture} from "@react-three/drei";

import { useFrame } from "@react-three/fiber";
//import { click } from "@testing-library/user-event/dist/click";
import { useRef } from "react";
//import { RingGeometry } from "three";
//import { Group } from "three";
export function Experience(){

    // const {camera, gl} = useThree()
    
    //dirección de la luz <directionalLight>
    //El elemento obsoleto center (centro) <Cent crea una caja en bloque con el contenido centrado. 
    const boxRef = useRef();
    const conoRef = useRef();
    const colorTexture = useTexture('./esferaWood.jpg');
    const sphereRef = useRef();
    // const sphereRef = useRef()
    // const groupRef = useRef(new Group())

    //Para hacer la animación de la esfera
    const amplitude = 2;
    const frequency = 2;
    let   time = 0;
    useFrame(() => {
        // Actualizar la posición vertical de la esfera
        const x = 0 + Math.sin(time * frequency) * amplitude;
        sphereRef.current.position.setX(x);
    
        // Aumentar el tiempo de animación
        time += 0.02;
      });
    
    useFrame((state, delta)=>{
        boxRef.current.rotation.x += 1 * delta  ;
        conoRef.current.rotation.z += 1 * delta  ;
    })
    
    // dirección de la luz <directionalLight>
    return <>
        <OrbitControls
            enableRotate = {true}
            minDistance = {4}
            maxDistance = {8}
            makeDefault = {false}
            enableDamping
            enablePan={false}
            screenSpacePanning={false}
        />
        <ambientLight/>
        <directionalLight color="#ffffff" intensity={-1.1} position={[0, 10, 0]}/>
        <directionalLight position={[10, 3, 3]} intensity={1.5} />
        <Center >
            <mesh ref={boxRef}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color={"mediumpurple"}/>
            </mesh>
            <mesh ref={conoRef} position-z = {-3}>
                <coneGeometry></coneGeometry>
                <meshStandardMaterial color={"yellow"}></meshStandardMaterial>
            </mesh>
            <mesh ref={sphereRef} position-z = {3} >
                <sphereGeometry args={[1, 32, 64]}/>
                <meshStandardMaterial color={"mediumpurple"} map={colorTexture}/>
            </mesh>
            <mesh rotation-x={-Math.PI / 2} position-y={-1.5}>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color={"blue"}/>
            </mesh>
        </Center>
    </>
    
    
}
