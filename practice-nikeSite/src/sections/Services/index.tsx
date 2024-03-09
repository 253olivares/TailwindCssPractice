import React from 'react'
import ServiceCard from '../../components/ServiceCard'
import { services } from '../../constants'

const index = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((service,index)=> (
        <ServiceCard key={index} {...service} />
      ))}
    </section>
  )
}

export default index