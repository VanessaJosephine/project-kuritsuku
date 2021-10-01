<template>
  <!-- The badge will be shown only if there's at least 1 item in the my-favorite -->
  <span v-if="count > 0" class="badgefav">{{ count }}</span>
</template>

<script>
export default {
  name: "counter-badge-fav",
  props: ["count"]
};
</script>

<style scoped>
.badgefav {
  margin-left: 6.5rem;
  margin-bottom: 1rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: #42b983;
  color: #fff;
  font-weight: bold;
  font-size: 12px;
}

@media screen and (max-width: 920px) {
.badgefav {
    margin-left: 14rem;
    margin-bottom: 1.2rem;
    transition: 0.5s;
  }
}
</style>