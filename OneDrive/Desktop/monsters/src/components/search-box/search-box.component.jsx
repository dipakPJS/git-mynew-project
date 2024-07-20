import "./search-box.styles.css";

const SearchBox = ({className, onChangeHandler, placeHolder}) => {
  return (
    <div className="search-box-container">
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeHolder}
        onChange={onChangeHandler}
      />
    </div>
  );
};


export default SearchBox;
