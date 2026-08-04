import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene({ alpha: true })

const fov = 45
const aspect = 2 // the canvas default
const near = 0.1
const far = 100
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
camera.position.z = 50

const renderer = new THREE.WebGLRenderer({ antialias: true })

const color = 0xffffff
const intensity = 200
const light = new THREE.SpotLight(color, intensity)
light.castShadow = true
light.position.set(-40, 10, 30)
light.angle = 300
// light.target.position.set(-30, 0, 10)
light.target.position.set(0, 0, 0)

light.penumbra = 0.5
scene.add(light)
scene.add(light.target)

// Light helper
// const helper = new THREE.SpotLightHelper(light)
// scene.add(helper)

const ctx = document.createElement('canvas').getContext('2d')
ctx.canvas.width = 1024
ctx.canvas.height = 1024
ctx.fillStyle = '#382F2F'
ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

ctx.fillStyle = '#BDAEAE'
ctx.beginPath()
ctx.arc(530, 500, 500, 0, 2 * Math.PI)
ctx.fill()

let texture = new THREE.CanvasTexture(ctx.canvas)
texture.repeat.set(10, 10)
texture.wrapS = THREE.RepeatWrapping
texture.wrapT = THREE.RepeatWrapping

const material1 = new THREE.MeshPhongMaterial({
  map: texture
})

// plane
const geometry = new THREE.PlaneGeometry(120, 60, 150, 150)
const plane = new THREE.Mesh(geometry, material1)
plane.position.set(0, 0, 0)
// plane.rotation.x = Math.PI * -0.10
plane.rotation.y = Math.PI * -0.1
plane.receiveShadow = true
scene.add(plane)

let position = geometry.attributes.position
let originalPositions = position.array.slice()

const clock = new THREE.Clock()
console.log(originalPositions)
console.log(clock)

renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.getElementById('container')?.appendChild(renderer.domElement)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

function animate() {
  function animate() {
    const time = clock.getElapsedTime()

    const positions = position.array

    for (let i = 0; i < position.count; i++) {
      const index = i * 3

      const x = originalPositions[index]
      const y = originalPositions[index + 1]

      const wave = Math.sin(x * 0.5 + time * 0.5) * 1 + Math.sin(y * 1.0 + time * 0.5) * 1

      positions[index + 2] = wave
    }

    position.needsUpdate = true
    texture.needsUpdate = true

    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()
