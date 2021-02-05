<template>
  <div class="grid">
    <div class="card">
      <div class="container">
        <h4><b>Projeto</b></h4>
        <p>Teste</p>
      </div>
    </div>
    <div class="card">
      <div class="container">
        <h4><b>Projeto</b></h4>
        <p>Teste</p>
      </div>
    </div>
    <div class="card">
      <div class="container">
        <h4><b>Projeto</b></h4>
        <p>Teste</p>
      </div>
    </div>
  </div>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: 20% 20% 20%;
  justify-items: center;
  justify-content: space-between;
	margin: 0px 200px;
	margin-top: 10vh;
}

.card {
	color: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.9);
	width: 15rem;
	height: 18rem;
	transition: all .2s ease-in-out;
}

.card:hover {
	box-shadow: 0 8px 16px 0 rgba(0,0,0,0.9);
	transform: scale(1.2);
}
</style>