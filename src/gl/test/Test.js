import React, { Component } from "react";
import * as THREE from "three";
import img from "../test.jpg";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class Test extends Component {
    componentDidMount() {
        var scene = new THREE.Scene();
        var clock = new THREE.Clock();
        var camera = new THREE.PerspectiveCamera(
            10,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0xffffff, 1);
        var controls = new OrbitControls(camera, renderer.domElement);

        renderer.setSize(window.innerWidth, window.innerHeight);
        this.mount.appendChild(renderer.domElement);

        // var geometry = new THREE.BoxGeometry(1, 1, 1);
        // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var geometry = new THREE.PlaneGeometry(0.4, 0.6, 32, 32);
        var material = new THREE.ShaderMaterial({
            // vertexShader,
            // fragmentShader,
            uniforms: {
                uTime: { value: 0.0 },
                uTexture: { value: new THREE.TextureLoader().load(img) }
            },
            wireframe: true,
            side: THREE.DoubleSide
        });
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        var addEvents = function() {
            window.requestAnimationFrame(run);
        // window.addEventListener("resize", this.onResize.bind(this), false);
        }
    
        var run = function() {
            requestAnimationFrame(run);
            render();
        }
    
        var render = function() {
            material.uniforms.uTime.value = clock.getElapsedTime();
            renderer.render(scene, camera);
        }

        addEvents();
    }
    render() {
        return <div ref={ref => (this.mount = ref)} />;
    }
}

export default Test;