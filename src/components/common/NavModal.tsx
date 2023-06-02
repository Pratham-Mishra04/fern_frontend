import { useRouter } from 'next/router';
import React from 'react';

interface Props {
  modalVisibility: (visible: boolean) => void;
  visible: boolean;
}
const NavModal = ({ modalVisibility, visible }: Props) => {
  // modal logic
  const handleOnClose = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.id === 'modalcontainer') modalVisibility(false);
  };

  const router = useRouter();
  const handleMenuClick = (targetId: string) => {
    if (
      router.asPath.split('/')[1] === 'events' &&
      targetId !== 'events-section'
    )
      router.push('/');
    modalVisibility(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const yOffset = 0; // Adjust the yOffset value as per your requirement
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      modalVisibility(false);
    }
  };

  if (!visible) return null;
  return (
    <>
      <div
        onClick={handleOnClose}
        id="modalcontainer"
        className="fixed inset-0 bg-black bg-opacity-[0.8] backdrop-blur-sm flex items-center justify-center z-50"
      >
        <div className="h-full w-full font-spaceGrotesk lg:w-[100%]  glassMorphism3 rounded-lg text-3xl lg:text-3xl flex justify-around items-center flex-row">
          <div className="w-[40%] h-full flex justify-end tracking-[1rem] items-center flex-col">
            <div className="w-full h-[20%]">
              <p className="text-8xl text-white opacity-20">Ratio</p>
            </div>
            <div className="w-full h-[20%]">
              <p className="text-8xl text-white opacity-40">Funda</p>
            </div>
            <div className="w-full h-[20%]">
              <p className="text-8xl text-white opacity-70">Quant</p>
            </div>
            <div className="w-full h-[20%]">
              <p className="text-8xl text-white opacity-100">Senti Ratio</p>
            </div>
          </div>
          <div className="w-[60%] h-full">asd</div>
        </div>
      </div>
    </>
  );
};

export default NavModal;
