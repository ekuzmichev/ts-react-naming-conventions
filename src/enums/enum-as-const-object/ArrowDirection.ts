export const ArrowDirection = {
  Up: "Up",
  Down: "Down",
} as const;

export type ArrowDirection =
  (typeof ArrowDirection)[keyof typeof ArrowDirection];
