import { useRef } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import '../style.css'

export const AccordionItem = ({ title, content, isOpen, onClick }: any) => {
  const contentHeight = useRef<any>();
   return(
     <div className="wrapper" >
     <button className={`question-container ${isOpen ? 'active' : ''}`} onClick={onClick} >
      <p className='question-content'>{title}</p>
      <RiArrowDropDownLine className={`arrow ${isOpen ? 'active' : ''}`} /> 
     </button>
 
      <div ref={contentHeight} className="answer-container" style={
           isOpen
           ? { height: contentHeight.current.scrollHeight }
           : { height: "0px" }
          }>
       <p className="answer-content">{content}</p>
      </div>
    </div>
   )
 }