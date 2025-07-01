type CustomInputFieldProps = {
  title: string;
  onChange: () => void;
};

export default function CustomInputField({
  title,
  onChange,
}: CustomInputFieldProps) {
  return (
    <input
      placeholder={title}
      className="bg-gray-300 w-full rounded-[0.3em] py-[0.7em]"
    />
  );
}
