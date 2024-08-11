/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from "../assets/3d/Reiki_Master.glb";

export function Reiki_Master({ currentAnimation, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[18.069, -0.532, 71.384]} scale={12.398}>
          <skinnedMesh
            name="path2001"
            geometry={nodes.path2001.geometry}
            material={materials['SVGMat.001']}
            skeleton={nodes.path2001.skeleton}
          />
          <skinnedMesh
            name="path2002"
            geometry={nodes.path2002.geometry}
            material={materials['White.003']}
            skeleton={nodes.path2002.skeleton}
          />
          <skinnedMesh
            name="path2003"
            geometry={nodes.path2003.geometry}
            material={materials['White.003']}
            skeleton={nodes.path2003.skeleton}
          />
          <skinnedMesh
            name="path2004"
            geometry={nodes.path2004.geometry}
            material={materials['Black.003']}
            skeleton={nodes.path2004.skeleton}
          />
          <skinnedMesh
            name="path2005"
            geometry={nodes.path2005.geometry}
            material={materials['Black.003']}
            skeleton={nodes.path2005.skeleton}
          />
          <skinnedMesh
            name="path2006"
            geometry={nodes.path2006.geometry}
            material={materials['White.003']}
            skeleton={nodes.path2006.skeleton}
          />
          <skinnedMesh
            name="path2007"
            geometry={nodes.path2007.geometry}
            material={materials['White.003']}
            skeleton={nodes.path2007.skeleton}
          />
          <skinnedMesh
            name="path2008"
            geometry={nodes.path2008.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2008.skeleton}
          />
          <skinnedMesh
            name="path2009"
            geometry={nodes.path2009.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2009.skeleton}
          />
          <skinnedMesh
            name="path2010"
            geometry={nodes.path2010.geometry}
            material={materials['White.003']}
            skeleton={nodes.path2010.skeleton}
          />
          <skinnedMesh
            name="path2011"
            geometry={nodes.path2011.geometry}
            material={materials['Black.003']}
            skeleton={nodes.path2011.skeleton}
          />
          <skinnedMesh
            name="path2012"
            geometry={nodes.path2012.geometry}
            material={materials['Black.003']}
            skeleton={nodes.path2012.skeleton}
          />
          <skinnedMesh
            name="path2013"
            geometry={nodes.path2013.geometry}
            material={materials['White.003']}
            skeleton={nodes.path2013.skeleton}
          />
          <skinnedMesh
            name="path2014"
            geometry={nodes.path2014.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2014.skeleton}
          />
          <skinnedMesh
            name="path2015"
            geometry={nodes.path2015.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2015.skeleton}
          />
          <skinnedMesh
            name="path2016"
            geometry={nodes.path2016.geometry}
            material={materials['Black.003']}
            skeleton={nodes.path2016.skeleton}
          />
          <skinnedMesh
            name="path2017"
            geometry={nodes.path2017.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2017.skeleton}
          />
          <skinnedMesh
            name="path2018"
            geometry={nodes.path2018.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2018.skeleton}
          />
          <skinnedMesh
            name="path2019"
            geometry={nodes.path2019.geometry}
            material={materials['Black.003']}
            skeleton={nodes.path2019.skeleton}
          />
          <skinnedMesh
            name="path2020"
            geometry={nodes.path2020.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2020.skeleton}
          />
          <skinnedMesh
            name="path2021"
            geometry={nodes.path2021.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2021.skeleton}
          />
          <skinnedMesh
            name="path2022"
            geometry={nodes.path2022.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2022.skeleton}
          />
          <skinnedMesh
            name="path2023"
            geometry={nodes.path2023.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2023.skeleton}
          />
          <skinnedMesh
            name="path2024"
            geometry={nodes.path2024.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2024.skeleton}
          />
          <skinnedMesh
            name="path2025"
            geometry={nodes.path2025.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2025.skeleton}
          />
          <skinnedMesh
            name="path2026"
            geometry={nodes.path2026.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2026.skeleton}
          />
          <skinnedMesh
            name="path2027"
            geometry={nodes.path2027.geometry}
            material={materials['Black.003']}
            skeleton={nodes.path2027.skeleton}
          />
          <skinnedMesh
            name="path2028"
            geometry={nodes.path2028.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2028.skeleton}
          />
          <skinnedMesh
            name="path2029"
            geometry={nodes.path2029.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2029.skeleton}
          />
          <skinnedMesh
            name="path2030"
            geometry={nodes.path2030.geometry}
            material={materials['Black.003']}
            skeleton={nodes.path2030.skeleton}
          />
          <skinnedMesh
            name="path2031"
            geometry={nodes.path2031.geometry}
            material={materials['SVGMat.052']}
            skeleton={nodes.path2031.skeleton}
          />
          <skinnedMesh
            name="path2032"
            geometry={nodes.path2032.geometry}
            material={materials['SVGMat.051']}
            skeleton={nodes.path2032.skeleton}
          />
          <skinnedMesh
            name="path2033"
            geometry={nodes.path2033.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2033.skeleton}
          />
          <skinnedMesh
            name="path2034"
            geometry={nodes.path2034.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2034.skeleton}
          />
          <skinnedMesh
            name="path2035"
            geometry={nodes.path2035.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2035.skeleton}
          />
          <skinnedMesh
            name="path2036"
            geometry={nodes.path2036.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2036.skeleton}
          />
          <skinnedMesh
            name="path2037"
            geometry={nodes.path2037.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2037.skeleton}
          />
          <skinnedMesh
            name="path2038"
            geometry={nodes.path2038.geometry}
            material={materials['Orange.003']}
            skeleton={nodes.path2038.skeleton}
          />
          <skinnedMesh
            name="path2039"
            geometry={nodes.path2039.geometry}
            material={materials['Black.003']}
            skeleton={nodes.path2039.skeleton}
          />
          <primitive object={nodes.Elvis} />
          <primitive object={nodes.IKPoleL} />
          <primitive object={nodes.IKTargetL} />
          <primitive object={nodes.IKPoleR} />
          <primitive object={nodes.IKTargetR} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(scene);