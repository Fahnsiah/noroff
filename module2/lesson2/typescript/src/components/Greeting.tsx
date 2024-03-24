interface GreetingProps {
  name: string;
  age: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <div>
      <h4>My Greeting Example</h4>
      Hello, {name}! You are {age} years old.
    </div>
  );
};

export default Greeting;
