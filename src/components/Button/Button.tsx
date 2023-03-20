import classNames from "classnames";
import { HiOutlineChevronDoubleDown, HiCheck } from "react-icons/hi";

type Props = {
  type?: "button" | "submit";
  variant?: "primary" | "second" | "active" | "active-black";
  active?: boolean;
  className?: string;
  children: React.ReactNode;
  icon?: boolean;
  iconCheck?: boolean;
  onClick: () => void;
  aos?: string;
  aosDuration?: string;
};

export function Button({
  type = "button",
  variant = "primary",
  icon = false,
  className,
  children,
  iconCheck = false,
  aos,
  aosDuration,
  onClick,
}: Props) {
  return (
    <button
      data-aos={aos}
      data-aos-duration={aosDuration}
      onClick={() => onClick()}
      type={type}
      className={classNames(
        "font-title text-white text-xl rounded-xl transition-all ease-in-out duration-300 no-underline py-2 px-16 flex flex-row justify-center items-center gap-2 tracking-[0.15em]",
        {
          "bg-brand-primary-200 border-2 border-brand-primary-200 hover:border-brand-primary-200 hover:ring-2 ring-brand-primary-200":
            variant === "primary",
        },
        {
          "bg-brand-black hover:ring-2 ring-brand-black border-2 border-brand-black":
            variant === "second",
        },
        {
          "bg-transparent border-solid border-2 border-brand-primary-200 focus:ring-1 ring-brand-primary-100":
            variant === "active",
        },
        {
          "bg-transparent text-brand-black hover:ring-2 ring-brand-black border-solid border-2 border-brand-black":
            variant === "active-black",
        },
        className
      )}
    >
      {children}
      {icon && <HiOutlineChevronDoubleDown fontSize="32px" color="white" />}
      {iconCheck && <HiCheck fontSize="32px" color="white" />}
    </button>
  );
}
