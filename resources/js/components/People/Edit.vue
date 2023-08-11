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
            <button :disabled="!isEnabled" @click.prevent="update" type="submit" class="btn btn-primary">Update</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditComponent",

    data() {
        return {
            name: null,
            age: null,
            job: null
        }
    },

    computed: {
        isEnabled() {
            return this.name && this.age && this.job
        }
    },

    mounted() {
        this.getPerson()
    },

    methods: {
        getPerson() {
            axios.get(`/api/people/${this.$route.params.id}`)
            .then(res => {
                this.name = res.data.data.name
                this.age = res.data.data.age
                this.job = res.data.data.job
            })
        },

        update() {
            axios.patch(`/api/people/${this.$route.params.id}`, {
                name: this.name,
                age: this.age,
                job: this.job
            }).then(response => {
                this.$router.push({name: 'people.show', params: {id: this.$route.params.id}})
            })
        },
    },
}
</script>

<style scoped>

</style>
