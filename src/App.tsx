import React, { FC } from "react";
import { UserGreeter } from "./classes/UserGreeter";
import { InfoCard } from "./components/InfoCard";
import { ArrowDirection } from "./enums/ArrowDirection";
import { PathDirection } from "./enums/PathDirection";
import { StringUtils } from "./functions/module/StringUtils";
import { calculateSum } from "./functions/single/calculateSum";
import { EmployeeDetails } from "./interfaces/EmployeeDetails";
import { PetInfo } from "./types/PetInfo";

export const App: FC = () => {
  const sum: number = calculateSum([1, 2, 3]);

  const empty: boolean = StringUtils.isEmpty("");
  const blank: boolean = StringUtils.isEmpty(" ");

  const userGreeter: UserGreeter = new UserGreeter("Mark");
  const userGreeting: string = userGreeter.greet();

  const employeeDetails: EmployeeDetails = {
    name: "Bob",
    salary: 100.0,
  };

  const petInfo: PetInfo = {
    name: "Vasya",
    hostName: "Oleg",
  };

  const arrowDirection: ArrowDirection = ArrowDirection.Down;

  const pathDirection: PathDirection = PathDirection.Left;

  return (
    <>
      <hr />
      <div>
        <p>Sum of [1, 2, 3]: {sum}</p>
        <p>'' is empty: {String(empty)}</p>
        <p>' ' is blank: {String(blank)}</p>
        <p>User greeting: {userGreeting}</p>
        <p>Employee details: {JSON.stringify(employeeDetails)}</p>
        <p>Pet info: {JSON.stringify(petInfo)}</p>
        <p>Arrow direction: {arrowDirection}</p>
        <p>Path direction: {pathDirection}</p>
      </div>
      <hr />
      <InfoCard title="Title here" paragraph="Content here" />
      <hr />
    </>
  );
};
