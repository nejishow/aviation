import CategoryS from "../services/category.service";

export const state = () => ({
  categoryMenu: [],
  subCategoryMenu: [],

})
export const getters = {
  getCategoryMenu(state) {
    return state.categoryMenu
  },
  getSubCategoryMenu(state) {
    return state.subCategoryMenu
  },

}
export const mutations = {
  SET_CategoryMenu(state, categoryMenu) {
    state.categoryMenu = categoryMenu
  },
  SET_SubCategoryMenu(state, subCategoryMenu) {
    state.subCategoryMenu = subCategoryMenu
  }
}
export const actions = {
  fetchCategoryMenu({ commit }, id) {
    return CategoryS.getMenu(id).then(async (response) => {
      const categoryMenu = response.data
      await categoryMenu.sort((a, b) => {
        if (a.name > b.name) {
          return 1
        }
        if (b.name > a.name) {
          return -1
        }
        return 0
      })
      await commit('SET_CategoryMenu', categoryMenu)
    })
  },
  fetchSubCategoryMenu({ commit }, id) {
    return CategoryS.getMenuS(id).then(async (response) => {
      const subCat = response.data
      await subCat.sort((a, b) => {
        if (a.name > b.name) {
          return 1
        }
        if (b.name > a.name) {
          return -1
        }
        return 0
      })
      commit('SET_SubCategoryMenu', subCat)
    })
  }
}
