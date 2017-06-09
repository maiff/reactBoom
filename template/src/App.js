import React from 'react'
import { StyleSheet, css } from 'aphrodite'

class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <h1 className={css(styles.hello)}>Hello world!</h1>
    )
  }
}

const styles = StyleSheet.create({
  hello: {
    color: '#ee6e73'
  }
})


export default App
