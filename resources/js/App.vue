<template>
    <div>
        <router-link class="p-lg-2" :to="{name:'people.index'}">People</router-link>
        <router-link :to="{name:'people.create'}">Create people</router-link>

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
