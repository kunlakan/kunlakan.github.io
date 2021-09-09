
import Button from './Buttons/Button';

function ControllerL() {
  return (
    <div className="ControllerL">
      <div><Button type="Up" side="ButtonL" /></div>
      <div >
        <Button type="Left" side="ButtonL" />
        <div className="ButtonGapL" />
        <Button type="Right" side="ButtonL" />
      </div>
      <div><Button type="Down" side="ButtonL" /></div>
    </div>
  );
}

export default ControllerL;
