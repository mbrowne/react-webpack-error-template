import React from 'react'
import loadable from '@loadable/component'

const Button = loadable(() =>
  import('@material-ui/core/' + window.buttonComponentName)
)

export default function App() {
  return (
    <div>
      Hello world
      <Button>test button</Button>
    </div>
  )
}
