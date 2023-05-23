// import { useState } from "react";

// export const FundraisingThermometer = () => {
//   const [currentAmount, setCurrentAmount] = useState(35);
//   const [donation, setDonation] = useState(0);
//   const percentage = (currentAmount / goal) * 100;
//   const goal = 1250;

//   return (
//     <div>
//       <h2>Current Amount: {currentAmount}</h2>
//       <h2>Fundraising Goal: {goal}</h2>
//       <div className="thermometer">
//         <div className="fill" style={{ height: `${percentage}%` }}></div>
//         <form onSubmit={setDonation}>
//           Add your donated amount!
//           <input type="text" value={donation}></input>
//           <button type="submit" className="btn btn-light"></button>
//         </form>
//       </div>
//     </div>
//   );
// };

export default FundraisingThermometer;

// import { useEffect, useState } from "react";

// export const FundraisingThermometer = () => {
//   const [goal, setGoal] = useState(10000);
//   const [currentAmount, setCurrentAmount] = useState(5000);

//   useEffect(() => {
//     // Create a WebSocket connection
//     const socket = new WebSocket("ws://example.com/socket");

//     // Event listener for receiving data
//     socket.addEventListener("message", (event) => {
//       const data = JSON.parse(event.data);
//       setCurrentAmount(data.amount);
//     });

//     // Clean up the WebSocket connection
//     return () => {
//       socket.close();
//     };
//   }, []);

//   return (
//     <div>
//       <h2>Current Amount: {35}</h2>
//       <h2>Fundraising Goal: {1250}</h2>
//       {/* Render the thermometer visual representation */}
//       {/* Add CSS styles or use a library to style the thermometer */}
//     </div>
//   );
// };

// export default FundraisingThermometer;
