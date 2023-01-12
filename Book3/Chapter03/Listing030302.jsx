function ParentComponent() {
  return (
    <div>
      <ChildComponent firstName="Alex" />
      <ChildComponent firstName="Mallory" />
      <ChildComponent firstName="Jennifer" />
    </div>
  );
}

function ChildComponent(props) {
  return <div>Hi, my name is {props.firstName}.</div>;
}
