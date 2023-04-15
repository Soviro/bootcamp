<template>
  <div>
  <h1>My Quasar Project</h1>
  </div>
<div id="Ensemble">
  <div class="q-pa-md row items-start q-gutter-md">
    

    
    <q-card class="my-card" v-for="technologie in technologies" :key="technologie.id">
      <img src="https://fakeimg.pl/300/">

      <q-card-section>
      <q-card-title>{{technologie.label}}</q-card-title><br>
       <q-card-text>{{technologie.text}}</q-card-text>
      </q-card-section>
    </q-card>
    
  </div>
  <div id="fav_techno">
    <h3>Your favorite techno</h3>
    <form @submit.prevent="addTechno">
    <input v-model="newTechno">
    <button>Add</button>    
  </form>
  <h5>My favorite technos are:</h5>
    <ul>
      <li v-for="techno in technos" :key="techno.id">
        {{ techno.text }}
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import * as datas from 'src/assets/data.json'

let id = 0

export default {
  // name: 'ComponentName',
   setup () {
    return {
     // technologies: []
       technologies :  datas.technolo
    }
  },
  methods: {
   addTechno() {
      this.technos.push({ id: id++, text: this.newTechno })
      this.newTechno= ''
    }
  }
    ,
     data() {
    return {
      newTechno: '',
      technos: [
        { id: id++, text: 'TypeScript' },
        { id: id++, text: 'HTML' },
        { id: id++, text: 'Javascript' }
      ]
    }
  }
}

</script>
