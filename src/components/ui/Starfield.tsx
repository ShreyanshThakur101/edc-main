import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedGrid = ({ speed = 0.1, backgroundColor = '#0a0c10' }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let width = mountRef.current.clientWidth;
    let height = mountRef.current.clientHeight;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    // Fog mimics the "Arctic Mist" to hide the horizon
    scene.fog = new THREE.FogExp2(new THREE.Color(backgroundColor), 0.02);
    scene.background = new THREE.Color(backgroundColor);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 20, 40); // High angle looking down at the ice
    camera.lookAt(0, 0, -50);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mountRef.current.appendChild(renderer.domElement);

    // --- Glacier Lighting ---
    // Ambient blue light for shadows
    const ambientLight = new THREE.AmbientLight(0x2C6EA1, 0.4); 
    scene.add(ambientLight);

    // Strong white "Sun" light to create sharp highlights on ice peaks
    const sunLight = new THREE.DirectionalLight(0xD6D6DB, 2.5);
    sunLight.position.set(10, 50, 10);
    scene.add(sunLight);

    // Deep blue point light for the "under-ice" glow
    const iceGlow = new THREE.PointLight(0x2C6EA1, 15, 100);
    iceGlow.position.set(0, -10, -20);
    scene.add(iceGlow);

    // --- 1. The Glacial Surface ---
    const planeSize = 200;
    const planeRes = 60;
    const geometry = new THREE.PlaneGeometry(planeSize, planeSize, planeRes, planeRes);
    
    // Distort the plane to create "Ice Peaks"
    const posAttr = geometry.getAttribute('position');
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      
      // Use noise logic to create sharp, jagged peaks
      const peak = Math.random() > 0.9 ? Math.random() * 8 : Math.random() * 2;
      posAttr.setZ(i, peak);
    }
    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      color: 0x8A9BB4, // Steel Blue base
      roughness: 0.1,  // Very shiny like ice
      metalness: 0.4,
      flatShading: true, // Crucial for the "chiseled ice" look
      transparent: true,
      opacity: 0.8,
    });

    const icePlane1 = new THREE.Mesh(geometry, material);
    icePlane1.rotation.x = -Math.PI / 2;
    scene.add(icePlane1);

    // Second plane for infinite scrolling illusion
    const icePlane2 = icePlane1.clone();
    icePlane2.position.z = -planeSize;
    scene.add(icePlane2);

    // --- 2. Snowflakes/Frost Particles ---
    const snowGeo = new THREE.BufferGeometry();
    const snowCount = 2000;
    const snowPos = new Float32Array(snowCount * 3);
    for (let i = 0; i < snowCount * 3; i++) {
      snowPos[i] = (Math.random() - 0.5) * 200;
    }
    snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
    const snowMat = new THREE.PointsMaterial({
      size: 0.2,
      color: 0xD6D6DB,
      transparent: true,
      opacity: 0.6
    });
    const snow = new THREE.Points(snowGeo, snowMat);
    scene.add(snow);

    // --- Animation Loop ---
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      requestAnimationFrame(animate);

      // Move ice planes toward camera
      const moveAmount = speed * 50 * delta;
      icePlane1.position.z += moveAmount;
      icePlane2.position.z += moveAmount;

      // Reset planes for infinite loop
      if (icePlane1.position.z >= planeSize) icePlane1.position.z = icePlane2.position.z - planeSize;
      if (icePlane2.position.z >= planeSize) icePlane2.position.z = icePlane1.position.z - planeSize;

      // Subtle snow drift
      snow.position.y -= delta * 2;
      snow.rotation.y += delta * 0.05;
      if (snow.position.y < -50) snow.position.y = 50;

      // Gentle "breathing" light effect
      iceGlow.intensity = 15 + Math.sin(elapsed) * 5;

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    const handleResize = () => {
      if (!mountRef.current) return;
      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      snowGeo.dispose();
      snowMat.dispose();
      renderer.dispose();
    };
  }, [speed, backgroundColor]);

  return <div ref={mountRef} className="w-full h-full absolute top-0 left-0" />;
};

export default AnimatedGrid;