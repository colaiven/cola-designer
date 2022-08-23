<template>
  <div :id="uuid" style="width: 100%;height:100%;"></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export default {
  name: "cpt-threeJs-dom",
  title: "模型",
  icon: 'el-icon-office-building',
  initWidth: 400,
  initHeight: 300,
  group: 'threeD',
  props:{
    width:Number,
    height:Number,
    option:Object
  },
  watch:{
    'option.attribute':{
      handler(newObj) {
        this.reloadOption(newObj);
      },
      deep: true//深度监听
    },
    width(){
      this.renderer.setSize(this.width, this.height);
    },
    height(){
      this.renderer.setSize(this.width, this.height);
    }
  },
  data() {
    return {
      uuid:'',
      camera: null,
      scene: null,
      renderer: null,
      model:null,
      controls:null,
      clock:null,
      mixer:null,
      animate:null
    };
  },
  created() {
    this.uuid = require('uuid').v1();
  },
  mounted() {
    this.initScene();
  },
  methods: {
    reloadOption(attribute){//配置项加载

      this.renderer.setClearColor(new THREE.Color( attribute.bgColor ), attribute.bgAlpha);
      this.camera.position.set( attribute.cameraX, attribute.cameraY, attribute.cameraZ );
      //环境光
      const pmremGenerator = new THREE.PMREMGenerator( this.renderer );
      this.scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.02 ).texture;

      //控件对象
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.target.set( 0, 0.5, 0 );
      this.controls.enablePan = true;
      this.controls.enableDamping = true;
      this.controls.maxDistance  = 10;
      this.controls.minDistance  = 1;
    },
    initScene() {//初始化
      const that = this;
      let container = document.getElementById(that.uuid);
      //相机
      this.camera = new THREE.PerspectiveCamera( 40, 1, 1, 100 );

      //渲染器
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha:true });
      this.renderer.setSize(that.width, that.height);
      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(this.renderer.domElement);

      that.clock = new THREE.Clock();
      that.scene = new THREE.Scene();//  创建场景对象Scene

      const loader = new GLTFLoader();
      let dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('/designData/gltf/');
      loader.setDRACOLoader( dracoLoader );

      loader.load( '/designData/LittlestTokyo.glb',  (gltf) => {
        that.reloadOption(this.option.attribute);
        that.model = gltf.scene;
        that.model.position.set( 1, 1, 1 );
        that.model.scale.set( 0.01, 0.01, 0.01 );
        that.scene.add( that.model );
        that.mixer = new THREE.AnimationMixer( that.model );
        that.mixer.clipAction( gltf.animations[ 0 ] ).play();
        that.animateRun();
      });
    },
    animateRun() {
      this.animate = requestAnimationFrame(this.animateRun);
      this.model.rotation.y += 0.001;
      const delta = this.clock.getDelta();
      this.mixer.update( delta );
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
    },
  },
  beforeDestroy() {
    cancelAnimationFrame(this.animate);
    this.scene = null;
    this.renderer.clear();
    this.camera = null;
    this.controls.dispose();
  }
}
</script>

<style scoped>

</style>
