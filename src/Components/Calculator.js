import { useState } from 'react'
import React from 'react'
import '../Style.css'

function Calculator() {
  const [value,setValue]= useState('');
  return (
 <>

 <div className="container-fluid">
 <h1 className='text' >Calculator Using React JS</h1> 

  <div className="calci">
  <form action="">
    <div className='first'> 
    <input type="text" value={value} />
    </div>
<div>
  <input className='all' type="button" value="AC" onClick={e => setValue('') } />
  <input className='all' type="button" value="Del"onClick={e => setValue(value.slice(0,-1)) }  />
  <input className='hey' type="button" value="%" onClick={e => setValue(value + e.target.value) } />
  <input  className='hey'  type="button" value="/"onClick={e => setValue(value + e.target.value) } />
</div>
<div>
  <input  className='hey' type="button" value="7" onClick={e => setValue(value + e.target.value) } />
  <input className='hey' type="button" value="8" onClick={e => setValue(value + e.target.value) } />
  <input className='hey' type="button" value="9" onClick={e => setValue(value + e.target.value) }/>
  <input className='hey' type="button" value="*"onClick={e => setValue(value + e.target.value) } />
</div>
<div>
  <input className='hey' type="button" value="4"onClick={e => setValue(value + e.target.value) } />
  <input className='hey' type="button" value="5" onClick={e => setValue(value + e.target.value) }/>
  <input className='hey' type="button" value="6" onClick={e => setValue(value + e.target.value) }/>
  <input className='hey' type="button" value="-"onClick={e => setValue(value + e.target.value) } />
</div>
<div>
  <input className='hey' type="button" value="1"onClick={e => setValue(value + e.target.value) } />
  <input className='hey' type="button" value="2" onClick={e => setValue(value + e.target.value) }/>
  <input className='hey' type="button" value="3" onClick={e => setValue(value + e.target.value) }/>
  <input className='hey' type="button" value="+" onClick={e => setValue(value + e.target.value) }/>
</div>
<div>
<input className='hey' type="button" value="0" onClick={e => setValue(value + e.target.value) }/>
<input className='hey' type="button" value="00" onClick={e => setValue(value + e.target.value) }/>
  <input className='hey' type="button" value="." onClick={e => setValue(value + e.target.value) }/>
  <input className='last' type="button" value="="onClick={e => setValue(eval(value))} />

</div>

  </form>
  </div>
 </div>
 
 
 
 
 
 
 
 
 
 
 
 
 </>
  )
}

export default Calculator
