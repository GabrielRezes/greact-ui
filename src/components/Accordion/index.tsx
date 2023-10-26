import { useState } from 'react';
import './style.css'
import { AccordionItem } from './AccordionItem';
import data from './data';

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
 
  const handleItemClick = (index: any) => {
   setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
 
  return (
   <div className='container'>
     {data.map((item, index) => (
     <AccordionItem
      key={index}
      title={item.title}
      content={item.content}
      isOpen={activeIndex === index}
      onClick={() => handleItemClick(index)}
     />
    ))}
   </div>
  )
 };