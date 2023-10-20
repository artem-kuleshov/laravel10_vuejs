<script setup>
import {storeToRefs} from "pinia";
import {usePersonStore} from "../../stores/PersonStore";
const { people } = storeToRefs(usePersonStore())
const personStore = usePersonStore()

personStore.getPeople()
</script>

<template>
    <div>
        <table class="table" v-if="people">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Job</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <tr>
                    <td>
                        <router-link :to="{ name: 'people.show', params: {id: person.id} }">{{ person.id }}</router-link>
                    </td>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.job }}</td>
                    <td>
                        <router-link :to="{ name: 'people.edit', params: {id: person.id} }">Edit</router-link>
                    </td>
                    <td>
                        <a href="#" @click.prevent="personStore.deletePerson(person.id)" class="btn btn-danger">Delete</a>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>
