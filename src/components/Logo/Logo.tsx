import classNames from 'classnames';

type Props = {
  width?: string | number;
  height?: string | number;
  className?: string;
  logoTipo?: boolean;
};

export function Logo({
  width = 200,
  height = 100,
  className,
  logoTipo,
}: Props) {
  return (
    <div
      style={{ width, height }}
      className={classNames(
        'bg-no-repeat bg-center bg-contain',
        {
          'bg-logoTipo': logoTipo === true,
        },
        {
          'bg-logo': logoTipo === false,
        },
        className
      )}
    />
  );
}
