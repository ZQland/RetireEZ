import { FC, HTMLAttributes } from 'react'

interface ChatheaderProps {}

const ChatHeader: FC<ChatheaderProps> = ({}) => {
  return <div className='w-full flex gap-3 justify-start item-center text-zinc-800'>
    <div className='flex flex-col item-start text-sm'>
        <p className= 'text-xs text-left'>Chat with</p>
        <div className='flex gap-1.5 items-center'>
            <p className='w-2 h-2 rounded-full bg-green-500'/>
            <p className='font-medium'>Retire Support</p>
        </div>
    </div>
  </div>
}

export default ChatHeader