import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import {Suspense,lazy} from 'react'  //路由的懒加载

const Home=lazy(()=>import('@/pages/Home')); 
const Community=lazy(()=>import('@/pages/Community'));
const Chatbot=lazy(()=>import('@/pages/chatbot'));
const Mine=lazy(()=>import('@/pages/Mine'));
export default function RouterConfig({children}:{children?:React.ReactNode}) {
  return (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/communtiy" element={<Community />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/mine" element={<Mine />} />
          </Routes>
        </Suspense>
        {children}
    </Router>
  )
}

