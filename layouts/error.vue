<template>
  <section class="block error">
    <div class="wrapper">
      <div class="row">
        <div class="col">
          <div class="content">
            <h1>
              Hm, this page doesn't seem to exist.
            </h1>
            <p>Let's get you out of here.</p>
            <NuxtLink to="/" class="btn btn-main rounded-pill"
              >Home page</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style scoped lang="scss">
.content {
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
