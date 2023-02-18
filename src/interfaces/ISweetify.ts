export const Options = {
  positions: {
    TopRight: "top-right",
    BottomRight: "bottom-right",
    TopLeft: "top-left",
    BottomLeft: "bottom-left",
    MiddleCenter: "middle-center",
  },

  widths: {
    Small: "sm",
    Medium: "md",
    Large: "lg",
    XLarge: "xl",
  },
} as const;

export interface ISweetify {
  children: React.ReactNode;
  buttonText?: string;
  className?: string;
  fullscreenBelow?: typeof Options.widths[keyof typeof Options.widths];
  options?: {
    position?: typeof Options.positions[keyof typeof Options.positions];
    width?: typeof Options.widths[keyof typeof Options.widths];
  };
}
