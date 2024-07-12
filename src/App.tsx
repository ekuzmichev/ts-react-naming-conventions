import React, { FC } from "react";
import { UserGreeter } from "./single-exported-members/classes/UserGreeter";
import { PathDirection } from "./single-exported-members/enums/classic-enum/PathDirection";
import { ArrowDirection } from "./single-exported-members/enums/enum-as-const-object/ArrowDirection";
import { InfoCard } from "./single-exported-members/react-components/InfoCard";
// TODO: The import below is written manually (not with help of VS Code). This is not convinient in large project
import * as NullishUtils from "./multiple-exported-members/module-as-a-bunch-of-functions/nullish-utils";
// TODO: The import below is written manually (not with help of VS Code). This is not convinient in large project
import * as UserTrading from "./multiple-exported-members/domain-grouped-types/user-trading";
import { StringUtils } from "./single-exported-members/functions/module-as-const-object/StringUtils";
import { calculateSum } from "./single-exported-members/functions/single-function-in-file/calculateSum";
import { EmployeeDetails } from "./single-exported-members/interfaces/EmployeeDetails";
import { PetInfo } from "./single-exported-members/types/PetInfo";

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

  const nullish: boolean = NullishUtils.isNullish("foo");

  const trades: UserTrading.Trade[] = [
    {
      id: "1",
      createdBy: "system",
      direction: UserTrading.TradeDirection.Buy,
      price: 200.0,
    },
  ];

  const portfolio: UserTrading.Portfolio = {
    user: "Mike",
    trades,
  };

  return (
    <>
      <hr />
      <div>
        <p>Sum of [1, 2, 3]: {sum}</p>
        <p>The '' is empty: {String(empty)}</p>
        <p>The ' ' is blank: {String(blank)}</p>
        <p>User greeting: {userGreeting}</p>
        <p>Employee details: {JSON.stringify(employeeDetails)}</p>
        <p>Pet info: {JSON.stringify(petInfo)}</p>
        <p>Arrow direction: {arrowDirection}</p>
        <p>Path direction: {pathDirection}</p>
        <p>The 'foo' is nullish: {String(nullish)}</p>
        <p>Portfolio: {JSON.stringify(portfolio)}</p>
      </div>
      <hr />
      <InfoCard title="Title here" paragraph="Content here" />
      <hr />
    </>
  );
};
