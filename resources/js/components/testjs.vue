<template>
  <v-sheet class="item" elevation="5">
    <v-row class="pa-2" no-gutters>
      <h4>
        {{ testprop.name }}
      </h4>
    </v-row>

    <v-divider></v-divider>

    <v-row class="pa-2" no-gutters>
      <div>
        Id:
      </div>
      <div>
        {{ testprop.id }}
      </div>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: "TestTs",
  props: {
    testprop: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="sass" />
