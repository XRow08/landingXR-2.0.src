import classNames from 'classnames';

export function Arrow({ onClick, className }: any) {
  return (
    <div onClick={onClick} className={classNames('cursor-pointer', className)}>
      <svg
        width="33"
        height="38"
        viewBox="0 0 33 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.25 18.6195L0 37.2391L1.62777e-06 0L32.25 18.6195Z"
          fill="#333333"
        />
      </svg>
    </div>
  );
}
