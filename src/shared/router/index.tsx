import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from '@/pages/main'
import { StatisticsPage } from '@/pages/statistics'

export const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/statistics', element: <StatisticsPage /> },
])