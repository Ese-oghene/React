import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import HomePage from './Pages/HomePage';
import JobPages from './Pages/JobPages';
import NotFoundPage  from "./Pages/NotFoundPage";
import JobPage, { jobLoader } from './Pages/JobPage';
import AddJobPage from './Pages/AddJobPage';
import EditJobPage from './Pages/EditJobPage';


// const API_BASE = import.meta.env.VITE_API_BASE;

//const API_BASE = import.meta.env.VITE_API_BASE; // or hardcode

const API_BASE = 'https://json-api-dmw4.onrender.com';

const App = () => {
  // Add new Job
  const addJob = async (newJob) => {
    const res = await fetch(`${API_BASE}/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`${API_BASE}/jobs/${id}`, {
      method: 'DELETE'
    });
    return;
  }

  // Update job
  const updateJob = async (job) => {
    const res = await fetch(`${API_BASE}/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobPages />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App




