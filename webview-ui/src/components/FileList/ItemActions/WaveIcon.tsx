const WaveIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M171.4,244.6c2.6-39.4,33.6-71.1,72.3-73.5V125c-63.6,2.6-114.8,54.7-117.4,119.6H171.4z" />
      <path d="M171.4,375c2.6-39.4,33.6-71.1,72.3-73.5v-46.1C180.1,258,129,310.1,126.3,375H171.4z" />
      <path d="M326.1,125c-2.6,39.4-33.6,71.1-72.3,73.5v46.1c63.6-2.6,114.8-54.7,117.4-119.6H326.1z" />
      <path d="M326.1,255.4c-2.6,39.4-33.6,71.1-72.3,73.5V375c63.6-2.6,114.8-54.7,117.4-119.6H326.1z" />
    </svg>
  );
};

export default WaveIcon;
