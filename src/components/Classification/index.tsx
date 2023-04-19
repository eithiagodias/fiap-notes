import { MouseEventHandler, useCallback, useState } from "react";

import { StyledClassificationContainer } from "./styles";
import ClassificationItem, { ClassificationItemProps } from "./partials";

type ClassificationProps = {
  items: ClassificationItemProps[],
  handleOnClick: (a: string | undefined) => void
  defaultClassification?: string;
}

function Classification({
  items,
  handleOnClick,
}: ClassificationProps) {
  const [classificated, setClassificated] = useState<string>()

  const handleClick = useCallback((name: string) => {
    const current = !classificated ? name : (classificated !== name ? name : undefined);
    setClassificated(current);
    handleOnClick && handleOnClick(current)
  }, [handleOnClick])

  return (
    <StyledClassificationContainer>
      {items.map((c, i) => (
        <ClassificationItem
          key={`${i}-${c.name}`}
          {...c}
          handleOnClick={handleClick}
          classificated={c.name === classificated}
        />
      ))}
    </StyledClassificationContainer>
  );
}

export default Classification;
