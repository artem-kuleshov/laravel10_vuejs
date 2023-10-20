<script setup>

import { useRoute } from 'vue-router'
import { usePersonStore } from "../../stores/PersonStore"
import { storeToRefs } from 'pinia'

const route = useRoute()
const { person } = storeToRefs(usePersonStore())
const personStore = usePersonStore()

personStore.getPerson(route.params.id)
</script>

<template>
    <div v-if="person">
        <router-link :to="{ name: 'people.edit', params: {id: person.id} }">Edit</router-link>
        <p><strong>Name: {{ person.name }}</strong></p>
        <p><strong>Age: {{ person.age }}</strong></p>
        <p><strong>Job: {{ person.job }}</strong></p>
    </div>
</template>

<style scoped>

</style>
