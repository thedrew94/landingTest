interface Props {
  title: string;
  subtitle: string;
}

export default function NavbarListEl({ title = "", subtitle = "" }: Props) {
  return (
    <li className="">
      <h6 className="text-h5 text-[#ffffff47]">{subtitle}</h6>
      <h5 className="text-h5">{title}</h5>
    </li>
  );
}
