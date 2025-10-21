interface Args {
  svgName: string;
  svgWidth: string;
  svgHeight: string;
  svgFill?: string;
}

/**
 * A component that renders an SVG icon based on the provided name.
 *
 * @param {string} [svgName] - string
 * @param {string} [svgWidth] - string
 * @param {string} [svgHeight] - string
 * @param {string} [svgFill] - string
 * @returns {JSX.Element|null} The rendered SVG icon or null if svgName is invalid
 *
 */
// prettier-ignore
export function svgSelector({ svgName = "", svgWidth = "0px", svgHeight = "0px", svgFill = "#fff" }: Args) {
  switch (svgName) {
    case "arrow_diagonal":
      return (
        <svg viewBox="0 0 16 16" width={svgWidth} height={svgHeight}>
          <path
            d="M1.06055 0.75H14.3939M14.3939 0.75V14.0833M14.3939 0.75L1.06055 14.0833"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="square"
            fill={svgFill}
          />
        </svg>
      );
    default:
      return <p>undefined</p>;
  }
}
