import React, { useEffect, useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Filter from "./Filter";
import ContactList from "./ContactList";
import styled from "styled-components";
import transition from "styled-transition-group";
import FilterContainer from "../StyledComponents/FilterContainer";
import { useSelector, useDispatch } from "react-redux";
// import { addItem, deleteItem, setItems } from "../Redux/actions/contacts";
import { addItem, deleteItem, setItems } from "../ReduxToolkit/toolkitActions/contacts";

const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

const App_title = transition.h1.attrs({
  unmountOnExit: true,
  mountOnEntry: true,
  timeout: 500,
})`
  color: #016f91;
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;

  &:enter { opacity: 0; 
    transform: translateX(-100%); }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:exit { opacity: 1;
  transform: translateX(0); }
  &:exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const Error = transition.div.attrs({
  unmountOnExit: true,
  mountOnEntry: true,
  timeout: 500,
})`
position: absolute;
padding: 5px 10px;
width: 300px;
top: 10px;
left: 10px;
background-color: #b81d3f;
border-radius: 8px;
text-align: center;
color: white;
  &:enter { opacity: 0; 
    transform: translateX(-100%); }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:exit { opacity: 1;
  transform: translateX(0); }
  &:exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const App = () => {
  const [error, setError] = useState(false);
  const [mount, setMount] = useState(false);

  const contacs = useSelector((state) => state.contacts);
  const filterValue = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const ghostContacts = localStorage.getItem("contacts");
    if (ghostContacts) {
      dispatch(setItems(JSON.parse(ghostContacts)));
    }
    setMount(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacs));
  });

  const addContact = (name, number) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    dispatch(addItem(contact));
  };

  const filterFN = () => {
    const filtered = contacs.filter((contact) =>
      contact.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())
    );

    return filtered.length > 0 ? filtered : contacs;
  };

  const getError = (bool, name) => {
    setError(bool);
    setTimeout(() => {
      setError(!bool);
    }, 3000);
  };

  const removeContact = (id) => {
    return dispatch(deleteItem(id));
  };

  return (
    <>
      <Error in={error}>
        <p>alredy in contacts!</p>
      </Error>
      <Container>
        <App_title in={mount}>Phonebook</App_title>
        <Form
          onAddContact={addContact}
          contacts={contacs}
          setError={getError}
        />
        <FilterContainer in={contacs.length > 1}>
          <Filter />
        </FilterContainer>
        <ContactList filterFN={filterFN} onRemove={removeContact} />
      </Container>
    </>
  );
};

export default App;


