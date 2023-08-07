<template>
    <div>
        <CreatePeople></CreatePeople>
<!--        <table class="table">-->
<!--            <thead>-->
<!--            <tr>-->
<!--                <th scope="col">#</th>-->
<!--                <th scope="col">Title</th>-->
<!--                <th scope="col">Category</th>-->
<!--                <th scope="col">Category id</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr v-for="post in posts">-->
<!--                <th scope="row">{{ post.id }}</th>-->
<!--                <td>{{ post.title }}</td>-->
<!--                <td>{{ post.category }}</td>-->
<!--                <td>{{ post.category_id }}</td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--        </table>-->
    </div>
</template>

<script>
import SingleTest from "./SingleTest.vue";
import CreatePeople from "./People/Create.vue";
export default {
    name: "Test",

    data() {
      return {
          posts: null
      }
    },

    mounted() {
        //this.getPosts()
    },

    methods: {
        getPosts() {
            axios.get('/posts')
            .then(response => {
                this.posts = response.data
            })
        }
    },

    components: {CreatePeople, SingleTest}
}
</script>

<style scoped>

</style>
