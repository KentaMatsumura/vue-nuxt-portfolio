<template>
  <div class="column wrapper">
    <div class="card">
      <header class="card-header" :style="cardHFColor(type)">
        <p class="card-header-title has-text-grey">
          {{ title }}
        </p>
      </header>
      <div class="card-content" :style="cardContentColor(type)">
        <img :src="imgUrl" :alt="imgUrl" type="is-primary" />
        <div class="content has-text-centered"></div>
      </div>
      <footer class="card-footer" :style="cardHFColor(type)">
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
    type: {
      type: Number,
      required: true,
    },
  },
  data: function () {
    return {
      hfStyles: {
        0: { backgroundColor: "#f69679" },
        1: { backgroundColor: "#d0e39b" },
        2: { backgroundColor: "#fff799" },
      },
      contentStyles: {
        0: { backgroundColor: "#f1bea7" },
        1: { backgroundColor: "#e1eec1" },
        2: { backgroundColor: "#fffac2" },
      },
    };
  },
  methods: {
    cardHFColor(type) {
      return this.hfStyles[type];
    },
    cardContentColor(type) {
      return this.contentStyles[type];
    },
  },
};
</script>

<style >
img {
  width: 200px;
  max-height: 120px;
  object-fit: contain;
}
</style>
