<template>
  <footer class="fixed w-full bottom-0 bg-color-footer py-6">
    <div class="mx-auto">
      <!-- <hr class="mb-6 border-b-1 border-gray-700" /> -->
      <div class="w-full md:w-full px-4 text-center">
        <div class="text-lg text-black font-semibold py-1">
          <h1>Neekah</h1>
          <p>Online Wedding Invitation</p>
        </div>
        <div class="text-sm text-black font-semibold py-1">
          <span class="px-3 inline-block py-1">Logo IG</span>
          <span class="px-3 inline-block py-1">Logo FB</span>
          <span class="px-3 inline-block py-1">Logo YT</span>
        </div>
        <p class="text-sm text-black font-semibold py-1">
          Copyright © {{date}} Neekah.in. All Right Reserved
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.bg-color-footer {
  background-color: #f8f7f4;
}
</style>
