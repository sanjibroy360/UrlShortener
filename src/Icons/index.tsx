import {
  CheckCircle,
  ClipboardText,
  Link,
  Trash,
  ArrowSquareOut,
} from "@phosphor-icons/react";

interface IconProps {
  classNames?: string;
}

export const ClipboardIcon = ({ classNames = "" }: IconProps) => (
  <ClipboardText className={`text-sm md:text-lg ${classNames}`} />
);

export const CheckIcon = ({ classNames = "" }: IconProps) => (
  <CheckCircle
    className={`text-sm md:text-lg ${classNames}`}
    color="blue"
    weight="fill"
  />
);
export const TrashIcon = ({ classNames = "" }: IconProps) => (
  <Trash className={`text-sm md:text-lg ${classNames}`} />
);
export const LinkIcon = ({ classNames = "" }: IconProps) => (
  <Link className={`text-sm md:text-lg ${classNames}`} />
);
export const ArrowSquareOutIcon = ({ classNames = "" }: IconProps) => (
  <ArrowSquareOut className={`text-sm md:text-lg ${classNames}`} />
);
