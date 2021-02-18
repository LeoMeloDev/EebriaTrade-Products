import React from 'react'

const Filters = ({ onBeerClick, onCiderClick, onAsc, onDesc }) => {

    const [searchText, setSearchText] = React.useState('')

    const handleInput = (e) => {
        const text = e.target.value;
        setSearchText(text)
    }

    return (
        <div>
            <h3 className='filter-main-title'>What do I want?...</h3>
            <div className='filter'>
                <div className='filter-box'>
                    <h3 className='filter-box-section'>...Beer or Cider?</h3>
                    <button className='filter-btn' onClick={onBeerClick}>Beer</button>
                    <button className='filter-btn' onClick={onCiderClick}>Cider</button>
                </div>
                <div className='filter-box-last'>
                    <h3 className='filter-box-section'>...Save a bit or big spender?</h3>
                    <button className='filter-btn' onClick={onAsc}>On a budget</button>
                    <button className='filter-btn' onClick={onDesc}>Party Time!</button>
                </div>
                
            </div>
        </div>
    )
}

export default Filters
