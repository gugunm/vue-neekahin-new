<template>
  <div>
    <h3>hello world</h3>
    <Counter
      :tahun="2022"
      :bulan="1"
      :hari="22"
    />
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
export default {
  components:{
    Counter
  }
}
</script>

<style lang="scss" scoped>
</style>
