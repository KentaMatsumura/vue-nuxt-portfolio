import firebase from "~/plugins/firebase";

const state = {
  userUid: "",
  userName: "",
  hobbies: []
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
  }
};

const actions = {
  login({ commit }) {
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
  logout({ commit }) {
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
  readHobbies({ commit }) {
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
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
