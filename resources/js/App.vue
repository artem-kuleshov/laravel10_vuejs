<template>
    <div>
        <router-link class="p-lg-2" to="/">People</router-link>
        <router-link to="/people/create">Create people</router-link>

        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: "App"
}
</script>

<style scoped>

</style>
