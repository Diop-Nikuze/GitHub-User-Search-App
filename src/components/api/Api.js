import { useState, useEffect } from "react";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import View from "../View/View";

const Api = () => {
  const [details, setDetails] = useState([]);
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState("nikuze");
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setSearch(e.target.value);
      setDisabled(false);
    } else {
      setSearch("");
      setDisabled(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(search);
    setSearch("");
    setDisabled(true);
  };

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.github.com/users/${username}`).then((response) => {
      setDetails([response.data]);
      setLoading(false);
    });
  }, [username]);
  return (
    <Box w={650} maxWidth="90%" m="0 auto">
      <View
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        details={details}
        loading={loading}
        disabled={disabled}
        value={search}
      />
    </Box>
  );
};

export default Api;
