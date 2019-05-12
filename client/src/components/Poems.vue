<template>
  <div>
    <ul class="list-group list-group-flush">
      <li :key="poem.id" v-for="poem in poems" class="list-group-item">
        <span>{{poem.poem}}</span>
        <button v-on:click="deletePoem(poem.id)" type="button" class="btn btn-danger">Delete</button>
        <button type="button" class="btn btn-info">Info</button>
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
</style>
