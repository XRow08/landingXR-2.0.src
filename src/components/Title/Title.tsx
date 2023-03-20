import classNames from "classnames";

type Props = {
  size?: "big" | "normal";
  color?: "red" | "black" | "white";
  className?: string;
  children: React.ReactNode;
  aos?: string;
  aosDuration?: string;
  ref?: any;
  onClick?: () => void;
  id?: string;
};

export function Title({
  children,
  className,
  size,
  color,
  aos,
  aosDuration,
  ref,
  onClick,
  id,
}: Props) {
  return (
    <h1
      id={id}
      ref={ref}
      onClick={onClick}
      data-aos={aos}
      data-aos-duration={aosDuration}
      className={classNames(
        "font-title tracking-[0.15em]",
        {
          "text-[88px] cursor-default": size === "big",
        },
        {
          "text-[44px] cursor-default": size === "normal",
        },
        {
          "text-brand-primary-200": color === "red",
        },
        {
          "text-brand-black": color === "black",
        },
        {
          "text-white": color === "white",
        },
        className
      )}
    >
      {children}
    </h1>
  );
}
