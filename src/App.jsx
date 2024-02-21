import './App.css';
import React from 'react';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import LayoutMain from './page/LayoutMain';
import MainPage from './page/MainPage';
import AboutPage from './page/AboutPage';
import SkillPage from './page/SkillPage';
import ProjectPage from './page/ProjectPage';
import ContactPage from './page/ContactPage';
import Background from './page/Background';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutMain />,
    children: [
      {
        path: '',
        element: <MainPage />
      },
      {
      path: 'category',
      element: <Background />,
      children: [
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'skill',
        element: <SkillPage />,
      },
      {
        path: 'project',
        element: <ProjectPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      ]
    },
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
