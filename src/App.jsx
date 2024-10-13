
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Index from './pages/home/Index.jsx';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';
import Project from './pages/project/Project.jsx';
import ProjectDetails from './pages/project-details/ProjectDetails.jsx';
import Blog from './pages/blog/Blog.jsx';
import BlogDetails from './pages/blog-details/BlogDetails.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CreateProject from './pages/CreateProject.jsx';
import EditProject from './pages/EditProject.jsx';
import EditBlog from './pages/EditBlog.jsx';
import CreateBlog from './pages/CreateBlog.jsx';
import Resume from './pages/resume/Resume.jsx';


// Define the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      { path: '/', element: <Index /> },
      { path: '/contact', element: <Contact /> },
      { path: '/login', element: <Login /> },
      { path: '/not-found', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
      { path: '/about', element: < About/> },
      { path: '/resume', element: < Resume/> },
      { path: '/blogs', element: < Blog/> },
      { path: '/projects', element: < Project/> },
      { path: '/create-project', element:  < CreateProject/>  },
      { path: '/project/edit/:slug', element: < EditProject/> },
      { path: '/create-blog', element:  < CreateBlog/>  },
      { path: '/blog/edit/:slug', element: < EditBlog/> },

      { path: '/project/:slug', element: < ProjectDetails/> },
       { path: '/blog/:slug', element: < BlogDetails/> },
      
    
    ],
  },
 
]);

const queryClient = new QueryClient();

function App() {
    return (
      <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            </QueryClientProvider>
        
    );
}

export default App;
