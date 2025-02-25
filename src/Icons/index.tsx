import { CheckCircle, ClipboardText, Link, Trash } from "@phosphor-icons/react";

const ICON_SIZE = 20;

export const ClipboardIcon = () => <ClipboardText size={ICON_SIZE} />;
export const CheckIcon = () => (
  <CheckCircle size={ICON_SIZE} color="green" weight="fill" />
);
export const TrashIcon = () => <Trash size={ICON_SIZE} />;
export const LinkIcon = () => <Link size={ICON_SIZE} />;
