import {useRef} from "react";

export function TextWithFocusButton()
{
    const inputEl = useRef(null);
    const onBtnClick = ()=>{
        inputEl.current.focus();
    };
    return(
        <div>
            <input ref={inputEl} type="text"/>
            <button onClick={onBtnClick}>Focus</button>
        </div>
    );

}