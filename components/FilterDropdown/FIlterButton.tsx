interface Props {
  children: Array<JSX.Element | string> | string;
  classValue?: string;
}

export default function FilterButton({ children, classValue }: Props) {
  return <span className={`${classValue} cursor-pointer text-center`}>{children}</span>;
}
