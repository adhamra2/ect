import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

function Categories() {
  return (
    <div className='bg-white rounded-md p-5 scrollCategories'>
      <ul className='flex gap-5 items-center'>
        <Button variant="outline">מחשבי גיימנג</Button>
        <Button variant="outline">מחשב נייח</Button>
        <Button variant="outline">מחשב נייד</Button>
        <Button variant="outline">כרטיסי מסך</Button>
        <Button variant="outline">מעבדים</Button>
        <Button variant="outline">לוחות אם</Button>
        <Button variant="outline">זכרונות למחשב</Button>
        <Button variant="outline">מסכי מחשב</Button>
        <Button variant="outline">אוזניות</Button>
        <Button variant="outline">עכברים</Button>
        <Button variant="outline">מקלדות</Button>
      </ul>
    </div>
    
  )
}

export default Categories