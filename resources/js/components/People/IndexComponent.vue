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
            <template v-for="p in people">
                <tr :class="isEdit( p.id) ? 'd-none' : ''">
                    <th scope="row">{{ p.id }}</th>
                    <td>{{ p.name }}</td>
                    <td>{{ p.age }}</td>
                    <td>{{ p.job }}</td>
                    <td>
                        <a href="#" @click.prevent="changePersonId(p.id, p.name, p.age, p.job)" class="btn btn-success">Edit</a>
                    </td>
                    <td>
                        <a href="#" @click.prevent="deletePerson(p.id)" class="btn btn-danger">Delete</a>
                    </td>
                </tr>
                <tr :class="isEdit( p.id) ? '' : 'd-none'">
                    <th scope="row">{{ p.id }}</th>
                    <td><input class="form-control" v-model="name"></td>
                    <td><input class="form-control" v-model="age"></td>
                    <td><input class="form-control" v-model="job"></td>
                    <td><a href="#" @click.prevent="updatePerson(p.id)" class="btn btn-success">Update</a></td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: "IndexComponent",

    data() {
        return {
            people: null,
            editPersonId: null,
            name: null,
            age: null,
            job: null
        }
    },

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
            this.name = name
            this.age = age
            this.job = job
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
