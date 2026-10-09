"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type PcbViewerProps = {
    modelUrl: string;
    label: string;
};

function disposeModel(object: THREE.Object3D) {
    object.traverse((child) => {
        const mesh = child as THREE.Mesh;
        if (!mesh.isMesh) return;

        mesh.geometry.dispose();
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        materials.forEach((material) => material.dispose());
    });
}

export default function PcbViewer({ modelUrl, label }: PcbViewerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [loadError, setLoadError] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        setLoadError(false);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.domElement.className = "pcbCanvas";
        renderer.domElement.setAttribute("aria-hidden", "true");
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
        camera.position.set(0, 0, 5);

        scene.add(new THREE.HemisphereLight(0xdceeff, 0x10233d, 2.4));
        const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
        keyLight.position.set(4, 5, 6);
        scene.add(keyLight);
        const rimLight = new THREE.DirectionalLight(0x5597d1, 2.5);
        rimLight.position.set(-5, 1, -4);
        scene.add(rimLight);

        const pivot = new THREE.Group();
        pivot.rotation.set(-0.3, 0.55, 0);
        scene.add(pivot);

        let disposed = false;
        let model: THREE.Object3D | undefined;

        new GLTFLoader().load(
            modelUrl,
            (gltf) => {
                if (disposed) {
                    disposeModel(gltf.scene);
                    return;
                }

                model = gltf.scene;
                const bounds = new THREE.Box3().setFromObject(model);
                const size = bounds.getSize(new THREE.Vector3());
                const largestDimension = Math.max(size.x, size.y, size.z) || 1;
                model.scale.setScalar(2.8 / largestDimension);
                model.updateMatrixWorld(true);

                const centeredBounds = new THREE.Box3().setFromObject(model);
                model.position.sub(centeredBounds.getCenter(new THREE.Vector3()));
                pivot.add(model);
            },
            undefined,
            () => setLoadError(true),
        );

        const canvas = renderer.domElement;
        const velocity = new THREE.Vector2();
        let dragging = false;
        let lastX = 0;
        let lastY = 0;

        const rotate = (deltaX: number, deltaY: number) => {
            pivot.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), deltaX);
            pivot.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), deltaY);
        };

        const onPointerDown = (event: PointerEvent) => {
            dragging = true;
            lastX = event.clientX;
            lastY = event.clientY;
            canvas.setPointerCapture(event.pointerId);
            canvas.classList.add("isDragging");
        };

        const onPointerMove = (event: PointerEvent) => {
            if (!dragging) return;

            velocity.set((event.clientX - lastX) * 0.008, (event.clientY - lastY) * 0.008);
            rotate(velocity.x, velocity.y);
            lastX = event.clientX;
            lastY = event.clientY;
        };

        const onPointerUp = (event: PointerEvent) => {
            dragging = false;
            if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
            canvas.classList.remove("isDragging");
        };

        canvas.addEventListener("pointerdown", onPointerDown);
        canvas.addEventListener("pointermove", onPointerMove);
        canvas.addEventListener("pointerup", onPointerUp);
        canvas.addEventListener("pointercancel", onPointerUp);

        const resize = () => {
            const { width, height } = container.getBoundingClientRect();
            renderer.setSize(width || 1, height || 1, false);
            camera.aspect = (width || 1) / (height || 1);
            camera.updateProjectionMatrix();
        };

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);
        resize();

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        renderer.setAnimationLoop(() => {
            if (!dragging && !prefersReducedMotion) {
                velocity.multiplyScalar(0.94);
                if (velocity.lengthSq() > 0.000001) rotate(velocity.x, velocity.y);
            }
            renderer.render(scene, camera);
        });

        return () => {
            disposed = true;
            renderer.setAnimationLoop(null);
            resizeObserver.disconnect();
            canvas.removeEventListener("pointerdown", onPointerDown);
            canvas.removeEventListener("pointermove", onPointerMove);
            canvas.removeEventListener("pointerup", onPointerUp);
            canvas.removeEventListener("pointercancel", onPointerUp);
            if (model) disposeModel(model);
            renderer.dispose();
            canvas.remove();
        };
    }, [modelUrl]);

    return (
        <div
            ref={containerRef}
            className="pcbViewer"
            role="img"
            aria-label={`${label} için etkileşimli 3 boyutlu model`}
        >
            <p className="pcbViewerHint">Döndürmek için sürükleyin</p>
            {loadError && <p className="pcbViewerError">3B model yüklenemedi.</p>}
        </div>
    );
}
