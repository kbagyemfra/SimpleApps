import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context/context";
import { actionTypes } from "../reducer/reducer";

const Searchbar = () => {
  const [{}, dispatch] = useStateValue();
  const [hide, setHide] = useState(true);

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    console.log("You Hit the search button, :", input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });

    navigate("/search");
  };

  return (
    <>
      <form className="search">
        <div className="search-input">
          <SearchIcon className="search-input-icon" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <MicIcon />
        </div>

        {!hide ? (
          <div className="search-buttons">
            <Button type="submit" onClick={search} variant="outlined">
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        ) : (
          <div className="search-buttons">
            <Button
              className="search-buttons-hidden"
              type="submit"
              onClick={search}
              variant="outlined"
            >
              Google Search
            </Button>
            <Button className="search-buttons-hidden" variant="outlined">
              I'm Feeling Lucky
            </Button>
          </div>
        )}
      </form>
    </>
  );
};

export default Searchbar;
