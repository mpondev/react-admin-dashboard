import PropTypes from 'prop-types';

import './Add.scss';

function Add({ columns, setOpen, slug }) {
  const handleSubmit = evt => {
    evt.preventDefault();

    // Add new item
    // axios.post(`/api/${slug}s`, {})
  };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
          X
        </span>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter(item => item.field !== 'id' && item.field !== 'img')
            .map(column => (
              <div className="item" key={column.headerName}>
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

Add.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  setOpen: PropTypes.func,
  slug: PropTypes.string,
};

export default Add;
