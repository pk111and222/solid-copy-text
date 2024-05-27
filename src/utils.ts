import { JSX, ResolvedChildren } from "solid-js";

export const isValidElement = (element: ResolvedChildren): element is HTMLElement => {
  const isArray = Array.isArray(element)
  if(isArray) return false
  if (element instanceof HTMLElement) {
    return true
  }
  return false
}