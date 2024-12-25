import { useEffect, useState } from "react";
import axios from "axios";

export default function DataUser() {
  const [users, setUsers] = useState([]); // State untuk menyimpan data pengguna

  // Ambil data pengguna dari API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9000/api/cms/auth/users"
        ); // Ganti dengan URL backend Anda
        setUsers(response.data); // Simpan data pengguna ke state
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="my-5">
      <h4 className="text-start mb-4">Data Users</h4>
      <div className="me-5">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th className="text-start" scope="col">
                Nama
              </th>
              <th className="text-start" scope="col">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td className="text-start">{user.name}</td>
                <td className="text-start">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
