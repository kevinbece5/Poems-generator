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
    <span v-if="current === 'create'" id="title">Let's create a poem!</span>
    <div v-if="current === 'create'" id="inputField">
      <!-- Nouns Field -->
      <Input v-model="formItems.noun1" :item="formItems.noun1" :title="headers.noun"/>
      <Input v-model="formItems.noun2" :item="formItems.noun2" :title="headers.noun"/>
      <Input v-model="formItems.noun3" :item="formItems.noun3" :title="headers.noun"/>
      <!-- Adjectives -->
      <Input
        v-model="formItems.adjective1"
        :item="formItems.adjective1"
        :title="headers.adjective"
      />
      <Input
        v-model="formItems.adjective2"
        :item="formItems.adjective2"
        :title="headers.adjective"
      />
      <Input
        v-model="formItems.adjective3"
        :item="formItems.adjective3"
        :title="headers.adjective"
      />
      <!-- Adverbs -->
      <Input v-model="formItems.adverb1" :item="formItems.adverb1" :title="headers.adverb"/>
      <Input v-model="formItems.adverb2" :item="formItems.adverb2" :title="headers.adverb"/>
      <Input v-model="formItems.adverb3" :item="formItems.adverb3" :title="headers.adverb"/>
      <!-- Prepositions -->
      <Input
        v-model="formItems.preposition1"
        :item="formItems.preposition1"
        :title="headers.preposition"
      />
      <Input
        v-model="formItems.preposition2"
        :item="formItems.preposition2"
        :title="headers.preposition"
      />
      <Input
        v-model="formItems.preposition3"
        :item="formItems.preposition3"
        :title="headers.preposition"
      />
      <!-- Verbs -->
      <Input v-model="formItems.verb1" :item="formItems.verb1" :title="headers.verb"/>
      <Input v-model="formItems.verb2" :item="formItems.verb2" :title="headers.verb"/>
      <Input v-model="formItems.verb3" :item="formItems.verb3" :title="headers.verb"/>
    </div>
    <Poems v-else/>
    <button
      v-if="current === 'create'"
      v-on:click="submitForm"
      :disabled="!isComplete"
      class="btn btn-primary"
    >Submit</button>
  </div>
</template>

<script>
import Input from "./components/Input.vue";
import Poems from "./components/Poems.vue";
import * as axios from "axios";
import * as moment from "moment";
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
      let filled = true;
      let validated = true;
      for (const item in this.formItems) {
        if (!this.formItems[item]) {
          filled = false;
        }
        if (/[^a-zA-Z]/.test(this.formItems[item])) {
          validated = false;
        }
      }

      return filled && validated;
    }
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:3000/poem", {
          ...this.formItems,
          timeStamp: moment().format("LLL")
        })
        .then(res => {
          for (const key in this.formItems) {
            this.formItems[key] = "";
          }
        })
        .then(() => {
          this.current = "all";
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

.btn {
  width: 50%;
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 25px;
  margin: 35px;
  font-family: sans-serif;
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
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 90px;
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

#title {
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-family: sans-serif;
}
</style>
