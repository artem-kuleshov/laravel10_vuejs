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
            <button @click="addPerson" type="submit" class="btn btn-primary">Добавить</button>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            name: null,
            age: null,
            job: null
        }
    },

    methods: {
        addPerson() {
            axios.post('/api/people', {
                name: this.name,
                age: this.age,
                job: this.job
            }).then(response => {
                this.name = null;
                this.age = null;
                this.job = null;
            })
        }
    },

    name: "CreateComponent"
}
</script>

<style scoped>

</style>
