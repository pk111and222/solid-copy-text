import { createSignal, type Component } from 'solid-js'
import { copyText } from '../src'

const DrirectiveCom: Component = () => {
  const [str, setStr] = createSignal<string>('hello world2')

  false && copyText;
  return <div>
    <div use:copyText='hello world1'>single</div>
    <div use:copyText={{ text: str()}}>click</div>
    <div use:copyText={{ text: 'hello world3', eventName: ['contextmenu', 'dblclick']}}>dblclick</div>
    <div use:copyText={{ text: 'hello world4', onCopy: () => alert('成功了')}}>callback</div>

    <button onClick={() => setStr('hello world222')}>点一下变数据</button>
  </div>
}

export default DrirectiveCom