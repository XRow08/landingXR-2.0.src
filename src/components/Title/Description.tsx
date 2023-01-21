import classNames from 'classnames';

type Props = {
  width?: string | number;
  height?: string | number;
  size?: 'big' | 'normal';
  color?: string;
  className?: string;
  children: React.ReactNode;
};

export function Description({
  children,
  className,
  color,
  width = 'auto',
  height = 'auto',
}: Props) {
  return (
    <>
      <h1
        style={{ width, height }}
        className={classNames(
          'font-body leading-[45px] tracking-[0.15em] text-[16px]',
          {
            'text-brand-primary-200': color === 'red',
          },
          {
            'text-brand-black': color === 'black',
          },
          {
            'text-white': color === 'white',
          },
          className
        )}
      >
        {children}
      </h1>
    </>
  );
}
