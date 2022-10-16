import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/time/" element={<DefaultLayout />}>
        <Route path="/time/" element={<Home />} />
        <Route path="/time/history" element={<History />} />
      </Route>
    </Routes>
  )
}
