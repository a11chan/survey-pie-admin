import { Input } from "antd";

const { TextArea } = Input;

function TextInput({ options }) {
  return <TextArea placeholder={options.placeholder} maxLength={options.max} />;
}

export default TextInput;
