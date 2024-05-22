export function Users(props) {
  const student = [{ name: "Dinesh", email: "dk2gmail.com", RNO: 13 }];

  return (
    <div>
      <button onClick={() => props.data(student)}>Click Me</button>
    </div>
  );
}
