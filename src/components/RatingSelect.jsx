

function RatingSelect({select,selected}) {
    const handleClick=(e)=>{
        select(+e.target.value)
    }


  return (
    <ul className="rating">
        {Array.from({length:10}).map((_,i)=>
        <li key={`rating-${i+1}`}>
            <input
            type='radio'
            name='rating'
            id={`num${i+1}`}
            value={i+1}
            onChange={handleClick}
            checked={selected=== i+1}
            />
            <label htmlFor={`num${i+1}`}>{i+1}</label>

        </li>
        )}
        
    </ul>
  )
}

export default RatingSelect
