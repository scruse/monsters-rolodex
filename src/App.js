import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList.component";
import SearchBox from "./components/SearchBox/SearchBox.component";

//class App extends Component {
// constructor() {
//   super();
//   this.state = {
//     monsters: [],
//     searchField: "",
//   };
//   console.log("constructor");
// }

// componentDidMount() {
//   console.log("componentDidMount");
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//       this.setState(() => {
//         return { monsters: users };
//       });
//     });
// }

// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();

//   this.setState(() => {
//     return { searchField };
//   });
// };
// render() {
//   console.log("render from AppJs");

//   const { monsters, searchField } = this.state;
//   const { onSearchChange } = this;

//   const filteredMonsters = monsters.filter((monster) => {
//     return monster.name.toLocaleLowerCase().includes(searchField);
//   });
const App = () => {
  console.log('rendered')
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  };

  // const filteredMonsters = monsters.filter((monster) => {
  //   return monster.name.toLocaleLowerCase().includes(searchField);
  // });

  return (
    <div className="App">
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
