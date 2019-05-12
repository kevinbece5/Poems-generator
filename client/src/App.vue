<template>
  <div id="container">
    <div id="header">
      <div id="headerContainer">
        <div>
          <span v-if="current === 'create'" class="headerLinkUnderline">Create Poem</span>
          <span v-else class="headerLink" v-on:click="current = 'create'">Create Poem</span>
          <span v-if="current === 'all'" class="headerLinkUnderline">All Poems</span>
          <span v-else v-on:click="current = 'all'" class="headerLink">All Poems</span>
        </div>
      </div>
    </div>
    <div v-if="current === 'create'" id="inputField">
      <!-- Nouns Field -->
      <Input v-model="formItems.noun1" :item="formItems.noun1" :title="headers.noun"/>
      <Input v-model="formItems.noun2" :title="headers.noun"/>
      <Input v-model="formItems.noun3" :title="headers.noun"/>
      <!-- Adjectives -->
      <Input v-model="formItems.adjective1" :title="headers.adjective"/>
      <Input v-model="formItems.adjective2" :title="headers.adjective"/>
      <Input v-model="formItems.adjective3" :title="headers.adjective"/>
      <!-- Adverbs -->
      <Input v-model="formItems.adverb1" :title="headers.adverb"/>
      <Input v-model="formItems.adverb2" :title="headers.adverb"/>
      <Input v-model="formItems.adverb3" :title="headers.adverb"/>
      <!-- Prepositions -->
      <Input v-model="formItems.preposition1" :title="headers.preposition"/>
      <Input v-model="formItems.preposition2" :title="headers.preposition"/>
      <Input v-model="formItems.preposition3" :title="headers.preposition"/>
      <!-- Verbs -->
      <Input v-model="formItems.verb1" :title="headers.verb"/>
      <Input v-model="formItems.verb2" :title="headers.verb"/>
      <Input v-model="formItems.verb3" :title="headers.verb"/>
      <button v-on:click="submitForm" :disabled="!isComplete" class="btn btn-primary">Submit</button>
    </div>
    <Poems v-else/>
  </div>
</template>

<script>
import Input from "./components/Input.vue";
import Poems from "./components/Poems.vue";
import * as axios from "axios";
export default {
  components: {
    Input,
    Poems
  },
  data() {
    return {
      formItems: {
        noun1: "",
        noun2: "",
        noun3: "",
        adjective1: "",
        adjective2: "",
        adjective3: "",
        adverb1: "",
        adverb2: "",
        adverb3: "",
        preposition1: "",
        preposition2: "",
        preposition3: "",
        verb1: "",
        verb2: "",
        verb3: ""
      },
      current: "create",
      headers: {
        noun: "Noun",
        adjective: "Adjective",
        adverb: "Adverb",
        preposition: "Preposition",
        verb: "Verb"
      }
    };
  },
  computed: {
    isComplete() {
      return (
        this.formItems.noun1 &&
        this.formItems.noun2 &&
        this.formItems.noun3 &&
        this.formItems.adjective1 &&
        this.formItems.adjective2 &&
        this.formItems.adjective3 &&
        this.formItems.adverb1 &&
        this.formItems.adverb2 &&
        this.formItems.adverb3 &&
        this.formItems.preposition1 &&
        this.formItems.preposition2 &&
        this.formItems.preposition3 &&
        this.formItems.verb1 &&
        this.formItems.verb2 &&
        this.formItems.verb3
      );
    }
  },
  methods: {
    submitForm() {
      console.log(this.formItems);
      axios.post("http://localhost:3000/poem", this.formItems).then(res => {
        console.log("done");
      });
    }
  }
};
</script>


<style scoped>
body {
  margin: 0;
  padding: 0;
}

.headerLinkUnderline {
  width: 120px;
  font-size: 23px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  color: #ffffff;
  margin-right: 24px;
  border-bottom: 6px solid #7e90f6;
}
#inputField {
  display: flex;
  justify-content: center;
  flex: 1;
  flex-direction: column;
}

#container {
  display: flex;
  height: 100%;
  width: 100%;
  flex-flow: column;
  font-family: Khula;
  overflow: hidden;
}

#header {
  background-color: #182939;
  display: flex;
  align-items: center;
  height: 80px;
  padding-left: 24px;
}

#headerContainer {
  display: flex;
  height: 40px;
  width: 100%;
  font-family: Avenir;
  font-size: 23px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  text-align: center;
}

.headerLink {
  width: 120px;
  font-size: 23px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  color: #ffffff;
  margin-right: 24px;
}
</style>
