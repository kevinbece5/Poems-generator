<template>
  <div>
    <span v-if="poems.length" id="title">All Poems!</span>
    <span v-else id="title">Oh no! You don't have any poems</span>
    <ul class="list-group list-group-flush">
      <li :key="poem.id" v-for="poem in poems" class="list-group-item listItem">
        <span class="poem">{{poem.poem}}</span>
        <span class="timeStamp">{{poem.timeStamp}}</span>
        <button v-on:click="deletePoem(poem.id)" type="button" class="btn btn-danger">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import * as axios from "axios";
export default {
  data() {
    return {
      poems: []
    };
  },
  mounted: function() {
    axios.get("http://localhost:3000/poems").then(res => {
      this.poems = res.data;
    });
  },
  methods: {
    deletePoem(id) {
      console.log("poem", id);
      axios.delete(`http://localhost:3000/poem/${id}`).then(this.getPoems());
    },
    getPoems() {
      axios.get("http://localhost:3000/poems").then(res => {
        this.poems = res.data;
      });
    }
  }
};
</script>

<style scoped>
#title {
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-family: sans-serif;
}
.timeStamp {
  width: 12%;
  justify-content: center;
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
</style>
