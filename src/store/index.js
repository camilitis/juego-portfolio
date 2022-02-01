import { createStore } from 'vuex'
import reyManda from '@/juegos/reyManda.js'
import reyMandaPicante from '@/juegos/reyMandaPicante.js'
import yoNunca from '@/juegos/yoNunca.js'
import yoNuncaPicante from '@/juegos/yoNuncaPicante.js'

export default createStore({
  state: {
    prenda: 'Aprieta el botôn',

    reymanda: reyManda,
    reymandapicante: reyMandaPicante,

    yonunca: yoNunca,
    yonuncapicante: yoNuncaPicante,

    reymandamerge: [],
    yonuncamerge: yoNuncaPicante + yoNunca
  },
  mutations: {
    resetearstate(state){
      state.prenda = 'Aprieta el botôn'
    },

    renderReyManda(state){
      state.prenda = state.reymanda[Math.floor(Math.random()*state.reymanda.length)]
    },
    renderReyMandaMerge(state){
      let reymandaconcat = state.reymanda.concat(state.reymandapicante)
      state.prenda = reymandaconcat[Math.floor(Math.random()*reymandaconcat.length)]
    },
    renderReyMandaPicante(state){
      state.prenda = state.reymandapicante[Math.floor(Math.random()*state.reymandapicante.length)]
    },

    renderYoNunca(state){
      state.prenda = state.yonunca[Math.floor(Math.random()*state.yonunca.length)]
    },
    renderYoNuncaMerge(state){
      let yonuncaconcat = state.yonunca.concat(state.yonuncapicante)
      state.prenda = yonuncaconcat[Math.floor(Math.random()*yonuncaconcat.length)]
    },
    renderYoNuncaPicante(state){
      state.prenda = state.yonuncapicante[Math.floor(Math.random()*state.yonuncapicante.length)]
    }
  },
  actions: {
  },
  modules: {
  }
})