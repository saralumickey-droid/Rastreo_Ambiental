import SimplePage from "../components/SimplePage";
import * as React from "react";

type GenericModuleProps = {
  title: string;
  back: string;
};

export default function GenericModule({ title, back }: GenericModuleProps) {
  return (
    <SimplePage title={title} back={back}>
      <div className="card">
        <p>
          Módulo convertido a React. La página original estaba vacía o solo
          contenía la estructura inicial.
        </p>
      </div>
    </SimplePage>
  );
}