<template>
    <tr :class="this.$parent.isEdit( person.id) ? 'd-none' : ''">
        <th scope="row">{{ person.id }}</th>
        <td>{{ person.name }}</td>
        <td>{{ person.age }}</td>
        <td>{{ person.job }}</td>
        <td>
            <a href="#" @click.prevent="changePersonId(person.id, person.name, person.age, person.job)" class="btn btn-success">Edit</a>
        </td>
        <td>
            <a href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a>
        </td>
    </tr>
</template>

<script>

export default {
    name: "ShowComponent",

    props: ['person'],

    methods: {

        changePersonId(id, name, age, job) {
            this.$parent.editPersonId = id

            let editComponent = this.$parent.$refs[`edit_${id}`][0];
            editComponent.name = name
            editComponent.age = age
            editComponent.job = job
        },

        deletePerson(id) {
            axios.delete(`/api/people/${id}`).then(response => {
                this.$parent.getPeople()
            })
        }
    },
}
</script>

<style scoped>

</style>
