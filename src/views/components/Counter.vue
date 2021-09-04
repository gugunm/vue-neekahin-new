<template>
  <span class="px-2">{{displaydays}}</span>
  <span class="px-2">{{displayhours}}</span>
  <span class="px-2">{{displayminutes}}</span>
  <span class="px-2">{{displayseconds}}</span>
</template>

<script>
export default {
    props: ["tahun", "bulan", "hari"],
  data: function(){
  	return{
      displaydays: "",
      displayhours: "",
      displayminutes: "",
      displayseconds: "",
    };
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
    end(){
      return new Date(
        this.tahun,
        this.bulan,
        this.hari
      );
    },
  },
  mounted(){
    this.showRemaining();
  },
  methods: {
    formatNum: num => (num < 10 ? "0" + num : num),
    showRemaining(){
      const timer = setInterval(() => {
        const now = new Date();
        // const end = new Date(2022, 4, 22);
        const distance = this.end.getTime() - now.getTime();

        if (distance < 0) {
          clearInterval(timer);
          return;
        }

        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayminutes = this.formatNum(minutes);
        this.displayseconds = this.formatNum(seconds);
        this.displayhours = this.formatNum(hours);
        this.displaydays = this.formatNum(days);


      }, 1000);
    }

  }
}
</script>

<style scoped>

</style>

