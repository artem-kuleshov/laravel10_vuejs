<template>
    <div>
        <CreatePeople></CreatePeople>

        <IndexComponent></IndexComponent>
    </div>
</template>

<script>
import SingleTest from "./SingleTest.vue";
import CreatePeople from "./People/CreateComponent.vue";
import IndexComponent from "./People/IndexComponent.vue";

export default {
    name: "Test",

    data() {
      return {
      }
    },

    mounted() {
    },

    methods: {
    },

    components: {IndexComponent, CreatePeople, SingleTest}
}
</script>

<style scoped>

</style>
