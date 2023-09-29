import EventEmitter from "./EventEmitter";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default class Resources extends EventEmitter {
    constructor(sources) {
        super();
        this.sources = sources;
        this.toLoad = this.sources.length;
        this.items = {};
        this.loaded = 0;
        // this.setLoaders();
        // this.startLoading();
    }

    setLoaders = () => {
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader();
    }

    startLoading = () => {
        console.log("** set loaders **")
        
        for (const source of this.sources) {
            if (source.type === "gltfModel") {
                this.loaders.gltfLoader.load(source.path, (model) => {
                    this.sourceLoaded(source, model);
                });
            }
        }     
    }

    sourceLoaded = (source, file) => {
        this.items[source.name] = file;
        this.loaded++;
        if (this.loaded === this.toLoad) {
          console.log('** READY **')
        }
    }

}