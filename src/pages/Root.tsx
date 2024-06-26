import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Header from "../components/Header";
import SingleInVoice from "./InnerInvoice/InnerInvoice";
import ShowModal from "../context/showEdit";
import { useState } from "react";
import Protect from "./Protect";
import NotFound from "./NotFound/NotFound";
import Registration from "./Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protect>
        <Home />
      </Protect>
    ),
  },
  {
    path: "/:id",
    element: <SingleInVoice />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Root = () => {
  const [show, setShow] = useState(false);
  const showModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  return (
    <ShowModal.Provider value={{show,showModal,closeModal,}}>
      <div className="h-full w-full overflow-x-hidden">
        <Header />
        <div className=" lg:min-h-full bg-lightBG dark:bg-dark max-h-[calc(100dvh-80px)] h-full overflow-auto">
          <RouterProvider router={router} />
        </div>
      </div>
    </ShowModal.Provider>
  );
};

export default Root;
