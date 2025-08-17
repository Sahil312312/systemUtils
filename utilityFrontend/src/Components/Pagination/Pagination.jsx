import React from "react";
import "./Pagination.css";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="pagination-container">
      <button
        className="pagination-btn"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ⬅ Prev
      </button>

      <div className="pagination-info">
        Page <span className="highlight">{currentPage}</span> of{" "}
        <span className="highlight">{totalPages}</span>
      </div>

      <button
        className="pagination-btn"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next ➡
      </button>
    </div>
  );
};

export default Pagination;
