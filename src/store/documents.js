import documentService from '../services/document.service'
export const state = () => ({
  documents: [],
  publicDocuments: []
})
export const getters = {
  getDocumments(state) {
    return state.documents
  },
  getPublicDocumments(state) {
    return state.publicDocuments
  }
}
export const mutations = {
  SET_DOCUMENTS(state, documents) {
    state.documents = documents
  },
  SET_PUBLIC_DOCUMENTS(state, documents) {
    state.publicDocuments = documents
  }
}
export const actions = {
  setDocuments({ commit }) {
    if (localStorage.getItem('token')) {
      return documentService.getDocuments().then(async (documents) => {
        await documents.data.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        await documents.data.forEach((doc) => {
          doc.createdAt =
            new Date(doc.createdAt).getDate() +
            "/" +
            (new Date(doc.createdAt).getMonth() + 1) +
            "/" +
            new Date(doc.createdAt).getFullYear();
        });
        await commit('SET_DOCUMENTS', documents.data)
      })
    }
  },
  setPublicDocuments({ commit }) {

    return documentService.getPublic().then(async (documents) => {
      await documents.data.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      await documents.data.forEach((doc) => {
        doc.createdAt =
          new Date(doc.createdAt).getDate() +
          "/" +
          (new Date(doc.createdAt).getMonth() + 1) +
          "/" +
          new Date(doc.createdAt).getFullYear();
      });
      await commit('SET_PUBLIC_DOCUMENTS', documents.data)
    })
  },
  addDocument({ dispatch }, document) {
    return documentService.postDocument(document).then(async () => {
      await dispatch('setDocuments')
      await dispatch('setPublicDocuments')
    });
  },
  deleteOneDocument({ dispatch }, id) {
    documentService.deleteDocument(id).then(async () => {
      await dispatch('setDocuments')
      await dispatch('setPublicDocuments')
    })
  },
  disableOneDocument({ dispatch }, id) {
    documentService.disableDocument(id).then(async () => {
      await dispatch('setDocuments')
      await dispatch('setPublicDocuments')
    })
  },
  enableOneDocument({ dispatch }, id) {
    documentService.enableDocument(id).then(async () => {
      await dispatch('setDocuments')
      await dispatch('setPublicDocuments')
    })
  }
}

export default {
  actions,
  mutations,
  getters,
  state
}
