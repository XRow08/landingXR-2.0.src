import { Container } from '../Container';

type Props = {
  width?: string | number;
  height?: string | number;
  img: string;
  link: string;
};

export function Card({ img, link, width = 300, height = 300 }: Props) {
  return (
    <div
      style={{ width, height }}
      className="rounded-[20px] relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <a href={link} target="_blank">
        <img src={img} draggable={false} />
      </a>
    </div>
  );
}
