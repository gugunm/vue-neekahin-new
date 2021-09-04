<template>
  <div class="flex justify-center">
    <div class="time text-center flex flex-col justify-center px-4 py-2 rounded mx-1 ">
      <span class="text-2xl font-thin">{{displaydays}}</span>
      <span class="font-light text-sm text-gold">Hari</span>
    </div>
    <div class="time text-center flex flex-col justify-center px-4 py-2 rounded mx-1">
      <span class="text-2xl font-thin">{{displayhours}}</span>
      <span class="font-light text-sm text-gold">Jam</span>
    </div>
    <div class="time text-center flex flex-col justify-center px-4 py-2 rounded mx-1">
      <span class="text-2xl font-thin">{{displayminutes}}</span>
      <span class="font-light text-sm text-gold">Menit</span>
    </div>
    <div class="time text-center flex flex-col justify-center px-4 py-2 rounded mx-1">
      <span class="text-2xl font-thin">{{displayseconds}}</span>
      <span class="font-light text-sm text-gold">Detik</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tahun', 'bulan', 'hari', 'jam', 'menit'],
  data: function () {
    return {
      endDate: new Date(
        this.tahun,
        this.bulan - 1,
        this.hari,
        this.jam,
        this.menit
      ),
      displaydays: '',
      displayhours: '',
      displayminutes: '',
      displayseconds: '',
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
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum: (num) => (num < 10 ? '0' + num : num),
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const distance = this.endDate.getTime() - now.getTime();
        if (distance < 0) {
          this.displayminutes = '00';
          this.displayseconds = '00';
          this.displayhours = '00';
          this.displaydays = '00';
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
      }, 0);
    },
  },
};
</script>

<style scoped>
.time {
  box-shadow: inset 1.41304px 1.41304px 2.82609px rgba(0, 0, 0, 0.25);
  width: 85px;
  height: 85px;
}
</style>

