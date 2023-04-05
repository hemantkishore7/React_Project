import React from "react";
import { Outlet } from "react-router-dom";
import StartingForm from "../../Page/StartingForm";

export default function Main() {
   const route = [
    {
      id:'student',
      create : '/main/create',
      login : '/main/login'
    }
   ]
  return (
    <div>
      <StartingForm/>
            <Outlet />
    </div>
  );
}
