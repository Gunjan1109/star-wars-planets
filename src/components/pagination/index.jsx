import ReactPaginate from "react-paginate";
import "./style.css";

const PaginationBar = ({
  pageCount,
  forcePage,
  onPageChange,
}) => {
  return (
    <>
      {pageCount >= 2 && (
         <div className="pagination-container">
         <ReactPaginate
         containerClassName={"pagination"}
         pageClassName={"page-item"}
         activeClassName={"active"}
           forcePage={forcePage}
           breakLabel="..."
           nextLabel={
             <div className="pagination-button">
               <span>Next</span>
             </div>
           }
           onPageChange={onPageChange}
           marginPagesDisplayed={1}
           pageCount={pageCount}
           previousLabel={
             <div className="pagination-button">
               <span>Prev</span>
             </div>
           }
           disabledLinkClassName="disabled"
         />
       </div>
      )}
    </>
  );
};

export default PaginationBar;
