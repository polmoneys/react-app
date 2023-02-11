import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { QueryClientProvider } from 'react-query'
import { store } from '@/config/store'
import { queryOptions } from '@/config/endpoints'
import App from './App'

const rootElement = document.getElementById('root')!
const root = ReactDOM.createRoot(rootElement)

root.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryOptions}>
        <App />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
