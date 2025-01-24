
import { Link } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="blog-pagination">
      <ul className="justify-content-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index} className={index + 1 === currentPage ? 'active' : ''}>
            <Link to="#" onClick={() => onPageChange(index + 1)}>
              {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
