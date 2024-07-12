# ts-react-naming-conventions

# TypeScript + React Naming Conventions

- TS file with single exported function
> File name format: `lowerCamelCase.ts` (the same as funciton name)

`calculateSum.ts`
```typescript
export const calculateSum = (numbers: number[]): number =>
  numbers.reduce((acc, next) => acc + next, 0);
```

- TS file with bunch of functions exported as a module
> File name format: `UpperCamelCase.ts` (the same as exported module name)

`StringUtils.ts`
```typescript
const isEmpty = (s: string): boolean => s === "";
const isBlank = (s: string): boolean => s?.trim() === "";

export const StringUtils = {
  isEmpty,
  isBlank,
} as const;
```

- TS file with single exported class
> File name format: `UpperCamelCase.ts` (the same as exported class name)

`UserGreeter.ts`
```typescript
export class UserGreeter {
  greeting: string;
 
  constructor(message: string) {
    this.greeting = message;
  }
 
  greet() {
    return "Hello, " + this.greeting;
  }
}
```

- TS file with single exported interface
> File name format: `UpperCamelCase.ts` (the same as exported interface name)

`EmployeeDetails.ts`
```typescript
export interface EmployeeDetails {
  name: string;
  salary: number;
}
```

- TS file with single exported type
> File name format: `UpperCamelCase.ts` (the same as exported type name)

`PetInfo.ts`
```typescript
export type PetInfo = {
  name: string;
  hostName: string;
};
```

- TS file with single exported enum
> File name format: `UpperCamelCase.ts` (the same as exported enum name)

`ArrowDirection.ts`

`const object enum`
```typescript
export const ArrowDirection = {
  Up: "Up",
  Down: "Down",
} as const;

export type ArrowDirection = (typeof ArrowDirection)[keyof typeof ArrowDirection];
```

`classic enum`
```typescript
export enum ArrowDirection {
  Up = "Up",
  Down = "Down",
}
```
- TS file with bunch of types/interfaces/classes/enums gathered together by the domain
> File name format: `TODO.ts`

`TODO.ts`
```typescript
export enum TradeDirection {
  Buy = "Buy",
  Sell = "Sell",
}

export interface Trade {
  id: string,
  createdBy: string;
  price: number;
  direction: TradeDirection;
}

export interface Portfolio {
  user: string;
  trades: Trade[];
}
```

- TSX file with React component
> File name format: `UpperCamelCase.tsx` (the same as component name)

`InfoCard.tsx`
```typescript
// imports here ...

type InfoCardProps = {
  title: string;
  paragraph: string;
};

export const InfoCard: FC<InfoCardProps> = ({
  title,
  paragraph,
}: InfoCardProps) => (
  <div>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </div>
);
```