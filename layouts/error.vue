<template>
  <section class="block basic-content">
    <div class="wrapper">
      <div class="row">
        <div class="col">
          <div class="content">
            <h1 v-if="error.statusCode === 404">Hm, this page doesn't seem to exist.</h1>
            <h1 v-else>Oh no, some kind of error!</h1>
            <p class="content">Let's get you out of here.</p>
            <NuxtLink to="/" class="btn btn-main rounded-pill">Home page</NuxtLink>
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
