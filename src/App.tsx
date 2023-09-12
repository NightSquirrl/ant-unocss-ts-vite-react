// import React from 'react'
import { useRoutes } from "react-router-dom";
import routes from "./router";
import Header from "@/components/Header";
export default function App() {
  return (
    <>
      <Header />
      <div className="h-64"></div>
      {useRoutes(routes)}
    </>
  );
}
