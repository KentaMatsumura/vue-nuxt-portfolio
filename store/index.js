import firebase from "~/plugins/firebase";

const state = {
  userUid: "",
  userName: "",
  hobbies: [],
  loading: true
};

const mutations = {
  setUserUid(state, userUid) {
    state.userUid = userUid;
  },
  setUserName(state, userName) {
    state.userName = userName;
  },
  setHobbies(state, hobbies) {
    state.hobbies = hobbies;
  },
  setLoading(state, loading) {
    state.loading = loading;
  }
};

const actions = {
  async startLoad(context) {
    context.commit("setLoading", true);
  },
  async endLoad(context) {
    context.commit("setLoading", false);
  },
  async login({ commit }) {
    console.log("LOGIN");
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        commit("setUserUid", user.uid);
        commit("setUserName", user.displayName);
        console.log("success: " + user.displayName);
      })
      .catch(error => {
        console.log("error: " + error.code);
      });
  },
  async logout({ commit }) {
    console.log("LOGOUT");
    firebase
      .auth()
      .signOut()
      .then(_ => {
        commit("setUserUid", "");
        commit("setUserName", "");
      })
      .catch(error => {
        console.log("error: " + error.code);
      });
  },
  async readHobbies({ commit }) {
    const db = firebase.firestore();
    let hobbies = [];
    db.collection("hobbies").onSnapshot(async querySnapshot => {
      querySnapshot.forEach(doc => {
        if (doc.exists) {
          hobbies.push(doc.data());
        } else {
          console.log("no data");
        }
      });
      commit("setHobbies", hobbies);
    });
  }
};

const getters = {
  getUserUid(state) {
    return state.userUid;
  },
  getUserName(state) {
    return state.userName;
  },
  getHobbies(state) {
    return state.hobbies;
  },
  getComics(state) {
    let comics = [];
    state.hobbies.forEach(hobby => {
      if (hobby["type"] === 0) {
        comics.push(hobby);
      }
    });
    return comics;
  },
  getMusics(state) {
    let musics = [];
    state.hobbies.forEach(hobby => {
      if (hobby["type"] === 1) {
        musics.push(hobby);
      }
    });
    return musics;
  },
  getMovies(state) {
    let movies = [];
    state.hobbies.forEach(hobby => {
      if (hobby["type"] === 2) {
        movies.push(hobby);
      }
    });
    return movies;
  },
  loading: state => (state.loading ? state.loading : "")
};

export default {
  state,
  mutations,
  actions,
  getters
};
