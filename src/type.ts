import { JSX } from "solid-js";

export interface Options {
  debug?: boolean;
  message?: string;
  format?: string; // MIME type
  onCopy?: (clipboardData: object) => void;
}

export interface SolidCopyTextParams {
  text: string;
  onCopy?: (text?: string, result?: boolean) => void;
  options?: Options;
  eventName?: string | string[];
} 
export type SolidCopyTextProps = SolidCopyTextParams & {children?: JSX.Element}
