<template>
    <div>
        <table class="table">
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
                        <a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>

import ShowComponent from "./Show.vue";

export default {
    name: "Index",
    components: {ShowComponent},
    data() {
        return {
            people: null,
            editPersonId: null,
            name: null,
            age: null,
            job: null
        }
    },

    props: ['obj'],

    mounted() {
        this.getPeople()
    },

    methods: {
        getPeople() {
            axios.get('/api/people')
                .then(response => {
                    this.people = response.data.data
                })
        },

        deletePerson(id) {
            axios.delete(`/api/people/${id}`).then(response => {
                this.getPeople()
            })
        }
    },
}
</script>

<style scoped>

</style>
