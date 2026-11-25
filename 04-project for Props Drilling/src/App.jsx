import React from 'react'
import Card from './components/Card'



const App = () => {
  const jobs = [
  {
    id: 1,
    companyLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    posted: "5 days ago",
    post: "Full Stack Developer",
    timing: "Full Time",
    pay: "$100/hr",
   city: "Delhi india"
  },
  {
    id: 2,
    companyLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    posted: "2 days ago",
    post: "Frontend Developer",
    timing: "Full Time",
    pay: "$85/hr",
     city: "Chennai india"
  },
  {
    id: 3,
    companyLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    posted: "1 day ago",
    post: "DevOps Engineer",
    timing: "Full Time",
    pay: "$90/hr",
    city: "Benglore india"
  },
  {
    id: 4,
    companyLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    posted: "3 days ago",
    post: "Backend Developer",
    timing: "Part Time",
    pay: "$75/hr",
    city: "Noida india"
  },
  {
    id: 5,
    companyLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    posted: "4 days ago",
    post: "React Developer",
    timing: "Full Time",
    pay: "$95/hr",
    city: "Gurugram india"
  },
  {
    id: 6,
    companyLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    posted: "6 days ago",
    post: "iOS Developer",
    timing: "Full Time",
    pay: "$80/hr",
     city: "mumbai india"
  },
  {
    id: 7,
    companyLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    posted: "2 days ago",
    post: "UI/UX Designer",
    timing: "Part Time",
    pay: "$70/hr",
   city: "kolkata india"
  },
  {
    id: 8,
    companyLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    posted: "7 days ago",
    post: "Cloud Engineer",
    timing: "Full Time",
    pay: "$85/hr",
    city: "Lucknow india"
  },
  {
    id: 9,
    companyLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    posted: "3 days ago",
    post: "Java Developer",
    timing: "Part Time",
    pay: "$65/hr",
    city: "Faridabad india"
  },
  {
    id: 10,
    companyLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    posted: "5 days ago",
    post: "AI/ML Engineer",
    timing: "Full Time",
    pay: "$110/hr",
    city: "mumbai india"
  }
];

  
  return (
    <div className='Parent'>
    {jobs.map(function(elem,idx){
      return <div key={idx}>
        <Card img={elem.companyLogo} companyName={elem.companyName} posted={elem.posted} post={elem.post} timing={elem.timing} pay={elem.pay} city={elem.city}/>
      </div>

    })}
      

    </div>
  )
}

export default App 

