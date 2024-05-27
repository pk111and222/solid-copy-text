import type { Component } from 'solid-js'
import styles from './App.module.css'
import SolidCopyText from '../src'
import { createSignal } from 'solid-js'

const Bsic = (props: any) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

const App: Component = () => {
  const [eventLog, setEventLog] = createSignal<string[]>([])

  return (
   <div>
    <SolidCopyText text='sddsafsd ' onCopy={() => {alert('成功啦')}}> 
      <Bsic onClick={() => console.log('电我2')}>
        <button onClick={() => alert('成功啦2')}>电我</button>
        <button onClick={() => console.log('电我')}>电我</button>
      </Bsic>
    </SolidCopyText>
    <SolidCopyText text='1223' onCopy={() => {alert('成功啦')}}>
      1223254
    </SolidCopyText>
    <div>122334</div>
   </div>
   
  )
}

export default App
