import SelectInput from "../SelectInput";
import TextAreaInput from "../TextAreaInput";
import TextInput from "../TextInput";

function Body({ type, options }) {
  let Components;

  if (type === "text") {
    Components = TextInput;
  } else if (type === "textarea") {
    Components = TextAreaInput;
  } else if (type === "select") {
    Components = SelectInput;
  } else {
    return null;
  }

  return <Components options={options} />;
}

export default Body;
