import React, { useState, useEffect } from "react";
import "./apifetch_table.css";

const UserTable = () => {
  const url = "https://dummyjson.com/users";
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [filterUsersData, setFilterUsersData] = useState([]);

  const [usersPerPage] = useState(2); // default users per page
  const [currentPage, setCurrentPage] = useState(1); // default page will be 1

  const userData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setUsers(res.users); // set user data from API
        setLoading(false); // set loader false
        setFilterUsersData(res.users);
      });
  };

  // Filter user
  const filterUsers = (searchKey) => {
    const filteredData = users?.filter((user) =>
      `${user.firstNmae} ${user.lastName}`
        .toLocaleLowerCase()
        .includes(searchKey)
    );
    setFilterUsersData(filteredData);
  };

  // Search User
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);
    filterUsers(value);
  };

  const indexOfLastUser = currentPage * usersPerPage; // 3 * 5 = 15
  const indexOfFirstUser = indexOfLastUser - usersPerPage; // 15 - 5 = 10

  const currentUsers = filterUsersData?.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    userData();
  }, []);

  if (loading) {
    return <div className='loader'>Loading...</div>;
  }

  return (
    <div className='caontainer'>
      {/* Search bar */}
      <div className='search-container'>
        <input
          placeholder='enter user name'
          type='text'
          onChange={handleSearch}
          value={searchValue}
        />
      </div>
      {/* Table */}
      <table className='user-table'>
        <thead>
          <tr>
            <th>Sl</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Company</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers?.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{`${user?.firstName} ${user?.lastName}`}</td>
              <td>{user?.email}</td>
              <td>{user?.phone}</td>
              <td>{`${user.address.address}, ${user.address.city}`}</td>
              <td>{user.company.name}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className='pagination-container'>
        <Pagination
          usersPerPage={usersPerPage}
          totalUser={filterUsersData.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

const Pagination = ({ usersPerPage, totalUser, currentPage, paginate }) => {
  const pageNumbers = []; // 1,2,3,4,5,6
  // 30, 5 = 6;
  const totalPages = Math.ceil(totalUser / usersPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className='pagination'>
      {pageNumbers?.map((number) => (
        <li key={number}>
          <button
            className={`pagination-button ${
              currentPage === number ? "active" : ""
            }`}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserTable;