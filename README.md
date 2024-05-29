<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-copy-to-clipboard&background=tiles&project=%20" alt="solid-copy-to-clipboard">
</p>

# solid-copy-to-clipboard

`solid-copy-to-clipboard` is a advanced component for quickly packaging single-layer materials into content that can be copied after clicking.

## Quick start

Install it:

```bash
npm i solid-copy-text
# or
yarn add solid-copy-text
# or
pnpm add solid-copy-text
```

Use it:
#### Component-Warp
```tsx
import SolidCopyToClipboard from 'solid-copy-text'

function MyChartComponent() {
  return (
    <SolidCopyToClipboard
      text='is copy Context'
      onCpoy={(text, result) => alert('Copied!')}
    >
      <button>Click me copy</button>
    </SolidCopyToClipboard>
  );
}
```
#### directive
```tsx
import {copyText} from 'solid-copy-text'

function MyChartComponent() {
  const [str, setStr] = createSignal<string>('hello world again')
  return (
    <div use:copyText='hello world'>Click me copy</div>
    <div use:copyText={str}>Click me copy</div>
    <div use:copyText={{
      text: 'hello world', 
      onCopy: () => alert('Copied!')
    }}>Click me copy</div>
    <div use:copyText={{
      text: 'hello world', 
      onCopy: () => alert('Copied!'),
      eventName: ['dbclick', 'contextmenu']
    }}>Click me copy</div>
  );
}
```

#### Props

- `option`: copy-to-clipboard `option` object with data and configuration.
- `text`: copy text, type string 
- `onCpoy`: used to handle the return of the copied logic. Will carry the text value and whether the copy was successful or not.
- `eventName`: `string` Or `string[]` you can use the dom eventName https://developer.mozilla.org/en-US/docs/Web/Events. the default value is click.

#### Type
- `SolidCopyTextProps`: Component type export

