<template>
  <div class="column wrapper">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-grey">
          {{ title }}
        </p>
      </header>
      <div class="card-content">
        <img :src="imgUrl" :alt="imgUrl" type="is-primary" />
        <div class="content has-text-centered"></div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <span>
            <slot />
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style >
img {
  width: 200px;
  max-height: 130px;
  object-fit: contain;
}
</style>
