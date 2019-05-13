<template>
  <li class="list-group-item listItem">
    <div v-if="!editMode" class="poemContainer">
      <span class="poem">{{poem.poem}}</span>
      <span class="timeStamp">{{poem.timeStamp}}</span>
    </div>
    <textarea
      v-else
      class="form-control"
      @input="updatePoem($event.target.value)"
      ref="input"
      :value="poem.poem"
    ></textarea>

    <button v-on:click="deletePoem(poem.id)" type="button" class="btn btn-danger buttons">Delete</button>
    <button
      v-on:click="editMode = !editMode"
      v-if="!editMode"
      type="button"
      class="btn btn-info buttons"
    >Edit</button>
    <button
      v-on:click="editMode = !editMode; saveEdit(poemInput, poem)"
      v-else
      type="button"
      class="btn btn-info buttons"
    >Save</button>
  </li>
</template>


<script>
import * as axios from "axios";
export default {
  props: ["poem", "deletePoem", "saveEdit"],
  data() {
    return {
      poemInput: this.poem.poem,
      editMode: false
    };
  },
  methods: {
    updatePoem(item) {
      this.$emit("input", item);
      this.poemInput = item;
    }
  }
};
</script>


<style scoped>
.poemContainer {
  width: 85%;
  display: flex;
}
#title {
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-family: sans-serif;
}
.timeStamp {
  width: 20%;
  justify-content: flex-end;
  align-items: center;
  display: flex;
}
.poem {
  width: 80%;
  display: flex;
}
.listItem {
  display: flex;
}
.buttons {
  width: 70px;
  margin: 0 20px;
  height: 40px;
  align-self: center;
  justify-content: center;
}
</style>
