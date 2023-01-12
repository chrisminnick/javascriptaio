import { Blink, SolidBorderBox } from './StyleElements';

function App() {
  return (
    <SolidBorderBox>
      <Blink delay={1000}>
        <p>Important Message</p>
      </Blink>
    </SolidBorderBox>
  );
}

export default App;
