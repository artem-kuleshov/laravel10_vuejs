<script setup>
import {usePersonStore} from "../../stores/PersonStore";
import {computed, ref} from "vue";

const personStore = usePersonStore()

const name = ref(null)
const age = ref(null)
const job = ref(null)
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
            <button :disabled="!isEnabled" @click.prevent="personStore.addPerson(name, age, job)" type="submit" class="btn btn-primary">Добавить</button>
        </div>
    </div>
</template>


<style scoped>

</style>
