import { children, createMemo, createEffect, onMount, onCleanup } from "solid-js";
import type { JSX, ResolvedChildren } from "solid-js";
import copy from 'copy-to-clipboard';
import { isValidElement, isFunction, tranferEventName } from './utils'
import type { SolidCopyTextProps } from './type'

export default function SolidCopyText(props: SolidCopyTextProps) {
  
  const resolved = children(() => props.children)

  const eventNames = createMemo((): string[] =>  {
    return tranferEventName(props.eventName || [])
  })

  const onCopy = () => {
    const result = copy(props.text, props.options);

    if (isFunction(props.onCopy)) {
      props.onCopy(props.text, result);
    }
  }

  createEffect(() => {
    const ele: ResolvedChildren = resolved()
    const recyclable = Array.isArray(ele) ? ele : [ele]
    recyclable.forEach(e => {
      if(isValidElement(e)) {
        eventNames().map(name => {
          e.addEventListener(name, onCopy)
        })
      }
    })
    
    onCleanup(() => {
      console.log(ele)
      recyclable.forEach(e => {
        if(isValidElement(e)) {
          eventNames().map(name => {
            e.removeEventListener(name, onCopy)
          })
        }
      })
    }) 
  });

  return <>{resolved()}</>
}
