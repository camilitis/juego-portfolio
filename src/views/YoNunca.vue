<template>
    <div>
<div class="yonunca juego">

    <h2>Yo Nunca</h2>

    <router-view/>

    <div class="menu-juego">
      <button class="boton" @click="$store.commit('resetearstate')"><router-link to="/"><span>← Volver</span></router-link></button>
      <button class="boton modal" @click="$refs.modalName.openModal()"><span>Cômo jugar</span></button>
    </div>

      <TextBox/>

    <button class="boton boton__juego" @click="sendRMtoData()"><span>Yo nunca nunca...</span></button>

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
      <p>Las personas que han hecho en algún momento de su vida lo afirmado en la tarjeta deberán tomar un trago de alcohol.</p>
    </template>

  </modal>
    </div>
</template>

<script>
import TextBox from '@/components/TextBox.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'text-box',
  components: {
    TextBox,
    Modal,
  },
  methods: {
    sendRMtoData(state){
      if(this.$refs.rmvanilla.checked == true) {
        this.$store.commit('renderYoNunca', state)
      }else if(this.$refs.rmmerge.checked == true){
        this.$store.commit('renderYoNuncaMerge', state)
      }else{
        this.$store.commit('renderYoNuncaPicante', state)
      }
    }
  }


}
</script>