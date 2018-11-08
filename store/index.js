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
		const foundIndex = state.countries.findIndex(p => p.id === id)
		state.countries.splice(foundIndex, 1)
	},
	updateData(state, data) {
		const foundItem = state.countries.find(p => p.id === data.id)
		foundItem.name = data.name
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
	},
	async show({commit}, id) {
		const res = await axios.get('negara/' + id)
		return res.data	
	},
	async update({commit}, data) {
		const res = await axios.put('negara/' + data.id, {name: data.name})
		commit('updateData', data)
	}
}