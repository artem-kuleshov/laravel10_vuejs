import { defineStore } from 'pinia'
import router from "../router";

export const usePersonStore = defineStore('personStore', {
    state: () => ({
        people: null,
        person: null
    }),

    actions: {

        async getPeople() {
            this.people = (await axios.get(`/api/people/`)).data.data
        },

        addPerson(name, age, job) {
            axios.post('/api/people', {
                name: name,
                age: age,
                job: job
            }).then(res => {
                router.push({ name: 'people.index'})
            })
        },

        async updatePerson(id, name, age, job) {
            await axios.patch(`/api/people/${id}`, {
                name: name,
                age: age,
                job: job
            })

            router.push({name: 'people.show', params: id})
        },

        async getPerson(id) {
            console.log('get person');
            this.person = (await axios.get(`/api/people/${id}`)).data.data
            console.log('get person finish');
        },

        deletePerson(id) {
            axios.delete(`/api/people/${id}`).then(res => {
                this.getPeople()
            })
        },
    }
})
