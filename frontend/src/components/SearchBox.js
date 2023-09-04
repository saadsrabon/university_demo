// In SearchBox.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../assets/css/SearchBox.css"; // Import the CSS file

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="search-box-large"> {/* Apply the custom class */}
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search products..."
      ></Form.Control>
      <Button type="submit" variant="outline-light" className="worthy p-1">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;


// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
// import "../assets/css/SearchBox.css";

// const SearchBox = ({ history }) => {
//   const [keyword, setKeyword] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (keyword.trim()) {
//       history.push(`/search/${keyword}`);
//     } else {
//       history.push("/");
//     }
//   };

//   return (
//     <Form onSubmit={submitHandler} inline>
//       <Form.Control
//         type="text"
//         name="q"
//         onChange={(e) => setKeyword(e.target.value)}
//         placeholder="Search Products..."
//         className="mr-sm-2 ml-sm-5 search_style"
//       ></Form.Control>
//       <Button
//         type="submit"
//         variant="outline-light search_style"
//         className="p-2"
//       >
//         Search
//       </Button>
//     </Form>
//   );
// };

// export default SearchBox;
