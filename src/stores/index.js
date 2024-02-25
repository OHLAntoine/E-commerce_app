import { defineStore } from 'pinia'
import * as state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export const useItemsStore = defineStore('items', () => {

    return { state, getters, mutations, actions }

})