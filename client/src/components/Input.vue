<template>
  <div id="container">
    <span id="title">{{ title }}</span>
    <input :value="item" @input="updateForm($event.target.value)" ref="input">
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["title", "item"],
  methods: {
    updateForm(item) {
      this.$emit("input", item);
    }
  }
};
</script>

<style scoped>
#title {
  font-size: 35px;
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 22px;
}
</style>
