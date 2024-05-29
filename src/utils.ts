import { JSX, ResolvedChildren } from "solid-js";

export const isValidElement = (element: ResolvedChildren): element is HTMLElement => {
  return element instanceof HTMLElement
}

export const isFunction = (val: unknown): val is Function => {
  return typeof val === 'function';
}

export const isString = (val: unknown): val is string => {
  return typeof val === 'string';
}

export const tranferEventName = (val: string | string[]): string[] => {
  if(Array.isArray(val)) {
    if(val.length) return val
    return ['click']
  } else {
    return [val as string || 'click']
  }
}