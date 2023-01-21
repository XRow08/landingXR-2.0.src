import classNames from 'classnames';

type Props = {
  size?: 'big' | 'normal';
  color?: 'red' | 'black' | 'white';
  className?: string;
  children: React.ReactNode;
};

export function Title({ children, className, size, color }: Props) {
  return (
    <>
      <h1
        className={classNames(
          'font-title tracking-[0.15em]',
          {
            'text-[88px]': size === 'big',
          },
          {
            'text-[44px]': size === 'normal',
          },
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
