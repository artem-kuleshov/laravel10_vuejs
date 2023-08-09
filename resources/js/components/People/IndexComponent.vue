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
                <ShowComponent :person="person"></ShowComponent>
                <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>

import EditComponent from "./EditComponent.vue";
import ShowComponent from "./ShowComponent.vue";
export default {
    name: "IndexComponent",
    components: {ShowComponent, EditComponent},
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
                    this.people = response.data
                })
        },

        changePersonId(id, name, age, job) {
            this.editPersonId = id

            let editComponent = this.$refs[`edit_${id}`][0];
            editComponent.name = name
            editComponent.age = age
            editComponent.job = job
        },

        isEdit(id) {
            return this.editPersonId === id
        },

        updatePerson(id) {
            this.editPersonId = null
            axios.patch(`/api/people/${id}`, {
                name: this.name,
                age: this.age,
                job: this.job
            }).then(response => {
                this.getPeople()
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
