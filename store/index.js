import axios from '~/plugins/axios'

export const state = () => ({
	countries: []
})

export const mutations = {
	setData(state, items) {
		state.countries = items
	},
	addData(state, item) {
		state.countries.push(item)
	},
	removeData(state, id) {
		const foundItem = state.countries.findIndex(p => p.id === id)
		state.countries.splice(foundItem, 1)
	}
}

export const actions = {
	async nuxtServerInit({commit}) {
		const res = await axios.get('negara')
		commit('setData', res.data)
	},
	async store({commit}, name) {
		const res = await axios.post('negara', {name: name})
		commit('addData', res.data)
	},
	async remove({commit}, id) {
		const res = await axios.delete('negara/' + id)
		commit('removeData', id)
	}
}