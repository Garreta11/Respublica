'use client'

import styles from './page.module.scss'
import { MousePositionProvider } from './utils/MousePositionContext'
import Lenis from '@studio-freight/lenis'
import { useEffect, useState } from 'react'
import Loadingpage from './components/loadingpage'
import Xmasstree from "./components/xmass_tree"
import Intro from './components/intro'
import Wedonate from './components/wedonate'
import Video from './components/video'
import Xmass from './components/xmass_balls'
import Wishes from './components/wishes'
import AudioIcon from './components/audio_icon'
import Footer from './components/footer'

import sources from './utils/sources';

import { TextureLoader } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false)
  const [start, setStart] = useState(false)
  const [audio, setAudio] = useState()

  const [santaModel, setSantaModel] = useState()
  const [treeModel, setTreeModel] = useState()
  const [merryText, setMerryText] = useState()

  let loaders
  let toLoad
  let items = {}
  let loaded = 0

  useEffect(() => {
    toLoad = sources.length;
    setLoaders()
    startLoading(sources)
  }, [])

  useEffect(() => {
    const lenis = new Lenis()
    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  const setLoaders = () => {
    loaders = {};
    loaders.gltfLoader = new GLTFLoader();
    loaders.textureLoader = new TextureLoader();
  }

  const startLoading = (allSources) => {
    
    for (const source of allSources) {
        if (source.type === "gltfModel") {
          loaders.gltfLoader.load(source.path, (model) => {
            if (source.name === 'santaclaus') {
              setSantaModel(model)
            }

            if (source.name === 'tree') {
              setTreeModel(model)
            }
            sourceLoaded(source, model);
          });
        } else if (source.type === "textureModel") {
          loaders.textureLoader.load(source.path, (texture) => {
            if (source.name === 'merryChristmas') {
              setMerryText(texture)
            }
            sourceLoaded(source, texture);
          });
        }
    }     
  }

  const sourceLoaded = (source, file) => {
    items[source.name] = file;
    loaded++;
    if (loaded === toLoad) {
      console.log('** READY **')
      setIsLoaded(true)
    }
  }

  const receiveDataFromButton = (data) => {
    setStart(data)
  }

  return (
    <main className={styles.main}>

      {!start && (
        <Loadingpage tree={treeModel} showbtn={isLoaded} sendDataToParent={receiveDataFromButton}/>
      )}
        <MousePositionProvider>
          
          <div className={styles.main_tree}>
            <Xmasstree tree={treeModel} start={start}/>
          </div>

          {start && (
            <>
              <Intro />
              <Wedonate santa={santaModel} />
              <Video texture={merryText}/>
              <Xmass />
              <Wishes />
              <AudioIcon/>
              <Footer />
            </>
          )}
        </MousePositionProvider>    
    </main>
  )
}
