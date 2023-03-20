import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
  aos?: string;
};

export function Container({ children, className, aos }: Props) {
  return (
    <div
      data-aos={aos}
      className={classNames(
        "bg-[rgba(255, 255, 255, .25)] shadow-2xl backdrop-blur-[5px] rounded-lg p-12",
        className
      )}
    >
      {children}
    </div>
  );
}
