const Greeting = ({ name }: { name: string }) => {
  return (
    <div className="text-color my-8 grid justify-center rounded text-3xl">
      Hey, {name}!
    </div>
  );
};

export default Greeting;
