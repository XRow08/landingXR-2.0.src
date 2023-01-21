import classNames from 'classnames';

type Props = {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  color?: 'red' | 'red-dark' | 'black' | 'white';
  className?: string;
};

export function Row({
  className,
  width = 200,
  height = 5,
  color,
  borderRadius,
}: Props) {
  return (
    <>
      <div
        style={{ width, height, borderRadius }}
        className={classNames(
          'rounded-lg',
          {
            'bg-brand-primary-200': color === 'red',
          },
          {
            'bg-brand-primary-100': color === 'red-dark',
          },
          {
            'bg-brand-black': color === 'black',
          },
          {
            'bg-white': color === 'white',
          },
          className
        )}
      ></div>
    </>
  );
}
