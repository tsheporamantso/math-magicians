import Calculator from '../components/MyCalculator';

function Calc() {
  return (
    <>
      <div className="calc" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ paddingLeft: '0px', fontSize: 'xx-large' }}>Let&apos;s do some Math!</h2>
        <Calculator />
      </div>
    </>
  );
}

export default Calc;
