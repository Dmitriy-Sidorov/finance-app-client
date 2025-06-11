import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './DefaultLayout';

const HomePage = lazy(() => import('@pages/Home'));
const StatisticsPage = lazy(() => import('@pages/Statistics'));
const Option2 = () => <div>Option 2 content</div>;

// Пример вложенных страниц для User и Team
const UserTom = () => <div>User Tom</div>;
const UserBill = () => <div>User Bill</div>;
const UserAlex = () => <div>User Alex</div>;

const Team1 = () => <div>Team 1</div>;
const Team2 = () => <div>Team 2</div>;

const Files = () => <div>Files page</div>;

export function App() {
  return (
    <Suspense fallback={<div>Загрузка страницы...</div>}>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="lazy" element={<StatisticsPage />} />
          <Route path="option2" element={<Option2 />} />

          <Route path="user">
            <Route path="tom" element={<UserTom />} />
            <Route path="bill" element={<UserBill />} />
            <Route path="alex" element={<UserAlex />} />
          </Route>

          <Route path="team">
            <Route path="team1" element={<Team1 />} />
            <Route path="team2" element={<Team2 />} />
          </Route>

          <Route path="files" element={<Files />} />

          {/* Если не нашли, редирект на главную */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
