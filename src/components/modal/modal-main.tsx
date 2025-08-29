import { ReactNode } from "react";

type ModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
  children: ReactNode;
};
export default function Modal({
  isOpen = false,
  onClose,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = () => {
    onClose?.();
  };

  //   const handleContentClick = (e: React.MouseEvent) => {
  //     e.stopPropagation(); // Cegah klik dalam konten menutup modal
  //   };
  return (
    <div
      onClick={handleBackdropClick}
      className="bg-black bg-opacity-50 w-[100dvw] h-[100dvh] z-50 top-0 left-0 fixed p-0 m-0"
    >
      <div
        className="p-6 rounded-xl absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
