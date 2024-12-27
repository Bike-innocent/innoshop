// import React, { useEffect, useState } from "react";
// import axiosInstance from "../../axiosInstance"; // Adjust the path as necessary

// function UserAddress() {
//   const [userAddresses, setUserAddresses] = useState([]); // State for user addresses
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   useEffect(() => {
//     const fetchUserAddresses = async () => {
//       try {
//         const response = await axiosInstance.get("/user-addresses"); // API endpoint
//         setUserAddresses(response.data);
//       } catch (err) {
//         console.error("Error fetching user addresses:", err);
//         setError("Failed to fetch user addresses. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserAddresses();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">User Addresses</h1>
//       {loading && <p>Loading user addresses...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       {!loading && !error && (
//         <table className="min-w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 px-4 py-2 text-left">#</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">User Name</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">Address</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">City</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">State</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">Postal Code</th>
//               <th className="border border-gray-300 px-4 py-2 text-left">Country</th>
//             </tr>
//           </thead>
//           <tbody>
//             {userAddresses.map((user, index) =>
//               user.user_addresses.map((userAddress) => (
//                 <tr key={userAddress.id} className="hover:bg-gray-100">
//                   <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
//                   <td className="border border-gray-300 px-4 py-2">{user.name}</td>
//                   <td className="border border-gray-300 px-4 py-2">{user.email}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {userAddress.address.address_line_1}{" "}
//                     {userAddress.address.address_line_2 || ""}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {userAddress.address.city}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {userAddress.address.state}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {userAddress.address.postal_code}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {userAddress.address.country}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default UserAddress;






import React, { useEffect, useState } from "react";
import axiosInstance from "../../axiosInstance"; // Path to your axios instance

const UserAddress = () => {
  const [userAddresses, setUserAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user addresses on component mount
    const fetchUserAddresses = async () => {
      try {
        const response = await axiosInstance.get("/user-addresses");
        setUserAddresses(response.data); // Set fetched data to state
      } catch (error) {
        console.error("Error fetching user addresses:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchUserAddresses();
  }, []);

  return (
    <div className="container mx-auto p-4 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-5">User Addresses</h1>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <table className="min-w-full bg-white border border-gray-300 ">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">#</th>
              <th className="py-2 px-4 border">User Email</th>
              <th className="py-2 px-4 border">Address </th>
              <th className="py-2 px-4 border">City</th>
              <th className="py-2 px-4 border">State</th>
              <th className="py-2 px-4 border">Postal Code</th>
              <th className="py-2 px-4 border">Country</th>
            </tr>
          </thead>
          <tbody>
            {userAddresses.length > 0 ? (
              userAddresses.map((user, index) =>
                user.addresses.map((address, addrIndex) => (
                  <tr key={`${user.id}-${addrIndex}`} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border text-center">{index + 1}</td>
                    <td className="py-2 px-4 border">{user.email}</td>
                   
                      <td className="py-2 px-4 border">
                        {address.address_line_1}{" "}
                        {address.address_line_2 || ""}
                      </td>

                    
                    <td className="py-2 px-4 border">{address.city}</td>
                    <td className="py-2 px-4 border">{address.state}</td>
                    <td className="py-2 px-4 border">{address.postal_code}</td>
                    <td className="py-2 px-4 border">{address.country}</td>
                  </tr>
                ))
              )
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  No users or addresses found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserAddress;
