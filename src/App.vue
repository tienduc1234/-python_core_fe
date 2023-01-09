<template>
  <div class="w-2/3 m-auto border  shadow-md p-5 mt-10">
    <Navbar/>

    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from "./components/Navbar.vue"

export default {
    components:{Navbar}
}
</script>