import { InlineWidget } from "react-calendly";

const Services = () => {
  return (
    <div className="w-full flex flex-col items-center p-4">
      <div className="w-full lg:w-2/3 xl:w-1/2" style={{ height: '70vh' }}>
        <InlineWidget url="https://calendly.com/nicolesholistics" styles={{ height: '100%' }} />
      </div>
    </div>
  );
};

export default Services;
