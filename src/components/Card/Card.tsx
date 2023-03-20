type Props = {
  width?: string | number;
  height?: string | number;
  img: string;
  link: string;
  aos?: string;
  aosDuration?: string;
};

export function Card({
  img,
  link,
  width = 300,
  height = 300,
  aos,
  aosDuration,
}: Props) {
  return (
    <div
      data-aos={aos}
      data-aos-duration={aosDuration}
      style={{ width, height }}
      className="rounded-[20px] relative transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <a href={link} target="_blank">
        <img src={img} draggable={false} className="rounded-[20px]" />
      </a>
    </div>
  );
}
