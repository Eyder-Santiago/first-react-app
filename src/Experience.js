//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Experience(){

    const boxRef = useRef();

    useFrame((state, delta) => {
        boxRef.current.rotation.x += 1 * delta;
    })

    return<>
        <mesh ref={boxRef} position={[0, -3, 0]}>
            <boxGeometry></boxGeometry>
            <meshBasicMaterial color={"mediumpurple"}></meshBasicMaterial>
        </mesh>
        <mesh> position={[1, 5, 5]}
            <coneGeometry></coneGeometry>
            <meshBasicMaterial color={"yellow"}></meshBasicMaterial>
        </mesh>
    </>
    
}
    
