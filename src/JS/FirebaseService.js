export default class Firebase{
  constructor(firebase){
    var config = {
      apiKey: "AIzaSyCvOE4UIOE7Aubj3RB50BZbSYfGMw6TMyY",
      authDomain: "roulegragon-18365.firebaseapp.com",
      databaseURL: "https://roulegragon-18365.firebaseio.com",
      projectId: "roulegragon-18365",
      storageBucket: "roulegragon-18365.appspot.com",
      messagingSenderId: "172810608437"
    };
    firebase.initializeApp(config);
    this.db = firebase.firestore();
  }

  async addData(data) {
    let newData;
    try{
      newData = await this.db.collection("users").add(data);
      console.log("Document written with ID: ", newData.id);
    }catch{
      console.error("Error adding document: ", error);
    }
  }
}
