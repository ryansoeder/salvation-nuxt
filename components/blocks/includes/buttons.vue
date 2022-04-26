<template>
  <div class="buttons" v-if="buttons">
    <template v-for="(row, index) in buttons">
      <a
        :key="index"
        v-if="
          row.button.url.includes('http') || row.button.url.includes('https')
        "
        :href="row.button.url"
        :target="row.button.target"
        class="btn btn-main rounded-pill"
        >{{ row.button.title }}</a
      >
      <NuxtLink
        :key="index"
        v-else
        :to="row.button.url"
        :target="row.button.target"
        class="btn btn-main rounded-pill"
        >{{ row.button.title }}</NuxtLink
      >
    </template>
  </div>
</template>

<script>
export default {
  name: 'Buttons',
  props: {
    buttons: Array,
  },
}
</script>

<style scoped lang="scss">
.buttons {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .btn {
    margin-bottom: 20px;
    width: auto;
    min-width: 256px;
  }
}
</style>
