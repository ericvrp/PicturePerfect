import React, {Component} from 'react'
import firebase from 'firebase'

export default class extends Component {
  state = {
    currentUser: null,
    mySecretValue: '<not available>',
    forall: '<not available>'
  }

  componentDidMount = () => {
    firebase
      .auth()
      .onAuthStateChanged(firebaseUser => {
        // console.log(firebaseUser)
        this.setState({currentUser: firebaseUser})

        if (firebaseUser) {
          const uid = firebaseUser.uid
          // console.log(uid)

          firebase
            .database()
            .ref('users')
            .child(uid)
            .child('mySecretValue')
            .on('value', snap => {
              // console.log(snap)
              this.setState({
                mySecretValue: snap.val()
              })
            })

          // firebase
          //   .database()
          //   .ref('public')
          //   .child('forall')
          //   .on('value', snap => {
          //     // console.log(JSON.stringify(snap.val(), null, 4))
          //     this.setState({
          //       forall: snap.val()
          //     })
          //   })

        }
      })
  }

  onCreateUser = () => {
    // console.log('onCreateUser')
    const {username, password} = this.refs
    firebase
      .auth()
      .createUserWithEmailAndPassword(username.value, password.value)
      .then(() => console.info('User created'))
      .catch(error => console.error(error.message))
  }

  onSignIn = () => {
    // console.log('onSignIn')
    const {username, password} = this.refs
    firebase
      .auth()
      .signInWithEmailAndPassword(username.value, password.value)
      .then(() => console.info('User signed in'))
      .catch(error => console.error(error.message))
  }

  onSignOut = () => {
    // console.log('onSignOut')
    firebase
      .auth()
      .signOut()
      .then(() => console.info('User signed out'))
      .catch(error => console.error(error.message))
  }

  onSetMySecretValue = () => {
    const {value} = this.refs.mySecretValue
    const {uid} = this.state.currentUser
    // console.log('onSetMySecretValue', uid, value)

    firebase
      .database()
      .ref('users')
      .child(uid)
      .child('mySecretValue')
      .set(value)
  }

  render() {
    return (
      <div className='Setup'>
        {!this.state.currentUser && <p><input type='text' ref='username' placeholder='username'/>
          < input type='password' ref='password' placeholder='password'/></p>}

        {this.state.currentUser && <p>email: {this.state.currentUser.email}</p>}

        <p>forall: {this.state.forall}</p>

        {this.state.currentUser && <p>mySecretValue from database: {this.state.mySecretValue}<br/>
          <input type='text' ref='mySecretValue' placeholder='mySecretValue'/>
          <button onClick={this.onSetMySecretValue}>Set</button>
        </p>}

        {!this.state.currentUser && <p>
          <button onClick={this.onCreateUser}>Create user and sign in</button>&nbsp;<button onClick={this.onSignIn}>Sign in</button>
        </p>}
        {this.state.currentUser && <p>
          <button onClick={this.onSignOut}>Sign out</button>
        </p>}
      </div>
    )
  }
}
