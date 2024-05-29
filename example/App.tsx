import type { Component } from 'solid-js'
import styles from './App.module.css'
import SolidCopyText from '../src'
import { Show, createSignal, onMount } from 'solid-js'
import DrirectiveCom from './DrirectiveCom'

const Bsic = (props: any) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

const App: Component = () => {
  const [eventLog, setEventLog] = createSignal<number>(1)

  const [show, setShow] = createSignal<boolean>(false)

  const [load, setLoading] = createSignal<boolean>(false)

  const [list, setList] = createSignal<Array<number>>(Array.from({length: 100}, (_: any, i: number) => 1+i))

  const handleClick = (type: string) => {
    setEventLog(eventLog() + (type === 'add' ? 1 : (-1)))
    alert('添加啦')
  }

  const toogleShow = () => {
    setShow(!show())
  }
  onMount(() => {
    setTimeout(()=> setLoading(true), 2000)
    // setTimeout(()=> setList([22]), 2000)
  })

  return (
   <div>
    <SolidCopyText text='1.1.1.1 ' onCopy={() => {alert('成功啦')}}> 
      <Bsic onClick={() => console.log('电我2')}>
        <button onClick={() => alert('成功啦2')}>电我</button>
        <button onClick={() => console.log('电我')}>电我</button>
      </Bsic>
    </SolidCopyText>
    <SolidCopyText text='2.2.2.2' onCopy={() => {alert('成功啦')}}>
    {
        eventLog() < 2 ?  
        <button onClick={() => handleClick('add')}> {eventLog()} + 122</button>
        : <div onClick={() => handleClick('remove')}>{eventLog()} + 223</div>
    }
    </SolidCopyText>
    {
        show() ? <SolidCopyText text='3.3.3' onCopy={() => {alert('成功啦')}}>
          <>
            <div>if condition</div>
          </>
        </SolidCopyText> : '12'
    }
    <SolidCopyText text='4.4.4.4' onCopy={() => {alert('成功啦')}}>
      <Show when={load()} fallback={<div>Loading...</div>}>
        <div>Show</div>
      </Show>
    </SolidCopyText>
    <SolidCopyText text='4.4.4.4.two' eventName={'dblclick'} onCopy={() => {alert('成功啦')}}>
        <div>dblclick</div>
    </SolidCopyText>
    <SolidCopyText text='4.4.4.4.two' eventName={['dblclick', 'click', 'contextmenu']} onCopy={() => {alert('成功啦')}}>
        <div>dblclick, click, contextmenu</div>
    </SolidCopyText>
    <SolidCopyText text='5.5.5.5' onCopy={() => {alert('成功啦')}}>
      {
        list().map(e => {
          return <div>
            {e} {3 * 20}
              {load() ? <div>{e++ }</div> : <span></span>}
            </div>
        })
      }
    </SolidCopyText>
    <div>122334</div>
    <DrirectiveCom/>
   </div>
  )
}

export default App
