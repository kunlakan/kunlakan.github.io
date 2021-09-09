
import Button from './Buttons/Button';

function ControllerR() {
  return (
    <div className="ControllerR">
      <div><Button type="Triangle" side="ButtonR" /></div>
      <div>
        <Button type="Square" side="ButtonR" />
        <div className="ButtonGapR" />
        <Button type="Circle" side="ButtonR" />
      </div>
      <div><Button type="X" side="ButtonR" /></div>
    </div>
  );
}

export default ControllerR;
