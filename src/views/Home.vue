<template>
  <div>
      <h2>Elije el juego al que quieras jugar</h2>

    <router-view/>

    <div id="nav">
      <button class="boton principal"><router-link to="/reymanda"><span>Rey Manda</span></router-link></button>
      <button class="boton principal"><router-link to="/yonunca"><span>Yo nunca</span></router-link></button>
      <button class="boton principal"><router-link to="/masprobable"><span>Mâs probable</span></router-link></button>
    </div>
  </div>
</template>