
import React, { useState } from "react";

const Crud = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isId, setIsId] = useState("")
  const [modal, setModal] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      date: Date.now(),
      fName,
      lName,
      email
    }

    if (isId) {



      setData((data) =>
        data.map((item) => item.date === isId ? { ...item, fName, lName, email } : item)
      )
      setIsId("")



    } else {
      setData([...data, formData])
    }


    setFname("");
    setLname("");
    setEmail("");
    setModal(false);
  };

  const handleRemove = (d) => {

    setData((data) => data.filter((item) => item.date !== d))

  }

  const handleEdit = (user) => {
    setModal(true)

    setIsId(user.date)
    setFname(user.fName);
    setLname(user.lName)
    setEmail(user.email)
  }


  const toggle = () => {
    setModal(!modal);
  };



  const filteredData = data.filter((user) => {
      return user.fName.toLowerCase().includes(search.toLowerCase()) ||
      user.lName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  }
  );

 


  return (
    <>
      <div className="py-5 min-vh-100">
        <div className="container">
          <h1 className="fw-bold text-primary text-center mb-5">
            🚀 Crud Operation
          </h1>

          {/* Card Wrapper */}
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-body p-4">
              {/* Top Controls */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <button
                  className="btn btn-success px-4 py-2 rounded-pill shadow-sm"
                  onClick={toggle}
                >
                  ➕ Add User
                </button>

                {/* Search Input */}
                <input
                  type="text"
                  placeholder="🔍 Search user..."
                  className="form-control w-25 rounded-pill shadow-sm"
                  value={search}
                  onChange={handleSearch}
                />
              </div>

              {/* Table Section */}
              <h5 className="fw-bold text-secondary mb-3">📋 User List</h5>
              <div className="table-responsive">
                <table className="table table-hover align-middle text-center shadow-sm">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Email</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>

                    {filteredData.length > 0 ? (
                      filteredData.map((user, index) => (
                        <tr key={user.date}>
                          <th scope="row">{index + 1}</th>
                          <td>{user.fName}</td>
                          <td>{user.lName}</td>
                          <td>{user.email}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-warning me-2 rounded-pill px-3 shadow-sm"
                              onClick={() => handleEdit(user)}
                            >
                              ✏️ Edit
                            </button>
                            <button
                              className="btn btn-sm btn-danger rounded-pill px-3 shadow-sm"
                              onClick={() => handleRemove(user.date)}
                            >
                              🗑️ Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-muted">
                          No users found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="d-flex justify-content-between mt-3">
                <small className="text-muted">
                  Showing <b>{data.length}</b> entries
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4 shadow-lg">
              <div className="modal-header">
                <h5 className="modal-title fw-bold text-primary">
                  👤 Add New User
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggle}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  {/* First Name */}
                  <div className="mb-3 text-start">
                    <label className="form-label fw-semibold">First Name</label>
                    <input
                      type="text"
                      className="form-control rounded-pill shadow-sm"
                      placeholder="Enter first name"
                      value={fName}
                      onChange={(e) => setFname(e.target.value)}
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div className="mb-3 text-start">
                    <label className="form-label fw-semibold">Last Name</label>
                    <input
                      type="text"
                      className="form-control rounded-pill shadow-sm"
                      placeholder="Enter last name"
                      value={lName}
                      onChange={(e) => setLname(e.target.value)}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3 text-start">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                      type="email"
                      className="form-control rounded-pill shadow-sm"
                      placeholder="example@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-pill shadow-sm py-2 fw-semibold"
                  >
                    🚀 Save User
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Crud;
