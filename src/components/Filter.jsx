const Filter = ({ filter, onFilterChange }) => (
    <input
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={(event) => onFilterChange(event.target.value)}
    />
  );
  
  export default Filter;