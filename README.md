# My Vue Components

A collection of reusable Vue 3 components, featuring a button with ripple effect.

## Installation

```bash
npm install my-vue-components
# or
yarn add my-vue-components
# or
pnpm add my-vue-components
```

## Usage

### Global Registration

```js
import { createApp } from 'vue'
import App from './App.vue'
import MyVueComponents from 'my-vue-components'
import 'my-vue-components/dist/style.css'

const app = createApp(App)
app.use(MyVueComponents)
app.mount('#app')
```

### Individual Component Import

```vue
<script setup>
import { MyButton } from 'my-vue-components'
import 'my-vue-components/dist/style.css'
</script>

<template>
  <MyButton>Click Me</MyButton>
  <MyButton type="primary" size="large">Primary Large</MyButton>
  <MyButton type="success">Success</MyButton>
  <MyButton type="danger" size="small">Danger Small</MyButton>
</template>
```

## Available Components

### MyButton

A customizable button with ripple effect.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | String | 'primary' | Button type: 'primary', 'secondary', 'success', 'danger' |
| size | String | 'medium' | Button size: 'small', 'medium', 'large' |

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test:unit
```

## License

MIT


