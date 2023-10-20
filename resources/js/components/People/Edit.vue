<script setup>
import {usePersonStore} from "../../stores/PersonStore";
import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import {storeToRefs} from "pinia";

const route = useRoute()
const personStore = usePersonStore()

const { person } = storeToRefs(personStore)

let name = ref(null)
let age = ref(null)
let job = ref(null)

personStore.getPerson(route.params.id)
    .then(res => {
        name.value = person.value.name
        age.value = person.value.age
        job.value = person.value.job
    })

const isEnabled = computed(() => name.value && age.value && job.value)
</script>

<template>
    <div>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="name">
        </div>
        <div class="form-group">
            <label for="age">Age</label>
            <input type="number" class="form-control" id="age" v-model="age">
        </div>
        <div class="form-group mb-3">
            <label for="job">Job</label>
            <input type="text" class="form-control" id="job" v-model="job">
        </div>
        <div class="form-group">
            <button :disabled="!isEnabled" @click.prevent="personStore.updatePerson(route.params.id, name, age, job)" type="submit" class="btn btn-primary">Update</button>
        </div>
    </div>
</template>

<style scoped>

</style>
