import Title from '../components/Title';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAll from '../components/ViewAll';

const HomePage = () => {
  return (
    <>
    <Title />
    <HomeCards/>
    <JobListings isHome={true}/>
    <ViewAll/>
    </>
  )
}

export default HomePage