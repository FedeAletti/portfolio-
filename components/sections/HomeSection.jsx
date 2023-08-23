import React from 'react'
import { Chip } from '../utils/Chip'

export const HomeSection = () => {
  const TECHNOLOGIES = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "NextJS", "NodeJS", "Express"]

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello I'm Federico Aletti</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          {/* <button className="btn btn-primary">Get Started</button> */}
          <div className='flex flex-wrap gap-3 items-center justify-center my-5'>
            {TECHNOLOGIES.map(technology => <Chip name={technology} />)}
          </div>
        </div>
      </div>

    </div>
  )
}
