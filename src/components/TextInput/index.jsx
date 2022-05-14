import "./styles.css";

export const TextInput = ({ searchValue, handleChange }) => (
  <input
    className="text-input"
    onChange={handleChange}
    value={searchValue}
    type="search"
    placeholder="Type your search"
  />
);
