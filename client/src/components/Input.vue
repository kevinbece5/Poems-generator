<template>
  <div id="container">
    <span id="title">{{ title }}</span>

    <input
      type="text"
      :value="item"
      @input="updateForm($event.target.value)"
      ref="input"
      class="form-control formInput"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
    >
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
.formInput {
  font-size: 20px;
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 5px 20px;
  width: 30%;
}
</style>
