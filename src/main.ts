import './style.css'
import { init } from './generator.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Random Password Generator</h1>
  <ul id="container"></ul>
`

init(document.querySelector<HTMLElement>('#container')!)
