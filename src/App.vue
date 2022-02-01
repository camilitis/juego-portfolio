<template>
  <div>
    <section class="container">

  <h1 class="heading__title">Juegos - DemoVersion</h1>

    <router-view/>

</section>

<footer>
    Project made by <a href="https://camilaguerra.vercel.app/">Camila</a> | CSS by <a href="https://codepen.io/cassie-codes">Cassie Evans</a> | <a>Github repository</a>
</footer>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Dongle-Regular';
  src: local("Dongle-Regular"), url('./fonts/Dongle-Regular.ttf')
}

$lilac: #a39bd2;
$gris: hsl(198, 1%, 29%);

#app{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #2c3e50;
}

*{
  font-family: 'Dongle-Regular', sans-serif;
}

html, body, #root, #root>div {
  height: 100vh;
  margin: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body {
  background-color: $lilac;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $gris;
  text-align: center;
}

.container {
  height: 90vh;
  max-width: 95vw;
  min-width: 85vw;
  background: #f1f5f8;
  background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
  background-size: 25px 25px;
  border-radius: 20px;
  box-shadow: 4px 3px 7px 2px #00000040;
  padding: .1rem 1rem 0rem 1rem;
  overflow: auto;
}
.heading__title {
  transform: rotate(2deg);
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  background-color: hsla(166, 100%, 50%, 0.7);
  font-size: 3.7rem;
  margin-top: 3rem;
}

.boton {
  padding: 0;
  border: none;
  margin: 1rem;
  transform-origin: center;
  text-decoration: none;
  padding-bottom: 3px;
  border-radius: 5px;
  box-shadow: 0 2px 0 hsl(198, 1%, 29%);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-image: url('data:image/gif;base64,R0lGODlhBAAEAIABAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NUY1OENCRDdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NUY1OENCRTdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RjU4Q0JCN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1RjU4Q0JDN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAAAQABAAAAgYEEpdoeQUAOw==');
  background-color: hsla(166, 100%, 50%, 0.7);
  touch-action: manipulation;
}
.boton span, .text-box {
  background: #f1f5f8;
  display: block;
  border-radius: 5px;
  border: 2px solid hsl(198, 1%, 29%);
}
.boton:active {
  transform: translateY(4px);
}
.principal{
  font-size: 2rem;
  width: 45vw;
}
.boton__juego{
  font-size: 2rem;
  width: 30rem;
  cursor: pointer;
}
.modal {
  font-size: 1.5rem;
  color: $gris;
}

#nav{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.juego{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h2{
    font-size: 3.5rem;
    padding: 0;
    margin: 0;
  }
}

.text-box{
  height: 30vh;
  width: 70vw;
  border: 2px solid black;
  box-sizing: border-box;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.3rem;
  font-size: 1.9rem;
}

footer{
  font-size: 1.2rem;
  padding-top: .5rem;
  a{
    color: #2c3e50;
    text-decoration: underline;
    text-decoration-color: #00ffc3c9;
    &:hover{
      opacity: 0.7;
    }
  }
}
.menu-juego{
  display: flex;
  justify-content: space-around;
  a{
    color: #2c3e50;
    text-decoration: none;
    font-size: 1.5rem;
  }
  span{
    width: 15vw;
  }
}

//Boton toggle
.switch-field {
  display: flex;
  justify-content: space-between;
  width: 32rem;
  padding: .5rem;
  font-size: 1.35rem;
}
.switch-field input {
  display: none;
}
.switch-field label{
  width: 10rem;
}
.switch-field label:hover {
  cursor: pointer;
}
.switch-field input:checked + label {
  background-color: $lilac;
  box-shadow: none;
}

button {
  background: none;
  border: none;
  outline: inherit;
  cursor: pointer;
  color: $gris;
}

//--MediaQuery--
@media (max-width: 700px) {
.container {
  height: 90vh;
  width: 85vw;
  padding: .1rem 1rem 0rem 1rem;
  display: flex;
  flex-direction: column;
}
.heading__title {
  font-size: 4rem;
  padding: 0;
  margin: 1.5rem;
}
.principal{
  font-size: 2rem;
  width: 65vw;
}
.boton__juego{
  font-size: 2rem;
  width: 85vw;
  cursor: pointer;
}
.modal {
  font-size: 1.5rem;
  color: $gris;
}
footer{
  padding-top: .5rem;
  font-size: 1rem;
  line-height: .7rem;
}
.menu-juego{
  span{
    width: 30vw;
  }
}
.juego{
  h1{
    font-size: 3rem;
    margin: -1rem;
  }
}
.text-box{
  width:85vw;
}
.switch-field {
  font-size: 1.1rem;
  width: 93vw;
  margin: -1rem;
}
}

@media (min-width: 300px) and (max-width: 380px) {
.container{
  h1{
    font-size: 3.3rem;
    margin-top: .8rem;
  }
}
.juego{
  h2{
    font-size: 2.3rem;
    margin: -.7rem;
  }
}
.boton__juego{
  font-size: 1.6rem;
}
.text-box{
  font-size: 1.7rem;
  }
.switch-field {
  width: 95vw;
  padding: 0;
  margin: -1rem;
  font-size: .8rem;
}
.menu-juego{
  a{
    font-size: 1.2rem;
  }
  span{
    width: 20vw;
  }
}
.modal {
  font-size: 1.2rem;
}
}
</style>