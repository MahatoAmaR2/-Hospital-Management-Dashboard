import React from "react";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      {/* <div className='text-3xl'>Har Har Mahadev</div> */}
      <div className="fixed top-0 left-0 w-full z-10">
      <Header /></div>
      <div className="mt-16">
      <Dashboard />
      </div>
    </>
  );
};

export default App;
