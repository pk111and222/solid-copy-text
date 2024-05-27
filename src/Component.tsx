import { children, onMount, onCleanup } from "solid-js";
import type { JSX, ResolvedChildren } from "solid-js";
import copy from 'copy-to-clipboard';
import { isValidElement } from './utils'

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
} 

export default function SolidCopyText(props: SolidCopyTextProps) {
  const  {text, onCopy, options} = props;
  
  const resolved = children(() => props.children)

  const ele: ResolvedChildren = resolved()

  const onClick = () => {
    const result = copy(text, options);

    if (onCopy) {
      onCopy(text, result);
    }
  }
  
  onMount(() => {
    if(isValidElement(ele)) {
      ele.addEventListener('click', onClick)
    }
  })

  onCleanup(() => {
    if(isValidElement(ele)) {
      ele.removeEventListener('click', onClick)
    }
  }) 

  return ele
}
