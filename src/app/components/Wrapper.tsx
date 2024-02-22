import  { FC,ReactNode } from 'react'

const Wrapper: FC<{children:React.ReactNode}> = ({children})=> {
  return (
    <div className='default'>
        {children}
    </div>
  )
}

export default Wrapper