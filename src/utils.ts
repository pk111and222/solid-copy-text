import { JSX, ResolvedChildren } from "solid-js";

export const isValidElement = (element: ResolvedChildren): element is HTMLElement => {
  return element instanceof HTMLElement
}

export const isFunction = (val: unknown): val is Function => {
  return typeof val === 'function';
}