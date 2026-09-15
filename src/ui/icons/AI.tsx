type Props = React.SVGProps<SVGSVGElement>;

const AI: React.FC<Props> = (props) => {
  return (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <path
          id="Vector 2"
          d="M8.46429 8.85714L10.5 1L12.5357 8.85714L20 11L12.5357 13.8571L10.5 21L8.46429 13.8571L1 11L8.46429 8.85714Z"
          stroke="currentColor"
          stroke-linejoin="round"
        ></path>
        <path
          id="Vector 4"
          d="M16.9643 4.03571L17.5 6L18.0357 4.03571L20 3.5L18.0357 2.78571L17.5 1L16.9643 2.78571L15 3.5L16.9643 4.03571Z"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="0.5"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  );
};

export default AI;
