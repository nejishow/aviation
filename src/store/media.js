import mediaService from '../services/media.service'
export const state = () => ({
  banner: [],
  news: [],
})
export const getters = {
  getBanner(state) {
    return state.banner
  },
  getNews(state) {
    return state.news
  }
}
export const mutations = {
  SET_BANNER(state, banner) {
    state.banner = banner
  },
  SET_NEWS(state, news) {
    state.news = news
  },
  SET_Products(state, results) {
    const smart = []
    state.allProducts = results
    results.forEach((element) => {
      const arr =
        '5e8857b7daa3183bf0232d8f5e8857c7daa3183bf0232d905e8857cddaa3183bf0232d915e8857eddaa3183bf0232d925e8857f2daa3183bf0232d935eac2c1889ad0d00179863e55eabe60fdd16140017bd5ec6'
      if (arr.includes(element.idProductType)) {
        smart.push(element)
      }
    })
    state.smartphones = smart
  }
}
export const actions = {
  getBanners({ commit }) {
    mediaService.getBanner().then(async (response) => {
      await response.data.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return 1;
        }
        if (a.createdAt < b.createdAt) {
          return -1;
        }
        return 0;
      });
      await commit('SET_BANNER', response.data)
    })
  },
  getNews({ commit }) {
    mediaService.getNews().then(async (response) => {
      await response.data.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return 1;
        }
        if (a.createdAt < b.createdAt) {
          return -1;
        }
        return 0;
      });
      await commit('SET_NEWS', response.data)
    })
  },

  addBanner({ dispatch }, Banner) {
    return mediaService.postbanner(Banner).then(async () => {
      await dispatch('getBanners')
    });
  },
  deleteOneBanner({ dispatch }, id) {
    mediaService.deletebanner(id).then(async () => {
      await dispatch('getBanners')
    })
  },
  addNews({ dispatch }, news) {
    return mediaService.postnews(news).then(async () => {
      await dispatch('getNews')
    });
  },
  deleteOneNews({ dispatch }, id) {
    mediaService.deleteNews(id).then(async () => {
      await dispatch('getNews')
    })
  },
}

export default {     metaInfo: {
        // if no subcomponents specify a metaInfo.title, this title will be used
        bodyAttrs: {
            class: ['dark-mode', 'mobile']
        },
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                'http-equiv': "Content-Type",
                content: "text/html; charset=utf-8"
            },

        ]
    },
  getters,
  actions,
  mutations,
  state
}
