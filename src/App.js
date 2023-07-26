import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./redux-store/appStore";
import Feeds from "./Components/Feeds";

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <div className="bg-white">
          <div className=" text-center p-4 bg-gray-200">
            <h2 className="text-2xl m-2 font-bold text-cyan-600">
              Preliminary Round (Orkes)
            </h2>
            <h2>Developed by Prabhakaran V (prabhakaran.v2a@gmail.com)</h2>
          </div>
          <h2 className="text-2xl text-center mt-2 font-bold text-cyan-600">
            List of Feeds
          </h2>

          <div className="container mx-auto max-w-2xl px-4 sm:px-6 sm:py-10 lg:max-w-full lg:px-8">
            <div className="grid grid-cols-1">
              <Feeds />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
