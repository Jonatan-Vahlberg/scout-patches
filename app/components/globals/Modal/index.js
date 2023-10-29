
/*
    Fake modal that can be used to display any content. adn allows for context to be passed in.
*/

import { useEffect, useState } from "react";

const Modal = ({
    isOpen = false,
    large = false,
    backdropClassName = "",
    dismissable = true,
    onOpenChange = () => {},
    children = (handleClose) => {},
}) => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        if(isOpen) {
            setShow(true);
        }
    }, [isOpen]);

    const handleClose = () => {
        setShow(false);
        onOpenChange(false);
    }

    return ( show && (
                <div className="fixed z-[1000] inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen">

                        <div
                        onClick={dismissable ? handleClose : () => {}}
                        className={`absolute inset-0 transition-opacity ${backdropClassName}`} 
                        aria-hidden="true">
                            <div className="absolute inset-0 bg-sweden-darkest opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div
                            onClick={(e) => e.stopPropagation()}
                        className={`w-full ${large ? "" : "max-w-[500px]"} p-4`}>
                            {children(handleClose)}
                        </div>
                    </div>
                </div>
    ));
}

export default Modal;