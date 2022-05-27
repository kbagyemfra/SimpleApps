import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

const Searchbar = () => {
  return (
    <>
      <div className="search">
        <div className="search-input">
          <SearchIcon className="search-input-icon" />
          <input type="text" />
          <MicIcon />
        </div>
      </div>
    </>
  );
};

export default Searchbar;
