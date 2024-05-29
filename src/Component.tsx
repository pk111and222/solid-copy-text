import { children, createMemo, createEffect, onMount, onCleanup } from "solid-js";
import type { JSX, ResolvedChildren } from "solid-js";
import copy from 'copy-to-clipboard';
import { isValidElement, isFunction } from './utils'

export interface Options {
  debug?: boolean;
  message?: string;
  format?: string; // MIME type
  onCopy?: (clipboardData: object) => void;
}

export interface SolidCopyTextProps {
  text: string;
  onCopy: (text?: string, result?: boolean) => void;
  children?: JSX.Element;
  options?: Options;
  eventName?: string | string[];
} 

export default function SolidCopyText(props: SolidCopyTextProps) {
  
  const resolved = children(() => props.children)

  const eventNames = createMemo((): string[] =>  {
    const val = props.eventName
    if(Array.isArray(val) && val.length) {
      if(val.length) return val
      return ['click']
    } else {
      return [val as string || 'click']
    }
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
