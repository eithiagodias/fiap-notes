import { FabButtonStyled } from "./styles";

interface FBProps {
  children: React.ReactNode;
  handleClick: () => void;
  positionX?: 'left' | 'right';
  positionY?: 'top' | 'bottom';
}

function FabButton({
  children,
  handleClick,
  positionX = 'left',
  positionY = 'top'
}: FBProps) {
  return (
    <FabButtonStyled
      positionX={positionX}
      positionY={positionY}
      onClick={handleClick}
    >
      <p>{children}</p>
    </FabButtonStyled>
  )

}

export default FabButton;
