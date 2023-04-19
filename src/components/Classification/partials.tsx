import { MouseEventHandler, useState } from "react";

import { StyledClassificationItemContainer } from "./styles";

export type ClassificationItemProps = {
    name: string
    label: string
    classificated?: boolean
    handleOnClick?: (a: string) => void
}

function ClassificationItem({
    name,
    label,
    classificated = false,
    handleOnClick,
}: ClassificationItemProps) {

    const handleClick = () => {
        handleOnClick && handleOnClick(name)
    }

    return (
        <StyledClassificationItemContainer
            onClick={handleClick}
            classificated={classificated}
        >
            <label>{label}</label>
            <span className="material-icons-outlined">
                arrow_forward_ios
            </span>
        </StyledClassificationItemContainer>
    );
}

export default ClassificationItem;
