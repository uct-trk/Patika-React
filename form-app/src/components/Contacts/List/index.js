import React, { useState } from "react";

const List = ({ contacts }) => {
  const [filterText, setFilterText] = useState("");

  // contactları filtrelemek
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase());
    });
  });
  const filteredContact = (e) => {
    setFilterText(e.target.value);
  };
  console.log(filtered);

  return (
    <div>
      <input
        value={filterText}
        onChange={filteredContact}
        placeholder="Filter Contact"
      />
      <ol className="list">
        {filtered.map((contact, index) => (
          <li key={index}>
              <span>{contact.fullname}</span>
              <span>{contact.phone_number}</span>
          </li>
        ))}
      </ol>
      <p>Total Contacts: {filtered.length}</p>
    </div>
  );
};

export default List;
