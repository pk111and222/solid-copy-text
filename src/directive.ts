import { createEffect, onCleanup } from "solid-js";
import type { SolidCopyTextParams } from './type'
import { isString, isFunction, tranferEventName } from './utils'
import copy from 'copy-to-clipboard';

const onCopy = (text: string, options?: SolidCopyTextParams['options'], callback?: SolidCopyTextParams['onCopy']) => {
  const result = copy(text, options);
  if (isFunction(callback)) {
    callback(text, result);
  }
}

function copyText(element: Element, accessor: () => SolidCopyTextParams): void;
function copyText(element: Element, accessor: () => string | null | undefined): void;
function copyText(el: Element, value: () => string | null | undefined | SolidCopyTextParams) {
  createEffect(() => {
    const res = value();
    if (!res) return;

    const isSimpleMode = isString(res)
    const text = isSimpleMode ? res : res?.text;
    const eventNames = isSimpleMode ? ['click'] : tranferEventName(res?.eventName || []);
    const options: SolidCopyTextParams['options'] = isSimpleMode ? undefined : res?.options;
    const customize: SolidCopyTextParams['onCopy'] = isSimpleMode ? undefined : res?.onCopy;
    if (!text) return;
    const copy = () => onCopy(text, options, customize)

    eventNames.map(name => {
      el.addEventListener(name, copy)
    })
    onCleanup(() => {
      eventNames.map(name => {
        el.removeEventListener(name, copy)
      })
    })
  })
}

declare module "solid-js" {
  namespace JSX {
    interface Directives {
      copyText: SolidCopyTextParams | string;
    }
  }
}


export default copyText