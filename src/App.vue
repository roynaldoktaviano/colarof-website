<script setup>
import {ref, computed} from 'vue'
import Home from './components/Home.vue'
import Artikel from './components/Artikel.vue'
// import NotFound from './components/Error.vue'

const routes = {
  '/' : Home,
}

const currentPath = ref(window.location.hash)

// window.addEventListener('hashchange', () => {
//   currentPath.value = window.location.hash
// })

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})
</script>

<template>
  <div class="bg-transparent absolute w-full z-20">
      <header class="nav-head flex gap-14 content-center py-8 px-10 lg:px-24 bg-transparent items-center absolute w-full z-20" id="nav">
          <div class="flex-1 text-center text-sm text-white transition-all hover:font-bold hidden md:block">
              <a href="#pemesanan">Pemesanan</a>
          </div>
          <div class="flex-1 text-center text-sm text-white transition-all hover:font-bold hidden md:block">
              <a href="#jenis">Jenis</a>
          </div>
          <div class="flex-1 text-center text-sm text-white transition-all hover:font-bold hidden md:block">
              <a href="#aksesoris">Aksesoris</a>
          </div>

          <div class="flex-1 text-left lg:text-center text-sm text-white transition-all hover:font-bold ">
              <a href="/" class="font-bold">
                  <img src="./assets/logo-putih.png" alt="Logo Colarof Glassboard Indonesia" width="fit" height="fit" class="w-10 lg:w-10 mx-auto lg:mx-auto">
              </a>
          </div>

          <div class="flex-1 text-center text-sm text-white transition-all hover:font-bold hidden md:block">
              <a href="#pengiriman">Pengiriman</a>
          </div>
          <div class="flex-1 text-center text-sm text-white transition-all hover:font-bold hidden md:block">
              <a href="#galeri">Galeri</a>
          </div>
          <div class="flex-1 text-center text-sm text-white transition-all hover:font-bold hidden md:block">
              <a href="#kontak">Kontak</a>
          </div>
      </header>

      <component :is="currentView" />
  </div>
</template>