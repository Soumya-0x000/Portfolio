import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { useTheme } from "../hook/ThemeContext";

const StarBackground = (props) => {
    const ref = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(props.starsCount), { radius: 1.2 })
    );
    
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });
    
    return (
        <group rotation={[0, 0, Math.PI / 9]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#FFFFFF"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = ({starsCount}) => {
    const {mode} = useTheme()

    return (
        <div className={`-z-10 w-full min-h-screen max-h-full fixed inset-0 ${mode === 'dark' ? 'bg-slate-900' : ''}`}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    {mode === 'dark' ? (
                        <StarBackground starsCount = {starsCount}/>
                    ) : (
                        <></>
                    )}
                </Suspense>
            </Canvas>
        </div>
    )
};

export default StarsCanvas;
