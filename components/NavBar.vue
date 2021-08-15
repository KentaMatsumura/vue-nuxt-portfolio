<template>
  <nav
    class="navbar header has-shadow is-primary"
    role="navigation"
    aria-label="main navigation"
  >
    <v-container>
      <div class="navbar-brand">
        <v-row>
          <v-col>
            <a class="navbar-item" href="/">
              <!-- <img src="~assets/buefy.png" alt="Buefy" height="28" /> -->
              <p>Bomber Yeah</p>
            </a>
          </v-col>
          <v-col>
            <div v-if="!$store.getters.getUserName">
              <button class="button is-primary is-rounded" @click="login">
                ログイン
              </button>
            </div>
            <div v-else>
              <p>{{ $store.getters.getUserName }}</p>
              <button class="button is-primary is-rounded" @click="logout">
                ログアウト
              </button>
            </div>
          </v-col>

          <div class="navbar-burger">
            <span />
            <span />
            <span />
          </div>
        </v-row>
      </div>
    </v-container>
  </nav>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch("login");
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
