type Props = React.SVGProps<SVGSVGElement>;

const NextflowIcon: React.FC<Props> = (props) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      xmlSpace="preserve"
      {...props}
    >
      <path
        fill="currentColor"
        d="M0,92.2 c78.8,5.2,142.2,68.6,147,147.6 h92.2 c-5.2,-130,-109.4,-234.4,-239.2,-239.8 V92.2 z"
      />
      <path
        fill="currentColor"
        d="M147.6,260.8 c-5.2,78.8,-68.6,142.2,-147.6,147 v92.2 c130,-5.2,234.4,-109.4,239.8,-239.2 H147.6 z"
      />
      <path
        fill="currentColor"
        d="M352.4,239.4 c5.2,-79,68.6,-142.2,147.6,-147 v-92.2 c-130,5.2,-234.4,109.4,-239.8,239.2 H352.4 z"
      />
      <path
        fill="currentColor"
        d="M500,408 c-78.8,-5.2,-142.2,-68.6,-147,-147.6 h-92.2 c5.2,130,109.4,234.4,239.2,239.8 V408 z"
      />
    </svg>
  );
};

export default NextflowIcon;
