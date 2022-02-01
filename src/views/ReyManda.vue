<template>
    <div>
        <div class="reymanda juego">

    <h2>Rey Manda</h2>

    <router-view/>

    <div class="menu-juego">
      <button class="boton" @click="$store.commit('resetearstate')"><router-link to="/"><span>← Volver</span></router-link></button>
      <button class="boton modal" @click="$refs.modalName.openModal()"><span>Cômo jugar</span></button>
    </div>

      <TextBox/>

    <button class="boton boton__juego" @click="sendRMtoData(); $store.commit('cambiarTragos')"><span>El rey dice que...</span></button>

    <form>
      <div class="switch-field">
        <input type="radio" id="radio-one" name="switch-one" value="rm-vanilla" ref="rmvanilla" checked/>
        <label class="boton" for="radio-one"><span>Vanilla</span></label>
        <input type="radio" id="radio-two" name="switch-one" value="rm-merge" ref="rmmerge"/>
        <label class="boton" for="radio-two"><span>Agregar picante</span></label>
        <input type="radio" id="radio-three" name="switch-one" value="rm-solopicante" ref="rmsolopicante" />
        <label class="boton" for="radio-three"><span>Solo picante</span></label>
      </div>
    </form>

  </div>


  <modal ref="modalName">
    <template v-slot:header>
      <h1>Cômo jugar</h1>
    </template>

    <template v-slot:body>
      <p>En orden, cada jugador tiene que apretar el botón y hacer lo que la tarjeta dice.</p>
    </template>

  </modal>
    </div>
</template>

<script>
import TextBox from '@/components/TextBox.vue'
import Modal from "@/components/Modal"

export default {
  name: 'text-box',
  components: {
    TextBox,
    Modal
  },
  methods: {
    sendRMtoData(state){
      if(this.$refs.rmvanilla.checked == true) {
        this.$store.commit('renderReyManda', state)
      }else if(this.$refs.rmmerge.checked == true){
        this.$store.commit('renderReyMandaMerge', state)
      }else{
        this.$store.commit('renderReyMandaPicante', state)
      }
    }
  }


}
</script>