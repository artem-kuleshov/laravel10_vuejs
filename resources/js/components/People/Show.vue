<template>
    <div v-if="person">
        <router-link :to="{ name: 'people.edit', params: {id: this.person.id} }">Edit</router-link>
        <p><strong>Name: {{ this.person.name }}</strong></p>
        <p><strong>Age: {{ this.person.age }}</strong></p>
        <p><strong>Job: {{ this.person.job }}</strong></p>
    </div>
</template>

<script>

export default {
    name: "Component",

    data() {
        return {
            person: null
        }
    },

    mounted() {
        this.getPerson()
    },

    methods: {
        getPerson() {
            axios.get(`/api/people/${this.$route.params.id}`).then(response => {
                this.person = response.data.data
            })
        }
    },
}
</script>

<style scoped>

</style>
