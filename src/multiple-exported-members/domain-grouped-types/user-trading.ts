// TODO: How to name the file? kebab-case.ts or PascalCase.ts?

export enum TradeDirection {
  Buy = "Buy",
  Sell = "Sell",
}

export interface Trade {
  id: string;
  createdBy: string;
  price: number;
  direction: TradeDirection;
}

export interface Portfolio {
  user: string;
  trades: Trade[];
}