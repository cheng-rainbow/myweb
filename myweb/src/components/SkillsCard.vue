<template>
  <div class="three-d skill-grid select-none">
    <div v-for="card in cards" class="card rounded-3xl bg-white p-4 pt-10 transition-all duration-normal dark:bg-black-2A" :key="card.id">
      <img class="mx-auto h-20 w-full object-contain" :src="card.url" alt="" />
      <div class="my-4 text-xl">
        {{ card.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const cards = [
  {
    id: 1,
    url: '/public/img/react.png',
    name: 'React',
  },
  {
    id: 2,
    url: '/public/img/typescript.png',
    name: 'Typescript',
  },
  {
    id: 3,
    url: '/public/img/vue.png',
    name: 'Vue',
  },
  {
    id: 4,
    url: '/public/img/node.png',
    name: 'Nodejs',
  },
  {
    id: 5,
    url: '/public/img/vanila.png',
    name: 'Vanila',
  },
  {
    id: 6,
    url: '/public/img/angular.png',
    name: 'Angular',
  },
  {
    id: 7,
    url: '/public/img/react.png',
    name: 'React',
  },
  {
    id: 8,
    url: '/public/img/typescript.png',
    name: 'Typescript',
  },
  {
    id: 9,
    url: '/public/img/vue.png',
    name: 'Vue',
  },
  {
    id: 10,
    url: '/public/img/node.png',
    name: 'Nodejs',
  },
  {
    id: 11,
    url: '/public/img/vanila.png',
    name: 'Vanila',
  },
  {
    id: 12,
    url: '/public/img/angular.png',
    name: 'Angular',
  },
]
</script>

<style scoped>
.three-d {
  perspective: 1000px;
  transform-style: preserve-3d;
}

.skill-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}

.card {
  transform-origin: top;
  transform: rotateX(15deg);
}

.card:hover {
  transform: rotateX(-15deg);
}

.card::before,
.card::after {
  content: '';
  position: absolute;

  width: 10px;
  height: 10px;
  background-color: #fec207;
  border-radius: 50%;
}
.card::after {
  left: 15%;
  top: 10%;
}
.card::before {
  right: 15%;
  top: 10%;
}
</style>
