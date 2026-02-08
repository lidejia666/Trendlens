import { createRoot } from 'react-dom/client'
import RouterConfig from '@/routers'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(

    <RouterConfig>
    <App />
    </RouterConfig>

)
