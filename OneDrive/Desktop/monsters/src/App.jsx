import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [robotList, setRobotList] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState(robotList);

  
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    
    setSearchField(searchFieldString);
  };
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobotList(users));
  }, []);

  useEffect(() => {

    const newFilteredRobots = robotList.filter((robots) => {
      return robots.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredRobots(newFilteredRobots);

  }, [robotList, searchField]);


  return (
    <div className="App">
      {/* title */}
      <h1 className="robot-title">Robots Rolodex</h1>
      {/* searchBox component */}
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeHolder="Search Robots"
      />
      {/* cardlist component */}
      <CardList filteredRobots={filteredRobots} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       robots: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { robots: users };
//           },
//           () => console.log(this.state)
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { robots, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredRobots = robots.filter((robots) => {
//       return robots.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       // <div className="App">
//       //   {/* title */}
//       //   <h1 className="robot-title">Robots Rolodex</h1>
//       //   {/* searchBox component */}
//       //   <SearchBox
//       //     className="search-box"
//       //     onChangeHandler={onSearchChange}
//       //     placeHolder="Search Robots"
//       //   />
//       //   {/* cardlist component */}
//       //   <CardList filteredRobots={filteredRobots} />
//       // </div>
//     );
//   }
// }

export default App;
