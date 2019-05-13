<template>
  <div id="container">
    <span id="title">{{ title }}</span>
    <input
      type="text"
      :value="item"
      :class="{err}"
      v-on:keyup="validate($event.target.value)"
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
    return {
      err: false
    };
  },
  props: ["title", "item"],
  methods: {
    updateForm(item) {
      this.$emit("input", item);
    },
    validate(i) {
      this.err = /[^a-zA-Z]/.test(i);
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
.err,
.err:focus {
  border: 3px solid tomato;
  outline: none;
  box-shadow: none;
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 5px 20px;
  width: 30%;
}
</style>
