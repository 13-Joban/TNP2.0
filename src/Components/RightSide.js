import React  from 'react'
import TnpOffice from './TnpOffice'
import Faculty from './Faculty'
import Student from './Student'
import Academic from './Academic'
export default function RightSide (){
    return (
      <div className='rightside-container'>
  
      <TnpOffice />
      <Faculty />
      <Academic />
      <Student />
      </div>
    )
}
