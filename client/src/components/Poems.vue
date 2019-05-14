<template>
  <div>
    <span v-if="poems.length" id="title">All Poems!</span>
    <span v-else id="title">Oh no! You don't have any poems</span>
    <ul class="list-group list-group-flush">
      <Poem
        v-for="poem in poems"
        :key="poem.id"
        :poem="poem"
        :saveEdit="saveEdit"
        :deletePoem="deletePoem"
      />
    </ul>
  </div>
</template>

<script>
import * as axios from "axios";
import * as moment from "moment";
import Poem from "./Poem.vue";
export default {
  components: {
    Poem
  },
  data() {
    return {
      poems: [],
      editMode: false
    };
  },
  mounted: function() {
    axios.get("/poems").then(res => {
      this.poems = res.data;
    });
  },
  methods: {
    deletePoem(id) {
      axios.delete(`/poem/${id}`).then(this.getPoems());
    },
    saveEdit(newPoem, oldPoem) {
      // will only update when changes are made
      if (newPoem !== oldPoem.poem) {
        axios
          .put(`/poem/${oldPoem.id}`, {
            poem: newPoem,
            timeStamp: `${moment().format("LLL")} (updated)`
          })
          .then(this.getPoems());
      }
    },
    getPoems() {
      axios.get("/poems").then(res => {
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
.poem {
  width: 80%;
  display: flex;
}
.listItem {
  display: flex;
}
.buttons {
  width: 5%;
  margin: 0 20px;
}
</style>
