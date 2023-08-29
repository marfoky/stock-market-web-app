type Props = {
  styles?: React.ComponentProps<"div">["className"];
  text: string;
};
const Button = ({ styles, text }: Props) => {
  return (
    <div
      className={` rounded-[0.6rem] border-red-400 border-2 py-1 px-3 ${styles}`}
    >
      {text}
    </div>
  );
};

export default Button;
