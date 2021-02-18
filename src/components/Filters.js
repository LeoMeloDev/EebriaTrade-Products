import React from "react";

const Filters = ({
  onBeerClick,
  onCiderClick,
  onAsc,
  onDesc,
  clearFilters
}) => {
  return (
    <div>
      <h3 className="filter-main-title">What do I want?...</h3>
      <div className="filter">
        <div className="filter-box">
          <h3 className="filter-box-section">...Beer or Cider?</h3>
          <button
            aria-label="show all beers"
            className="filter-btn"
            onClick={onBeerClick}
          >
            Beer
          </button>
          <button
            aria-label="show all ciders"
            className="filter-btn"
            onClick={onCiderClick}
          >
            Cider
          </button>
          <button
            aria-label="clear filter"
            className="filter-btn"
            onClick={clearFilters}
          >
            Nope, go back...
          </button>
        </div>
        <div className="filter-box-last">
          <h3 className="filter-box-section">...Save a bit or big spender?</h3>
          <button
            aria-label="show from lowest to highest price"
            className="filter-btn"
            onClick={onAsc}
          >
            On a budget
          </button>
          <button
            aria-label="show from highest to lowest price"
            className="filter-btn"
            onClick={onDesc}
          >
            Party Time!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
