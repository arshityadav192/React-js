import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
      <div className='Card'>
      <div className="Top">
        <img src={props.img} />
        <button>Save <Bookmark  size={15}/> </button>
      </div>
      <div>
           <div className="Centre">
            <h3>{props.companyName} <span>{props.posted}</span></h3>
            <h2>{props.post}</h2>
            <div className='tag'>
              <h4>{props.timing}</h4>
              <h4>Senior Level </h4>
            </div>
      </div>
      </div>
   
      <div className="Bottom">
      
          <div>
            <h3>{props.pay}</h3>
            <p>{props.city}</p>
          </div>
          <button>Apply Now</button>
       

      </div>
    </div>
  )
}

export default Card
