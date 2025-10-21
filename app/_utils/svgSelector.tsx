import { SvgIcons } from "@/types/types";

interface Args {
  svgName: SvgIcons;
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

export function svgSelector({ svgName = "default", svgWidth = "0px", svgHeight = "0px", svgFill = "#fff" }: Args) {
  switch (svgName) {
    case "arrow_diagonal":
      return (
        <svg
          viewBox="0 0 16 16"
          width={svgWidth}
          height={svgHeight}
          className={`min-w-[${svgWidth}] min-h-[${svgHeight}]`}
        >
          <path
            d="M1.06055 0.75H14.3939M14.3939 0.75V14.0833M14.3939 0.75L1.06055 14.0833"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="square"
            fill={svgFill}
          />
        </svg>
      );
    case "star":
      return (
        <svg
          viewBox="0 0 32 28"
          width={svgWidth}
          height={svgHeight}
          className={`min-w-[${svgWidth}] min-h-[${svgHeight}]`}
        >
          <path
            d="M19.7059 16.0835C19.8054 15.7665 20.0735 15.5524 20.5232 15.4288L32 11.8629L30.4605 8.33824L19.4335 11.8135C18.9924 11.9865 18.6465 11.9782 18.3827 11.8135C18.1232 11.6406 17.9935 11.3235 17.9935 10.8541V0L13.8162 0V10.85C13.8162 11.27 13.6995 11.5665 13.453 11.7394C13.2151 11.9124 12.8389 11.9329 12.3546 11.8094L1.23676 8.33L0 11.8671L11.1741 15.4206C11.6368 15.6018 11.9135 15.8282 12.0216 16.1329C12.0562 16.2359 12.1643 16.5447 11.6973 17.0553L4.73514 25.8465L8.11676 27.9918L15.0573 19.2335C15.5935 18.5582 16.3027 18.55 16.8389 19.2335L23.8746 28L26.9795 25.8259L20.0086 17.0265C19.7059 16.6971 19.6022 16.3841 19.7059 16.0753L19.7146 16.0835H19.7059Z"
            fill={svgFill}
          />
        </svg>
      );
    default:
      return <p>undefined</p>;
  }
}
