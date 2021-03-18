<template>
  <div id="app">
    <a class="container" href="https://github.com/aouos">Hi, I am aouos</a>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
:root {
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  box-sizing: border-box;
}

:is(body, div, span, p, button, img) {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  user-select: none;
}

a {
  font-size: 2.4em;
  color: #333;
  text-decoration: none;
}
</style>
