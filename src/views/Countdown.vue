<template>
  <div>
    <h3>hello world</h3>
    <Counter
      :tahun="2021"
      :bulan="9"
      :hari="5"
    />
  </div>
</template>

<script>
import Counter from '@/views/components/Counter.vue';
export default {
  components: {
    Counter,
  },
};
</script>

<style lang="scss" scoped>
</style>
