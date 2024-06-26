import { Accordion, AccordionItem } from '@/components/ui/Accordion'
import { FC } from 'react'


const Chat: FC = () => {
  return(
    <Accordion
    type='single'
    collapsible
    className='relative bg-white z-40 shadow' > 
      <AccordionItem value='item-1' >
          <div className='fixed right-8 w-80 bottom-8 bg-white border border-gray-200 rounded-md overflow:hidden'>
             <div className=''></div>
            </ div>
        </ AccordionItem>
    </Accordion> // Add closing curly brace here
  )
}

export default Chat