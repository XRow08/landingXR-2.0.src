import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: Props) {
  return (
    <div
      className={classNames(
        'bg-[rgba(255, 255, 255, 0.25)] shadow-2xl backdrop-blur-sm rounded-md p-12',
        className
      )}
    >
      {children}
    </div>
  );
}
