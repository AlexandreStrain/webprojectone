
import 
{
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pageScreens/HomePage';
import JobPostsPage from './pageScreens/JobPostsPage';
import JobPage, {jobLoader} from './pageScreens/JobPage';
import NotFoundPage from './pageScreens/NotFoundPage';
import AddJobPage from './pageScreens/AddJobPage';
import EditJobPage from './pageScreens/EditJobPage';



const App = () => 
  {
    //Add New Job
    const addJob = async (newJob:any) => 
    {
      //const res?
      await fetch
        ('/api/jobs', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newJob),
        });
      
      return;
    };

    //Delete New Job
    const deleteJob = async (id:Number) =>
    {
      //cons res?
      await fetch
      (`/api/jobs/${id}`, {
        method: "DELETE",
      });
    
    return;
    }

    //Update Job
    const updateJob = async (job:any) => 
      {
        //const res?
        await fetch
          (`/api/jobs/${job.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(job),
          });
        
        return;
      };


    const router = createBrowserRouter
    (
      createRoutesFromElements
      (
        <Route path="/" element={<MainLayout/>}> 
          <Route index element={<HomePage/>} />
          <Route path="/jobs" element={<JobPostsPage/>} />
          <Route 
            path="/jobs/:id"
            element={<JobPage deleteJob={deleteJob} />}
            loader={jobLoader}
          />
          <Route 
            path="/edit-job/:id"
            element={<EditJobPage updateJobSubmit={updateJob} />}
            loader={jobLoader}
          />
          <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      )
    );
  return  <RouterProvider router={router}/>
};

export default App;