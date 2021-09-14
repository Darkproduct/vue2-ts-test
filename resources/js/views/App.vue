<template>
  <v-app>
    <!-- hide-on-scroll -->
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon />
      <v-toolbar-title>TS-Test</v-toolbar-title>
      <v-spacer />
      <v-btn @click="changeTheme()" icon>
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <TestJS :testprop="{name: 'testjs', id: '1'}"></TestJS>
      <TestTS :testprop="{name: 'testts', id: '2'}"></TestTS>
    </v-main>

    <v-footer app>
      <span>&copy; 2021</span>
    </v-footer>
  </v-app>
</template>

<script>
import TestJS from "@components/testjs.vue";
import TestTS from "@components/testts.vue";

export default {
  components: {
    TestJS,
    TestTS
  },
  data: () => ({
    propdatajs: {name: "testjs", id: 1},
    propdatats: {name: "testts", id: 2},
  }),
  methods: {
    changeTheme() {
      //! Does nothing, even if the element had 'class="theme--dark"'
      // const switchOff = this.$vuetify.dark ? 'theme--dark' : 'theme--light';
      // const switchOn = this.$vuetify.dark ? 'theme--light' : 'theme--dark';

      // const themed = document.getElementsByClassName( switchOff );

      // Array.from(themed).forEach( (el) => {
      //   el.classList.remove( switchOff )
      //   el.classList.add( switchOn )
      //   console.log(el);
      // });

      // @ts-ignore
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  },
  computed: {
  }
};
</script>

<style lang="scss" src="@/sass/app.sass" />
